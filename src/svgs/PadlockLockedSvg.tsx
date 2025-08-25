interface Props {
    size?: number;
    className?: string;
}

export default function PadlockLockedSvg({size = 24, className}: Props) {
    return (
        <svg 
            width={size} 
            height={size}
            className={className}
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path xmlns="http://www.w3.org/2000/svg" d="M8.1819 10.7027H6.00008C5.44781 10.7027 5.0001 11.1485 5.00009 11.7008C5.00005 13.3483 5 16.6772 5.00011 18.9189C5.00023 21.4317 8.88618 22 12 22C15.1139 22 19 21.4317 19 18.9189C19 16.6773 19 13.3483 19 11.7008C19 11.1485 18.5523 10.7027 18 10.7027H15.8182M8.1819 10.7027C8.1819 10.7027 8.18193 8.13514 8.1819 6.59459C8.18186 4.74571 9.70887 3 12 3C14.2912 3 15.8182 4.74571 15.8182 6.59459C15.8182 8.13514 15.8182 10.7027 15.8182 10.7027M8.1819 10.7027H15.8182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>        </svg>
    )
}