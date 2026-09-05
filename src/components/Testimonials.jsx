import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
    {
        text: "The scarf I ordered was even more beautiful in person. You can feel the love in every stitch — absolutely worth it!",
        name: "Sarah M."
    },
    {
        text: "Handmade quality like this is so hard to find these days. My crochet bag gets compliments every single time I use it.",
        name: "Ayesha K."
    },
    {
        text: "I gifted a knitted sweater from Hearth & Hook to my mom and she hasn't stopped talking about it. Truly one of a kind.",
        name: "Emily R."
    },
]

const Testimonials = () => {
    const [current, setCurrent] = useState(0)

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
    }

    return (
        <div id="Testimonials" className="px-6 md:px-16 py-16 md:py-17">
            <p className="font-script text-(--color-cta-bg) tracking-wide text-3xl text-center md:text-left mb-5 md:ml-20 leading-tight">
                Testimonials
            </p>

            <div className="flex items-center justify-center gap-6 max-w-2xl mx-auto">
                <button
                    onClick={handlePrev}
                    className="text-(--color-cta-bg) hover:cursor-pointer"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="text-center flex-1">
                    <p className="font-sharp text-(--color-text) text-lg italic">
                        "{reviews[current].text}"
                    </p>
                    <p className="font-sharp text-(--color-cta-bg) mt-4">
                        — {reviews[current].name}
                    </p>
                </div>

                <button
                    onClick={handleNext}
                    className="text-(--color-cta-bg) hover:cursor-pointer"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}

export default Testimonials