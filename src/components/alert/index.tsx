interface AlertProps {
    label: string;
}

export function Alert({ label }: AlertProps) {
    return (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <span className="font-medium">{label}</span>
        </div>
    );
}