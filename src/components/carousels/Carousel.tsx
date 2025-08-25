import { useState } from "react";
import { CroixSvg } from "../../svgs";

interface Props {
    images: string[];
}

export default function Carousel({images}: Props) {

    const [current, setCurrent] = useState(0);
    const [fullscreen, setFullscreen] = useState<string | null>(null);

    const next = () => setCurrent((prev) => (prev + 1) % images.length);
    const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div id="default-carousel" className="relative rounded-lg overflow-x-hidden h-auto space-y-2" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="flex items-center relative h-80 md:h-96">
                {
                    images.map((src, i) => (
                        <div
                            key={i}
                            className={`absolute flex items-center justify-center inset-0 transition-opacity duration-700 py-2 ${
                            i === current ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <img 
                                src={src}
                                title="Expandir"
                                alt={`Slide ${i + 1}`} 
                                onClick={() => setFullscreen(src)}
                                className="w-auto h-full object-contain rounded-lg cursor-pointer"
                            />
                        </div>
                    ))
                }
                {/* Slider controls  */}
                <button 
                    type="button"
                    onClick={prev}
                    className="flex absolute left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition hover:cursor-pointer"
                    data-carousel-prev>
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button 
                    type="button"
                    onClick={next}
                    className="flex absolute right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition hover:cursor-pointer"
                    data-carousel-next>
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 z-30">
                {images.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition hover:cursor-pointer ${
                        current === i ? "bg-red-400" : "bg-gray-600 hover:bg-red-400"
                        }`}
                    />
                ))}
            </div>

            {/* Fullscreen Modal */}
            {fullscreen && (
                <div
                    className="fixed inset-0 bg-black flex items-center justify-center z-50"
                    onClick={() => setFullscreen(null)}
                >
                    <img
                        src={images[current]}
                        alt="Fullscreen"
                        className="max-w-full max-h-full rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()} // para no cerrar al clickear en la imagen
                    />
                    <button
                        onClick={() => setFullscreen(null)}
                        className="absolute top-5 right-5 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 cursor-pointer"
                    >
                        <CroixSvg className="text-gray-300" />
                    </button>
                </div>
            )}
            
        </div>
    )
}