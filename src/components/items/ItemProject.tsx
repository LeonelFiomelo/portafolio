import type React from 'react';
import Button from '../buttons/Button';
import type { RecordType } from 'astro:schema';
import { GitSvg, DemoSvg, GitHubSvg, PadlockLockedSvg, StarSvg, WorldSvg, CubeSvg, FrontendSvg, MobileSvg, MonitorSvg } from '../../svgs';
import ButtonLink from '../buttons/ButtonLink';

type ProjectType = 'Público' | 'Privado';
type PlatformType = 'Web' | 'Mobile';

interface Props {
    id: number;
    type: ProjectType;
    github?: string;
    title: string;
    description: string;
    skills: string[];
    images: string[];
    platform: PlatformType;
    onClick: (id: number) => void;
}

export default function ItemProject({id, type, github, title, description, skills, images, platform, onClick}: Props) {

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

    const IconType = TypeIcon[type];
    const IconPlatform = PlatformIcon[platform]

    return (
        <div
            onClick={() => onClick(id)} 
            className="flex flex-col md:flex-row rounded-xl border border-neutral-600/20 bg-neutral-800/40 md:min-h-[430px] w-full max-w-6xl group hover:border-red-400/20 hover:cursor-pointer transition-all"
        >
            <div className="relative w-full md:w-1/2 rounded-l-lg bg-gray-950/10 pt-14 pb-4 md:pb-8 md:py-8">
                <div className="absolute flex flex-wrap items-center gap-2 top-4 left-4 text-sm font-semibold">
                    {id === 1 && <span className="flex items-center gap-1 bg-gradient rounded-full px-3 py-0.5">
                        <StarSvg size={16} /> Destacado
                    </span>}
                    <span className={`${PlatformStyle[platform]} flex items-center gap-1 rounded-full px-3 py-0.5`}>
                        { IconPlatform && <IconPlatform size={16} />} {platform}
                    </span>
                    <span className={`${TypeStyle[type]} flex items-center gap-1 rounded-full px-3 py-0.5`}>
                        { IconType && <IconType size={16} />} {type}
                    </span>
                </div>
                <img src={`${images[0]}`} className="w-auto h-full mx-auto" />
            </div>
            <div className="flex flex-col gap-6 p-4 md:p-6 w-full md:w-1/2">
                <div className="space-y-2">
                    <h3 className="text-2xl group-hover:text-red-400/80 transition-all">{title}</h3>
                    <p className="text-neutral-400">{description}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-semibold">Stack Tecnológico</span>
                    <ul className="flex flex-wrap gap-2 text-sm">
                        {
                            skills.map((skill, index) => <li key={index} className="px-3 py-1 rounded-full border border-red-400/40 text-red-400 font-semibold">{skill}</li>)
                        }
                    </ul>
                </div>
                <div className="flex items-end h-full">
                    <div className="flex flex-wrap md:flex-nowrap w-full md:w-auto gap-4">
                        {
                            (type === 'Público' && github) &&
                            <ButtonLink title='Ver Código' href={github} onClick={(e) => e?.stopPropagation()}>
                                <ButtonLink.Icon><GitHubSvg size={16} /></ButtonLink.Icon>
                                <ButtonLink.Text>Ver Código</ButtonLink.Text>
                            </ButtonLink>
                        }
                        <Button fill onClick={() => onClick(id)}>
                            <Button.Icon><CubeSvg size={16} /></Button.Icon>
                            <Button.Text>Ver Detalles</Button.Text>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}