import bgImage from "../assets/blob1.svg"
import bgImage2 from "../assets/blob2.svg"
import Image from "../assets/img-2.avif"

const OurStory = () => {
    return (
        <div className="px-6 md:px-16 py-16 md:py-24">
            <p className="font-script text-(--color-cta-bg) uppercase tracking-widest text-2xl text-center md:text-left mb-10 ml-20 leading-tight">
                Our Story
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Image side */}
                <div className="relative h-80 md:h-[28rem]">
                    <img className="absolute inset-0 h-full w-full object-contain" src={bgImage} alt="" />
                    <img
                        className="absolute inset-0 m-auto h-56 w-56 md:h-72 md:w-72 rounded-full object-cover"
                        src={Image}
                        alt="Crochet Yarn"
                    />
                </div>

                {/* Text side */}
                <div>
                    <h2 className="font-script text-3xl md:text-4xl text-(--color-cta-bg) mb-4">
                        Every piece has a story to tell
                    </h2>
                    <p className="font-sharp text-(--color-text) leading-relaxed">
                        It started with a single skein of yarn and a quiet afternoon. What began as a simple hobby soon grew into something we couldn't put down — a way to create warmth, texture, and beauty with our own two hands. Every piece you see here is knitted or crocheted stitch by stitch, with the same care we'd put into a gift for someone we love. Nothing is mass-produced, nothing is rushed — just honest, handmade craft.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10">
                        <div className="relative h-32 w-32 md:h-50 md:w-50 shrink-0">
                            <img className="absolute inset-0 h-full w-full object-contain" src={bgImage2} alt="" />
                            <span className="absolute inset-0 flex flex-col items-center justify-center text-center text-xs md:text-lg font-sharp text-(--color-bg) px-4 leading-snug uppercase">
                                Handmade
                            </span>
                        </div>

                        <div className="relative h-32 w-32 md:h-50 md:w-50 shrink-0">
                            <img className="absolute inset-0 h-full w-full object-contain" src={bgImage2} alt="" />
                            <span className="absolute inset-0 flex flex-col items-center justify-center text-center text-xs md:text-lg font-sharp text-(--color-bg) px-4 leading-snug uppercase">
                                Unique <br />Pieces
                            </span>
                        </div>

                        <div className="relative h-32 w-32 md:h-50 md:w-50 shrink-0">
                            <img className="absolute inset-0 h-full w-full object-contain" src={bgImage2} alt="" />
                            <span className="absolute inset-0 flex flex-col items-center justify-center text-center text-xs md:text-lg font-sharp text-(--color-bg) px-4 leading-snug uppercase">
                                Made <br /> with <br /> Love
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory