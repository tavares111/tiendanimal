
import useDeleteTask from "@/hooks/useDeleteTask";
import { IoTrashOutline } from "react-icons/io5";


export type TaskCardProps = {
    title: string,
    text: string,
    id: number,
    loadingData?: never
} | {
    loadingData: boolean
    title?: never,
    text?: never,
    id?: never,
}

export default function TaskCard({ title, text, id, loadingData }: TaskCardProps) {
    const { deleteTask, isPending  } = useDeleteTask();

    function handleDelete() {
        if(id) deleteTask(id);
    }

    if (!loadingData ) {
        return (
            <div className={` bg-white px-[15px] py-[18px] flex justify-between gap-[21px] items-center rounded-[4px] shadow-[0_1px_4px_1px_rgba(0,0,0,0.12)]`}>
                <div className="flex flex-col gap-1">
                    <h2 className="text-base leading-[22px] font-semibold text-black">{title}</h2>
                    <p className="text-[#777777] text-[12px] leading-[16px] font-normal">{text}</p>
                </div>
                <button disabled={isPending} onClick={handleDelete}>
                    <IoTrashOutline className="shrink-0 cursor-pointer text-[#B3B3B3] hover:text-limeade-700 active:text-lime-800" size={18}/>
                </button>
            </div>
        )
    } else {
        return (
            <div className='animate-pulse bg-white px-[15px] py-[18px] flex justify-between gap-[21px] items-center rounded-[4px] shadow-[0_1px_4px_1px_rgba(0,0,0,0.12)]'>
                <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="h-4 bg-gray-400 rounded col-span-4"></div>
                    <div className="h-4 w-full bg-gray-400 rounded col-span-2"></div>
                    <div className="h-4 w-full bg-gray-400 rounded col-span-2"></div>
                </div>
                <button disabled={isPending} onClick={handleDelete}>
                    <div className="rounded-full bg-gray-400 h-5 w-5"></div>
                </button>
            </div>
        )
    }

    
}