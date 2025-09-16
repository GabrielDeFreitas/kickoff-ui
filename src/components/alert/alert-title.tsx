interface AlertTitleProps {
    title: string
}

export function AlertTitle({ title }: AlertTitleProps) {
    return (
        <h2 className="text-base font-semibold leading-relaxed col-start-2">
            {title}
        </h2>
    )
}