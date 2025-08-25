interface Props {
    size?: number;
    className?: string;
}

export default function PadlockUnlockedSvg({size = 24, className}: Props) {
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
            <path xmlns="http://www.w3.org/2000/svg" d="M8.18185 10.7027H6.00004C5.44776 10.7027 5.00005 11.1485 5.00004 11.7008C5.00001 13.3483 4.99996 16.6772 5.00006 18.9189C5.00018 21.4317 8.88614 22 12 22C15.1139 22 18.9999 21.4317 18.9999 18.9189C19 16.6773 19 13.3483 18.9999 11.7008C18.9999 11.1485 18.5522 10.7027 17.9999 10.7027H15.8181H8.18185ZM8.18185 10.7027C8.18185 10.7027 8.18189 8.13513 8.18185 6.59459C8.18181 4.74571 9.70882 3 12 3C14.2912 3 15.8181 4.74571 15.8181 6.59459" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}