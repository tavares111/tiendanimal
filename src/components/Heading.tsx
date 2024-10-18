export type HeadingProps = {
    title: string
}

export default function Heading({
    title
}: HeadingProps) {
    return <h1 className="text-xl font-bold text-[#555555]">{title}</h1>
}