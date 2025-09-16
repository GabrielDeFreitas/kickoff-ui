import { ReactNode } from "react";

interface AlertRootProps {
    children: ReactNode;
    color?: "default" | "danger" | "success" | "warning" | "info";
}

const alertVariants = {
    default: "bg-zinc-100 text-zinc-800",
    danger: "bg-red-50 text-red-700",
    success: "bg-green-50 text-green-700",
    warning: "bg-yellow-50 text-yellow-700",
    info: "bg-blue-50 text-blue-700",
};

export function AlertRoot({ children, color = "default" }: AlertRootProps) {
    return (
        <div className={`rounded-lg p-4 flex items-center gap-6 ${alertVariants[color]}`}>
            {children}
        </div>
    );
}
