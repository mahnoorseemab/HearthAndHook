import product1 from "../assets/img-15.avif"
import product2 from "../assets/img-14.avif"
import product3 from "../assets/img-13.avif"
import product4 from "../assets/img-12.avif"
import product5 from "../assets/img-16.avif"
import product6 from "../assets/img-6.avif"

const Collection = () => {
    return (
        <div id="Collection" className="px-6 md:px-16 py-16 md:py-17">
            <p className="font-script text-(--color-cta-bg) tracking-wide text-3xl text-center md:text-left mb-5 md:ml-20 leading-tight">
                Collection
            </p>
            <h2 className="font-sharp uppercase text-xl md:text-2xl text-(--color-cta-bg) text-center mb-12">
                Handmade with Love
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="flex flex-col items-center text-center">
                    <img className="w-full h-64 object-cover rounded-xl" src={product1} alt="Blue granny square" />
                    <h3 className="font-sharp text-(--color-text) mt-4">Blue granny square</h3>
                    <p className="font-sharp text-(--color-cta-bg) mt-1">$30</p>
                    <button className="font-sharp text-sm border-2 border-(--color-cta-bg) text-(--color-cta-bg) hover:bg-(--color-cta-bg) hover:text-(--color-card-bg) rounded-full px-6 py-2 mt-3 transition-colors duration-300 active:scale-95 hover:cursor-pointer">
                        View Product
                    </button>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img className="w-full h-64 object-cover rounded-xl" src={product2} alt="Crochet Flowers" />
                    <h3 className="font-sharp text-(--color-text) mt-4">Crochet Flowers</h3>
                    <p className="font-sharp text-(--color-cta-bg) mt-1">$20</p>
                    <button className="font-sharp text-sm border-2 border-(--color-cta-bg) text-(--color-cta-bg) hover:bg-(--color-cta-bg) hover:text-(--color-card-bg) rounded-full px-6 py-2 mt-3 transition-colors duration-300 active:scale-95 hover:cursor-pointer">
                        View Product
                    </button>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img className="w-full h-64 object-cover rounded-xl" src={product3} alt="Colorful striped items" />
                    <h3 className="font-sharp text-(--color-text) mt-4">Colorful striped items</h3>
                    <p className="font-sharp text-(--color-cta-bg) mt-1">$25</p>
                    <button className="font-sharp text-sm border-2 border-(--color-cta-bg) text-(--color-cta-bg) hover:bg-(--color-cta-bg) hover:text-(--color-card-bg) rounded-full px-6 py-2 mt-3 transition-colors duration-300 active:scale-95 hover:cursor-pointer">
                        View Product
                    </button>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img className="w-full h-64 object-cover rounded-xl" src={product4} alt="Orange/white striped cap" />
                    <h3 className="font-sharp text-(--color-text) mt-4">Orange/white striped cap</h3>
                    <p className="font-sharp text-(--color-cta-bg) mt-1">$35</p>
                    <button className="font-sharp text-sm border-2 border-(--color-cta-bg) text-(--color-cta-bg) hover:bg-(--color-cta-bg) hover:text-(--color-card-bg) rounded-full px-6 py-2 mt-3 transition-colors duration-300 active:scale-95 hover:cursor-pointer">
                        View Product
                    </button>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img className="w-full h-64 object-cover rounded-xl" src={product5} alt="Colorful embroidered bag" />
                    <h3 className="font-sharp text-(--color-text) mt-4">Colorful embroidered bag</h3>
                    <p className="font-sharp text-(--color-cta-bg) mt-1">$55</p>
                    <button className="font-sharp text-sm border-2 border-(--color-cta-bg) text-(--color-cta-bg) hover:bg-(--color-cta-bg) hover:text-(--color-card-bg) rounded-full px-6 py-2 mt-3 transition-colors duration-300 active:scale-95 hover:cursor-pointer">
                        View Product
                    </button>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img className="w-full h-64 object-cover rounded-xl" src={product6} alt="Pink knit sweater" />
                    <h3 className="font-sharp text-(--color-text) mt-4">Pink knit sweater</h3>
                    <p className="font-sharp text-(--color-cta-bg) mt-1">$50</p>
                    <button className="font-sharp text-sm border-2 border-(--color-cta-bg) text-(--color-cta-bg) hover:bg-(--color-cta-bg) hover:text-(--color-card-bg) rounded-full px-6 py-2 mt-3 transition-colors duration-300 active:scale-95 hover:cursor-pointer">
                        View Product
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Collection