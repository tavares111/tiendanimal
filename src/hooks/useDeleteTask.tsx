import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Task } from "./useTask";
import useToast from "./useToast";
import NotificationToast from "@/components/NotificationToast";

async function deleteTasks(taskId: number): Promise<Task[]> {

    return fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
        method: 'DELETE'
    }).then(
        (res) => {
            if (!res.ok) {
                // make the promise be rejected if we didn't get a 2xx response
                throw new Error("Not 2xx response", {cause: res});
            } else {
                 return res.json();
            }
        }
    )
}

export default function useDeleteTask() {
    const queryClient = useQueryClient();
    const { toast } = useToast();
    const { mutate, isPending, isSuccess, isError, error } = useMutation({
        mutationFn: (taskId: number) => {
            return deleteTasks(taskId)
        }
    })

    function deleteTask(id: number) {
        mutate(id, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['todos'] });
                toast(
                    <NotificationToast 
                        type="success"
                        title="¡Eliminado con éxito!"
                        message={`la tarea con id ${id} se ha eliminado correctamente`}
                    />, {
                    clickClosable: true,
                    position: 'top-right',
                    duration: 5000
                });
              },
              onError: () => {
                toast(
                    <NotificationToast 
                        type="error"
                        title="No se ha podido eliminar"
                        message="Se ha producido un error al eliminar la tarea, inténtelo de nuevo más tarde."
                    />, {
                    clickClosable: true,
                    position: 'top-right',
                    duration: 5000
                });
              }
        })
    }
    
    return { deleteTask, isPending, isSuccess, isError, error}
}