import { useState } from "react";
import HeaderSection from "../headers/HeaderSection";
import { CheckSvg, CopySvg, DownloadSvg, EmailSvg, GitHubSvg, LinkedinSvg, LocationSvg, PaperSvg } from "../../svgs";

export default function Contact() {

    const [copied, setCopied] = useState(false);
    const [textCopied, setTextCopied] = useState('');

    function copyMail() {
        const user = "fiomeloleonel";
        const domain = "gmail.com";
        const mail = `${user}@${domain}`;
        setTextCopied(mail);
        navigator.clipboard.writeText(mail).then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false),
            setTextCopied('')
          }, 1200);
        });;
    }

    return (
        <section className="py-12 px-4" id="contact">
            <div className="flex flex-col w-full max-w-7xl mx-auto gap-6">
                <HeaderSection label="Conectamos" title="¿Hablamos?" subtitle="Estoy abierto a nuevas oportunidades y colaboraciones">
                    <EmailSvg />
                </HeaderSection>
                <article className="w-full">
                    <ul className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-6 md:gap-12 w-full">
                        <li className="flex flex-col items-center gap-3 container-box w-64 mx-auto">
                            <EmailSvg size={32} className="text-red-400" />
                            <h4 className="flex flex-col gap-1 text-center">Email</h4>
                            <img src="/portafolio/email.png" />
                            <button 
                                title="Copiar Email"
                                onClick={copyMail}
                                className="flex items-center justify-center min-w-[136px] gap-2 hover:cursor-pointer hover:bg-red-400/5 text-sm transition-colors py-2 px-4 border border-red-400 text-red-400 rounded-md"
                            >
                                                            {
                                !copied 
                                ?   <>
                                        <CopySvg size={16} />
                                        Copiar email
                                    </>
                                :   <>
                                        <CheckSvg size={16} />
                                        <span>Copiado</span>
                                    </>
                                }
                            </button>
                        </li>
                        <li className="flex flex-col items-center gap-3 container-box w-64 mx-auto">
                            <LinkedinSvg size={32} className="text-red-400" />
                            <h4 className="flex flex-col gap-1 text-center">Linkedin</h4>
                            <p className="text-gray-400">Conectemos profesionalmente</p>
                            <a 
                                target="_blank"
                                title="Linkedin Leonel Fiomelo"
                                href="https://linkedin.com/in/leonel-fiomelo"
                                className="flex items-center gap-2 hover:bg-red-400/5 text-sm transition-colors py-2 px-4 border border-red-400 text-red-400 rounded-md"
                            >
                                <LinkedinSvg size={16} />
                                Ver perfil
                            </a>
                        </li>
                        <li className="flex flex-col items-center gap-3 container-box w-64 mx-auto">
                            <GitHubSvg size={32} className="text-red-400" />
                            <h4 className="flex flex-col gap-1 text-center">GitHub</h4>
                            <p className="text-gray-400">Revisa mi código</p>
                            <a 
                                target="_blank"
                                title="Github Leonel Fiomelo"
                                href="https://github.com/LeonelFiomelo"
                                className="flex items-center gap-2 hover:bg-red-400/5 text-sm transition-colors py-2 px-4 border border-red-400 text-red-400 rounded-md"
                            >
                                <GitHubSvg size={16} />
                                Ver repositorios
                            </a>
                        </li>
                        <li className="flex flex-col items-center gap-3 container-box w-64 mx-auto">
                            <PaperSvg size={32} className="text-red-400" />
                            <h4 className="flex flex-col gap-1 text-center">Curriculum</h4>
                            <p className="text-gray-400">Descargar PDF</p>
                            <a 
                                href="/cv.pdf"
                                download="leonel_fiomelo_cv.pdf"
                                title="Descargar CV"
                                className="flex items-center gap-2 hover:cursor-pointer hover:bg-red-400/5 text-sm transition-colors py-2 px-4 border border-red-400 text-red-400 rounded-md"
                            >
                                <DownloadSvg size={16} />
                                Descargar CV
                            </a>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}