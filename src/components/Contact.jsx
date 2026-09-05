import { Mail, MapPin, Sparkles } from "lucide-react"

const Contact = () => {
    return (
        <div id="Contact" className="px-6 md:px-16 py-16 md:py-24">
            <div className="flex justify-between">
                <p className="font-script text-(--color-cta-bg) tracking-wide text-3xl text-center md:text-left mb-5 ml-20 leading-tight">
                    Contact
                </p>
                <div className="flex flex-col pt-1">
                    <div className="flex">
                        <Sparkles className="text-(--color-cta-bg)" />
                        <Sparkles className="text-(--color-cta-bg)" />
                    </div>
                    <Sparkles className="ml-3 text-(--color-cta-bg)" />
                </div>
            </div>

            <h2 className="font-sharp uppercase text-xl md:text-2xl text-(--color-cta-bg) text-center mb-12">
                Let's get in touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                {/* Contact Form */}
                <form
                    action="https://formspree.io/f/xzebvqjg"
                    method="POST"
                    className="flex flex-col gap-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="font-sharp border-2 border-(--color-cta-bg)/30 focus:border-(--color-cta-bg) outline-none rounded-xl px-4 py-3 bg-transparent"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="font-sharp border-2 border-(--color-cta-bg)/30 focus:border-(--color-cta-bg) outline-none rounded-xl px-4 py-3 bg-transparent"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="font-sharp border-2 border-(--color-cta-bg)/30 focus:border-(--color-cta-bg) outline-none rounded-xl px-4 py-3 bg-transparent resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="font-sharp bg-(--color-cta-bg) text-(--color-card-bg) hover:bg-(--color-bg) hover:text-(--color-cta-bg) border-2 border-(--color-cta-bg) rounded-full px-8 py-3 transition-colors duration-300 self-start"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className="flex flex-col gap-6 justify-center">
                    <div className="flex items-center gap-4">
                        <div className="bg-(--color-cta-bg)/10 p-3 rounded-full">
                            <Mail className="w-5 h-5 text-(--color-cta-bg)" />
                        </div>
                        <div>
                            <p className="font-sharp text-(--color-text) text-sm">Email</p>
                            <p className="font-sharp text-(--color-cta-bg)">mahnoorseemab81@gmail.com</p>
                        </div>
                    </div>


                    <div className="flex items-center gap-4">
                        <div className="bg-(--color-cta-bg)/10 p-3 rounded-full">
                            <MapPin className="w-5 h-5 text-(--color-cta-bg)" />
                        </div>
                        <div>
                            <p className="font-sharp text-(--color-text) text-sm">Location</p>
                            <p className="font-sharp text-(--color-cta-bg)">Rawalpindi, Pakistan</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact