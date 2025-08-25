interface Props {
    label: string;
    title: string;
    subtitle?: string;
    children?: React.ReactNode
}

export default function HeaderSection({label, title, subtitle, children}: Props) {
    return (
        <article className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-3 text-red-400">
                {children}
                <div className="px-4 py-0.5 rounded-full border border-red-900/80 font-semibold text-sm">{label}</div>
            </div>
            <h2 className="flex flex-col gap-1 mx-auto text-center">{title}</h2>
            <div className="w-22 h-1 rounded-full mx-auto bg-gradient"></div>
            <p className="text-xl text-gray-400">{subtitle}</p>
        </article>
    )
}

const Icon = ({children, ...props}: React.HTMLAttributes<HTMLSpanElement> & {children: React.ReactNode}) => <span {...props}>{children}</span>

HeaderSection.Icon = Icon;