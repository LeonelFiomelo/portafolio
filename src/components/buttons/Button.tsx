

interface Props {
    id?: string;
    fill?: boolean;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

export default function Button({id, fill, onClick, children}: Props) {

    const isFill = fill 
        ? 'bg-gradient-to-r from-rose-600 to-rose-500/80 hover:from-red-600 hover:to-red-900' 
        : 'border border-gray-700 text-gray-300 hover:border-rose-300 hover:text-rose-300 hover:'

    return (
        <button
            id={id}
            onClick={onClick}
            className={`flex items-center justify-center w-full gap-4 py-2 px-4 rounded-md transition-colors hover:cursor-pointer min-w-max ${isFill}`}>
            {children}
        </button>
    )
}

const Text = ({children, ...props}: React.HTMLAttributes<HTMLSpanElement> & {children: React.ReactNode}) => <span {...props}>{children}</span>

const Icon = ({children, ...props}: React.HTMLAttributes<HTMLSpanElement> & {children: React.ReactNode}) => <span {...props}>{children}</span>

Button.Text = Text;
Button.Icon = Icon;