

interface Props {
    fill?: boolean;
    href: string;
    download?: string;
    title: string;
    onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
    children: React.ReactNode;
}

export default function ButtonLink({fill, href, download, title, children, onClick}: Props) {

    const isFill = fill 
        ? 'bg-gradient-to-r from-rose-600 to-rose-500/80 hover:from-red-600 hover:to-red-900' 
        : 'border border-gray-700 text-gray-300 hover:border-rose-300 hover:text-rose-300 hover:'

    return (
        <a
            href={href}
            download={download}
            title={title}
            onClick={onClick}
            target="_blank"
            className={`flex items-center justify-center w-full gap-4 py-2 px-4 rounded-md transition-colors hover:cursor-pointer min-w-max ${isFill}`}>
            {children}
        </a>
    )
}

const Text = ({children, ...props}: React.HTMLAttributes<HTMLSpanElement> & {children: React.ReactNode}) => <span {...props}>{children}</span>

const Icon = ({children, ...props}: React.HTMLAttributes<HTMLSpanElement> & {children: React.ReactNode}) => <span {...props}>{children}</span>

ButtonLink.Text = Text;
ButtonLink.Icon = Icon;