import { useMutation } from "@tanstack/react-query"
import { Task } from "./useTask";
import useToast from "./useToast";
import NotificationToast from "@/components/NotificationToast";

async function addTask(title: string): Promise<Task> {
    await new Promise(res => setTimeout(res, 1500))
    return fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title,
            id: Date.now()
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
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

export default function useCreateTask() {
    const { mutate, isPending, isSuccess, isError  } = useMutation({
        mutationFn: (title: string) => {
            return addTask(title)
        },
        onSuccess: () => {
            toast(
                <NotificationToast
                    type="success"
                    title="¡Salvado con éxito!"
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
    });
    const { toast } = useToast();

    return { addTaskmutation: mutate, isPending, isSuccess, isError  }
}