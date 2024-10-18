import { MdOutlineCheckCircle, MdOutlineDangerous } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
export type NotificationToastProps = {
    type: 'success' | 'error';
    title?: string,
    message?: string
}
export default function NotificationToast({ type, title, message }: NotificationToastProps) {
    return(
        <div className="p-4 flex items-stretch bg-white rounded-[4px] gap-2 shadow">
            { type === 'success' ? <MdOutlineCheckCircle className="text-limeade-500" size={24} /> : <MdOutlineDangerous className="text-red-500" size={24} /> }
            <div className="bg-white rounded-[4px] flex flex-col content-between">
                <h4 className="font-semibold">{title}</h4>
                <span className="text-[#777777] text-[12px] leading-[16px] font-normal">{message}</span>
            </div>
            <IoMdClose className="text-[#9ca3af]" size={20}/>
        </div>
    )
}