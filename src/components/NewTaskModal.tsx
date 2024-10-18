import { useForm } from "react-hook-form";
import Button from "./Button";
import Portal from "./Portal";
import { IoMdClose } from "react-icons/io";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateTask from "@/hooks/useCreateTask";
import { useEffect } from "react";

export type NewTaskModalProps = {
    show: boolean,
    onClose: () => void,
}

const NewTaskSchema = z.object({
    name: z.string().min(10, 'mínimo 10 caracteres'),
    description: z.string().min(30, 'mínimo 30 caracteres'),
});

type NewTaskSchema = z.infer<typeof NewTaskSchema>

export default function NewTaskModal({ show, onClose }: NewTaskModalProps) {
    const { addTaskmutation, isPending, isSuccess, isError } = useCreateTask();
    const { handleSubmit, register, formState: { errors }} = useForm<NewTaskSchema>({
        resolver: zodResolver(NewTaskSchema),
        mode: 'onSubmit'
    });

    useEffect(() => {
        if(show) {
            document.body.style.height = '100%';
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.left = '0'
            document.body.style.right = '0'
        } else {
            document.body.style.height = 'auto';
            document.body.style.overflow = 'auto'
            document.body.style.position = '';
            document.body.style.left = ''
            document.body.style.right = ''
        }
    },[show]);

    useEffect(() => {
        if( isSuccess || isError) {
            onClose();
        }
    },[isSuccess, isError]);

    function handleCreateNewTask(data: NewTaskSchema) {
        addTaskmutation(data.name)
    }

    return(
        <Portal selector="modalPortal" show={show} >
            <div onClick={onClose} className="absolute top-0 right-0 left-0 bottom-0 z-10 w-full h-full grid place-items-center bg-black/30">
                <div onClick={(e) => e.stopPropagation()} className="&['.jhdak'] :bg-red w-1/2 min-w-[340px] bg-white rounded-[4px] flex flex-col justify-between content-between z-20 p-[18px]">
                    <div className="flex flex-shrink-0 justify-between items-center text-[#333333]">
                        <h3 className="font-bold text-xl">Añadir tarea</h3>
                        <IoMdClose className="cursor-pointer" onClick={onClose} size={24} />
                    </div>
                    <div className="flex-1 mt-[38px]">
                        <form id="newTaskForm" onSubmit={handleSubmit(handleCreateNewTask)} className="flex flex-col gap-6" >
                            <div>
                                <label className="font-normal text-[#555555] text-sm">Nombre</label>
                                <input 
                                    placeholder="Nombre"
                                    className="border border-[#C9C9C9] w-full rounded-[3px] px-[18px] py-[9px] outline-none"
                                    {...register('name')}
                                    aria-invalid={errors.name ? "true" : "false"}
                                    />
                                    {
                                        (typeof errors?.name?.message != 'undefined' && errors?.name?.message.length > 0)
                                        && <small className="text-red-400">{errors.name.message}</small>
                                    }
                            </div>
                            <div>
                                <label className="font-normal text-[#555555] text-sm">Descripción</label>
                                <textarea 
                                    placeholder="Descripción"
                                    className="border border-[#C9C9C9] w-full rounded-[3px] px-[18px] py-[9px] outline-none resize-none min-h-[156px]"
                                    {...register('description')}
                                />
                                {
                                    (typeof errors?.description?.message != 'undefined' && errors?.description?.message.length > 0)
                                    && <small className="text-red-400">{errors.description.message}</small>
                                }
                            </div>
                            <div className="flex-shrink-0 flex gap-[21px]">
                                <Button onClick={onClose} title="Cancelar" variant="ghost"/>
                                <Button disabled={isPending} type="submit" form="newTaskForm" title={isPending ? 'Cargando' : 'Guardar'} />
                            </div>
                        </form>
                    </div>
             
                </div>
            </div>
        </Portal>
    )
}