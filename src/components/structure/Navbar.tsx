import { useState } from "react";
import { CroixSvg, EmailSvg, FrontendSvg, GraduationSvg, MenuSvg, RocketSvg, UserSvg } from "../../svgs";

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setOpenMenu(false);
        }
    };

    return (
        <nav className="w-full py-2 border-b border-gray-800 relative">
            <div className="container-align justify-between items-center">
                <div className="flex gap-4 items-center ml-4 md:ml-0">
                    <span className="relative p-2 bg-gradient rounded-lg">
                        <div className="absolute -top-0.5 -right-1.5 rounded-full w-2 h-2 p-1.5 bg-green-400 animate-pulse"></div>
                        <FrontendSvg />
                    </span>
                    <div>
                        <span className="bg-gradient-to-r from-red-400 via-pink-400 to-rose-400 bg-clip-text text-transparent font-bold text-lg">Leonel Fiomelo</span>
                        <p className="text-sm text-gray-300">Desarrollador Full Stack</p>
                    </div>
                </div>
                <div className="flex items-center mr-4 md:mr-0 md:hidden">
                    <button className="" onClick={() => setOpenMenu(true)}>
                        <MenuSvg size={32} className="text-gray-400" />
                    </button>
                </div>
                {/* MOBILE */}
                <div className={`fixed flex justify-end md:hidden w-screen md:w-auto h-screen top-0 right-0 bg-black/20 z-50 transition-all ${openMenu ? 'translate-x-0' : 'translate-x-full'}`} onClick={() => setOpenMenu(false)}>
                    <ul className={`flex flex-col px-2 text-2xl text-gray-400  bg-gray-900 border-l border-gray-800/40 w-2/3 h-full`} onClick={(e) => e?.stopPropagation()}>
                        <button className="flex justify-end md:hidden w-full mt-4 pb-4 pr-3" onClick={() => setOpenMenu(false)}>
                            <CroixSvg />
                        </button>
                        <li className="flex justify-end mr-4 md:mr-0 md:justify-center border-t border-gray-800 py-4">
                            <button onClick={() => handleScroll('about')} className="flex items-center justify-center gap-2 hover:text-red-300 hover:cursor-pointer transition-all">
                                <UserSvg className="md:size-[16px]" /> Sobre Mí
                            </button>
                        </li>
                        <li className="flex justify-end mr-4 md:mr-0 md:justify-center border-t border-gray-800 py-4">
                            <button onClick={() => handleScroll('skills')} className="flex items-center justify-center gap-2 hover:text-red-300 hover:cursor-pointer transition-all">
                                <FrontendSvg className="md:size-[16px]" /> Habilidades
                            </button>
                        </li>
                        <li className="flex justify-end mr-4 md:mr-0 md:justify-center border-t border-gray-800 py-4">
                            <button onClick={() => handleScroll('projects')} className="flex items-center justify-center gap-2 hover:text-red-300 hover:cursor-pointer transition-all">
                                <RocketSvg className="md:size-[16px]" /> Proyectos
                            </button>
                        </li>
                        <li className="flex justify-end mr-4 md:mr-0 md:justify-center border-t border-gray-800 py-4">
                            <button onClick={() => handleScroll('education')} className="flex items-center justify-center gap-2 hover:text-red-300 hover:cursor-pointer transition-all">
                                <GraduationSvg className="md:size-[16px]" /> Educación
                            </button>
                        </li>
                        <li className="flex justify-end mr-4 md:mr-0 md:justify-center border-t border-gray-800 py-4">
                            <button onClick={() => handleScroll('contact')} className="flex items-center justify-center gap-2 hover:text-red-300 hover:cursor-pointer transition-all">
                                <EmailSvg className="md:size-[16px]" /> Contacto
                            </button>
                        </li>
                    </ul>
                </div>
                {/* DESKTOP */}
                <div className="hidden md:flex justify-end w-auto h-auto">
                    <ul className="flex px-2 gap-8 text-base text-gray-400 md:bg-auto border-l border-gray-800/40 w-auto h-auto">
                        <button className="flex justify-end md:hidden w-full mt-4">
                            <CroixSvg />
                        </button>
                        <li className="flex justify-end mr-4 md:mr-0 md:justify-center">
                            <button onClick={() => handleScroll('about')} className="flex items-center justify-center gap-1 hover:text-red-300 hover:cursor-pointer transition-all">
                                <UserSvg size={16} /> Sobre Mí
                            </button>
                        </li>
                        <li className="flex justify-end mr-4 md:mr-0 md:justify-center">
                            <button onClick={() => handleScroll('skills')} className="flex items-center justify-center gap-1 hover:text-red-300 hover:cursor-pointer transition-all">
                                <FrontendSvg size={16} /> Habilidades
                            </button>
                        </li>
                        <li className="flex justify-end mr-4 md:mr-0 md:justify-center">
                            <button onClick={() => handleScroll('projects')} className="flex items-center justify-center gap-1 hover:text-red-300 hover:cursor-pointer transition-all">
                                <RocketSvg size={16} /> Proyectos
                            </button>
                        </li>
                        <li className="flex justify-end mr-4 md:mr-0 md:justify-center">
                            <button onClick={() => handleScroll('education')} className="flex items-center justify-center gap-1 hover:text-red-300 hover:cursor-pointer transition-all">
                                <GraduationSvg size={16} /> Educación
                            </button>
                        </li>
                        <li className="flex justify-end mr-4 md:mr-0 md:justify-center">
                            <button onClick={() => handleScroll('contact')} className="flex items-center justify-center gap-1 hover:text-red-300 hover:cursor-pointer transition-all">
                                <EmailSvg size={16} /> Contacto
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}