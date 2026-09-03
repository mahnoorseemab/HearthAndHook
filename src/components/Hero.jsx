import background from "../assets/hero-bg.avif"
import heroImg from "../assets/img-10.avif"
import flower from "../assets/pink-branch-with-leafs.png"
import { Sparkles, Star } from "lucide-react"


const Hero = () => {
    return (
        <div id="home">
            <div className="relative h-auto md:h-[calc(100vh-13vh)] overflow-hidden">
                <img className="absolute inset-0 h-full w-full opacity-20 object-cover" src={background} alt="" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full items-center">
                    <div className="relative pt-12 md:pt-0 md:static">
                        <div className="absolute h-16 w-16 md:h-50 md:w-50 -top-5 md:-top-8 md:left-0">
                            <img className="opacity-40 rotate-45" src={flower} alt="" />
                        </div>
                        <div className="flex flex-col gap-2 px-6 md:pl-34">
                            <Sparkles className="w-8 h-8 text-(--color-cta-bg) mb-2" />
                            <span className="font-script text-3xl md:text-4xl text-(--color-cta-bg)">Where</span>
                            <span className="font-script text-5xl md:text-7xl leading-tight text-(--color-cta-bg)">every stitch</span>
                            <span className="font-script text-3xl md:text-4xl text-(--color-cta-bg)">tells a story</span>

                            <p className="font-sharp text-h1 mt-6 max-w-md text-base md:text-xl">
                                Handcrafted knitwear and crochet pieces, made one loop at a time.
                            </p>

                            <div className="flex gap-4 mt-9 pb-12 md:pb-0">
                                <button className="font-sharp bg-(--color-cta-bg) text-(--color-card-bg) hover:bg-h3/10 hover:text-(--color-cta-bg) border-2 border-(--color-cta-bg) rounded-full px-6 md:px-8 py-2.5 md:py-3 transition-colors duration-300 active:scale-95 hover:cursor-pointer">
                                    Shop Now
                                </button>
                                <button className="font-sharp text-(--color-cta-bg) border-2 border-(--color-cta-bg) hover:bg-(--color-cta-bg) hover:text-(--color-card-bg) rounded-full px-6 md:px-8 py-2.5 md:py-3 transition-colors duration-300  active:scale-95 hover:cursor-pointer">
                                    Learn More
                                </button>
                                <div className="flex flex-col pt-1">
                                <div className="flex">
                                <Star className="text-(--color-cta-bg)" />
                                <Star className="text-(--color-cta-bg)" />
                                </div>
                                <Star className="ml-3 text-(--color-cta-bg)" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-64 md:h-[calc(100vh-13vh)]">
                        <img
                            className="h-full w-full object-cover"
                            src={heroImg}
                            alt="Handmade crochet piece"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero