import { useState } from "react";
import { PorfolioSvg } from "../../svgs";
import type { TypeProject } from "../../types/TypeProject";
import { HeaderSection, ItemProject, ProjectDescription } from "../";

interface ProjectsProps {
  projects: TypeProject[];
}

export default function Projects({projects}: ProjectsProps) {
    
    const [projectSelected, setProjectSelected] = useState<TypeProject | null>(null);

    function onClick(id: number) {
        document.body.style.overflowY = "hidden";
        const project = projects.find(p => p.data.id === id);
        setProjectSelected(project || null);
    }

    function onClickClose() {
        document.body.style.overflowY = "auto";
        setProjectSelected(null);
    }

    return (
        <section className="py-12 px-4 w-full" id="projects">
            <div className="flex flex-col max-w-7xl mx-auto gap-6">
                <HeaderSection label="Portafolio" title="Proyectos Destacados" subtitle="Algunos de mis trabajos más representativos">
                    <PorfolioSvg />
                </HeaderSection>
                <article className="flex flex-col gap-8 items-center">
                    {
                        projects
                        .sort((a,b) => a.data.order - b.data.order)
                        .map((project) => {
                            const { slug, data } = project;
                            const { id, type, github, title, description, skills, platform, mockups } = data;

                            return <ItemProject
                                key={id}
                                id={id} 
                                type={type}
                                github={github}
                                title={title} 
                                description={description} 
                                skills={skills} 
                                images={mockups}
                                onClick={onClick}
                                platform={platform} />
                        })
                    }
                </article>
            </div>
            {
                (projectSelected )
                && <ProjectDescription project={projectSelected} onClickClose={onClickClose} />
            }
        </section>
    )
}