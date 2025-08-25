interface Props {
    size?: number;
    className?: string;
}

export default function MenuSvg({size = 24, className}: Props) {
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
            <path xmlns="http://www.w3.org/2000/svg" d="M4 6H20M4 12H20M4 18H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}