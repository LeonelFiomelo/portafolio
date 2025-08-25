interface Props {
    size?: number;
    className?: string;
}

export default function MonitorSvg({size = 24, className}: Props) {
    return (
        <svg 
            width={size} 
            height={size}
            className={className}
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
            <line x1="8" x2="16" y1="21" y2="21"></line>
            <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
    )
}