import { ElementType } from "react"

interface AlertIconProps {
    icon: ElementType
}

export function AlertIcon({ icon: Icon }: AlertIconProps) {
    return (
        <Icon className="w-6 h-6" />
    )
}