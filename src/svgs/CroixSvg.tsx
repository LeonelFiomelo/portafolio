interface Props {
    size?: number;
    className?: string;
}

export default function CroixSvg({size = 24, className}: Props) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
        </svg>
    )
}