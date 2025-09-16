import { ReactNode } from "react";

interface AlertRootProps {
    children: ReactNode;
    color?: "default" | "danger" | "success" | "warning" | "info";
}

const alertClasses = {
    default: "border border-zinc-400 bg-white text-zinc-800",
    danger: "border border-red-500 bg-red-50 text-red-700",
    success: "border border-green-500 bg-green-50 text-green-700",
    warning: "border border-yellow-500 bg-yellow-50 text-yellow-700",
    info: "border border-blue-500 bg-blue-50 text-blue-700",
};

export function AlertRoot({ children, color = "default" }: AlertRootProps) {
    return (
        <div className={`rounded-lg p-8 flex items-center gap-6 ${alertClasses[color]}`}>
            {children}
        </div>
    );
}
