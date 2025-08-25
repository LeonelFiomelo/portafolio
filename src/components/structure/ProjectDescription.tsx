import Carousel from "../carousels/Carousel";
import ItemLibrary from "../items/ItemLibrary";
import type { RecordType } from 'astro:schema';
import ButtonLink from "../buttons/ButtonLink";
import PortafolioSvg from "../../svgs/PorfolioSvg";
import type { TypeProject } from "../../types/TypeProject";
import { CheckSvg, FireSvg, ImageSvg, StarSvg, PaperSvg, MonitorSvg, BackendSvg, GitHubSvg, WorldSvg, PadlockLockedSvg, StackSvg, CroixSvg, MobileSvg } from "../../svgs"

type ProjectType = 'Público' | 'Privado';
type PlatformType = 'Web' | 'Mobile';

interface Props {
    project: TypeProject;
    onClickClose: () => void;
}

export default function ProjectDescription({project, onClickClose}: Props) {

    const {id, type, github, title, subtitle, description, characteristics, challenges, platform, skills, images, librariesFrontend, librariesBackend} = project.data;

    const TypeIcon: RecordType<ProjectType, React.ElementType> = {
        Público: WorldSvg,
        Privado: PadlockLockedSvg
    }

    const PlatformIcon: RecordType<PlatformType, React.ElementType> = {
        Web: MonitorSvg,
        Mobile: MobileSvg
    }

    const TypeStyle: RecordType<ProjectType, string> = {
        Público: 'bg-green-600',
        Privado: 'bg-gray-600'
    }

    const PlatformStyle: RecordType<PlatformType, string> = {
        Web: 'bg-purple-600',
        Mobile: 'bg-pink-600'
    }

    const Icon = TypeIcon[type];

    const IconPlatform = PlatformIcon[platform]

    return (
        <div className="fixed flex justify-center top-0 right-0 left-0 z-50 w-screen h-svh bg-gray-900/80 md:py-8">
            <div onClick={onClickClose} className="absolute w-full h-full -z-10"></div>
            <div className="flex flex-col w-full max-w-6xl h-screen md:pb-0 md:h-auto md:max-h-full bg-gray-800 md:bg-contain border border-red-900/20 overflow-hidden my-auto md:rounded-lg">

                {/* HEADER */}
                <div className="relative flex flex-col md:flex-row md:items-center gap-4 p-4 w-full">
                    <div className="md:space-y-1 w-auto md:max-w-1/2">
                        <h3>{title}</h3>
                        <span className="text-gray-400">{subtitle}</span>
                    </div>
                    <div className="grow inline-flex items-center gap-2">
                        <span className={`${PlatformStyle[platform]} flex items-center gap-1 rounded-full px-3 py-0.5`}>
                            { IconPlatform && <IconPlatform size={16} />} {platform}
                        </span>
                        <span className={`${TypeStyle[type]} flex items-center gap-1 rounded-full px-3 py-0.5`}>
                            { Icon && <Icon size={16} />} {type}
                        </span>
                    </div>
                    <button className="absolute top-2 right-2 hover:cursor-pointer" onClick={onClickClose}>
                        <CroixSvg className="text-gray-300" />
                    </button>
                </div>

                <hr className="w-full border border-red-400/10" />
                
                <div className="h-full overflow-y-auto">
                    <div className="flex flex-col gap-2 p-4">
                        <h5 className="flex items-center gap-2 font-semibold text-xl"><ImageSvg className="text-red-400" /> Galería del Proyecto</h5>
                        <Carousel images={images} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-6">
                        <div className="col-span-2 md:col-span-1 space-y-6">
                            <div className="space-y-2">
                                <h5 className="inline-flex items-center gap-2 font-semibold text-xl"><PaperSvg className="text-red-400" /> Descripción Detallada</h5>
                                <p className="text-gray-300">{description}</p>
                            </div>
                            <div className={`space-y-2 ${!characteristics && 'hidden'}`}>
                                <h5 className="inline-flex items-center gap-2 font-semibold text-xl"><PortafolioSvg className="text-red-400" /> Características Principales</h5>
                                <ul className="flex flex-col">
                                    {
                                        characteristics?.map((item, i) => 
                                            <li key={i} className="inline-flex items-center gap-2 text-gray-300">
                                                <CheckSvg size={16} className="text-red-400" /> {item}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div className={`space-y-2 ${!challenges && 'hidden'}`}>
                                <h5 className="inline-flex items-center gap-2 font-semibold text-xl"><FireSvg className="text-red-400" /> Desafíos Técnicos</h5>
                                <ul className="flex flex-col">
                                    {
                                        challenges?.map((item, i) => 
                                        <li key={i} className="inline-flex gap-2 text-gray-300">
                                            <StarSvg size={16} className="text-red-400" /> {item}
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-1 space-y-6">
                            <div className="space-y-2">
                                <h5 className="inline-flex items-center gap-2 font-semibold text-xl"><StackSvg className="text-red-400" /> Stack Tecnológico</h5>
                                <ul className="flex flex-wrap gap-2">
                                    {
                                        skills.map((skill, index) => <li key={index} className="max-w-max px-3 py-1 rounded-full border border-red-400/40 text-red-400 font-semibold">{skill}</li>)
                                    }
                                </ul>
                            </div>
                            <div className={`space-y-2 ${!librariesFrontend && 'hidden'}`}>
                                <h5 className="inline-flex items-center gap-2 font-semibold text-xl"><MonitorSvg className="text-red-400" /> Librerías Frontend</h5>
                                <ul className="flex flex-col space-y-2">
                                    {
                                        librariesFrontend?.map((item, i) => <ItemLibrary key={i} name={item.name} version={'v ' + item.version} />)
                                    }
                                </ul>
                            </div>
                            <div className={`space-y-2 ${!librariesBackend && 'hidden'}`}>
                                <h5 className="inline-flex items-center gap-2 font-semibold text-xl"><BackendSvg className="text-red-400" /> Librerías Backend</h5>
                                <ul className="flex flex-col space-y-2">
                                    {
                                        librariesBackend?.map((item, i) => <ItemLibrary key={i} name={item.name} version={'v ' + item.version} />)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full border border-red-400/10" />
                    <div className="inline-flex gap-4 p-4 mb-12 md:mb-0">
                        {
                            (type === 'Público' && github) &&
                            <ButtonLink title="Ver Repositorio" href={github} onClick={(e) => e?.stopPropagation()}>
                                <ButtonLink.Icon><GitHubSvg size={16} /></ButtonLink.Icon>
                                <ButtonLink.Text>Ver Código</ButtonLink.Text>
                            </ButtonLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}