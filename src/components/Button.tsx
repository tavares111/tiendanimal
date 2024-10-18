type ButtonProps = Omit<React.ComponentProps<'button'>, 'className'> & {
    variant?: 'primary' | 'ghost';
};

export default function Button({title, variant, ...props}: ButtonProps) {
    if (variant === 'ghost') {
        return (
            <button className="w-full text-base font-bold text-[#555555] hover:text-limeade-700 active:text-limeade-800 p-3 cursor-pointer rounded-[5px]" {...props}>{title}</button>
        )
    } else {
        return (
            <button className="w-full text-base font-bold text-white p-3 bg-limeade-700 hover:bg-limeade-800 active:bg-limeade-900 cursor-pointer rounded-[5px]" {...props}>{title}</button>
        )
    }

}