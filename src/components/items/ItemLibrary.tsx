interface Props {
    name: string;
    version: string;
}

export default function ItemLibrary({name, version}: Props) {
    return (
        <li className="inline-flex w-full justify-between items-center px-2 py-1 rounded-md bg-gray-100/5">
            <span className="font-semibold">{name}</span>
            <span className="px-3 py-0.5 max-w-max text-sm border border-red-400/30 text-red-400 font-semibold rounded-full">{version}</span>
        </li>
    )
}