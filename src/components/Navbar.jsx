import { useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed z-50 top-0 left-0 right-0 bg-(--color-card-bg) shadow-lg">
            <div className="flex items-center justify-between md:justify-center h-[13vh] px-6 md:px-8 md:gap-60">

                {/* Logo */}
                <div className="flex flex-col items-center leading-none">
                    <span className="font-script text-h1 text-xl">Hearth</span>
                    <span className="font-script text-h1 text-3xl">&</span>
                    <span className="font-script text-h1 text-xl">Hook</span>
                </div>

                {/* Nav links - hidden on mobile */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" className="font-sharp text-h1 tracking-wide hover:cursor-pointer uppercase">Home</a>
                    <a href="#ourStory" className="font-sharp text-h1 tracking-wide hover:cursor-pointer uppercase">Our Story</a>
                    <a href="#Collection" className="font-sharp text-h1 tracking-wide hover:cursor-pointer uppercase">Collection</a>
                    <a href="#Testimonials" className="font-sharp text-h1 tracking-wide hover:cursor-pointer uppercase">Testimonials</a>
                    <a href="#Contact" className="font-sharp text-h1 tracking-wide hover:cursor-pointer uppercase">Contact</a>
                </div>

                {/* CTA button - hidden on mobile */}
                <a href="#Contact" className="hidden md:block font-sharp text-h1 tracking-wide bg-(--color-accent) px-6 py-2 rounded-full transition-all active:scale-95 hover:cursor-pointer hover:bg-(--color-cta-bg) hover:text-(--color-cta-text) shadow-sm">
                    Shop Now
                </a>

                {/* Hamburger icon - visible only on mobile */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="w-6 h-0.5 bg-(--color-text)"></span>
                    <span className="w-6 h-0.5 bg-(--color-text)"></span>
                    <span className="w-6 h-0.5 bg-(--color-text)"></span>
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-(--color-card-bg)">
                    <a href="#home" className="font-sharp text-h1 tracking-wide uppercase hover:cursor-pointer">Home</a>
                    <a href="#ourStory" className="font-sharp text-h1 tracking-wide uppercase hover:cursor-pointer">Our Story</a>
                    <a href="#Collection" className="font-sharp text-h1 tracking-wide uppercase hover:cursor-pointer">Collection</a>
                    <a href="#Testimonials" className="font-sharp text-h1 tracking-wide uppercase hover:cursor-pointer">Testimonials</a>
                    <a href="#Contact" className="font-sharp text-h1 tracking-wide uppercase hover:cursor-pointer">Contact</a>
                    <a href="#Contact" className="font-sharp text-h1 tracking-wide bg-(--color-accent) px-6 py-2 rounded-full transition-all active:scale-95 hover:cursor-pointer hover:bg-(--color-cta-bg) hover:text-(--color-cta-text) shadow-sm">
                        Shop Now
                    </a>
                </div>
            )}
        </div>
    )
}

export default Navbar