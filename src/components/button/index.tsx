import { ButtonHTMLAttributes, ElementType } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    icon?: ElementType;
    variant?: "primary" | "secondary" | "danger" | "success";
}

const buttonVariants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800 focus:ring-stone-950/10",
    secondary: "bg-stone-200 text-stone-900 focus:ring-stone-950/10",
    danger: "bg-red-600 text-white hover:bg-red-800 focus:ring-red-950/10",
    success: "bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-green-950/10",
};

export function Button({ icon: Icon, label, variant = 'primary', ...rest }: ButtonProps) {
    return (
        <button  {...rest} className={`cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonVariants[variant]} ${rest.className}`}>
            {Icon && <Icon className="w-5 h-5 text-zinc-50 mr-1" />}
            {label}
        </button>
    );
}