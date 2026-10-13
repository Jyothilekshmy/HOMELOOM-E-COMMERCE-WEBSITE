import React from 'react';
import { Button } from '../../components/ui/Button';

const defaultCarouselProducts = [
    {
        id: 'p1',
        name: 'Artisan Loom Handwoven Throw',
        image: 'public/assets/home/furniture-collections-1.webp'
    },
    {
        id: 'mc-1',
        name: 'The Comfort Oak Armchair',
        image: 'public/assets/home/furniture-collections-2.webp',
    },
    {
        id: 'p2',
        name: 'Terracotta Ceramic Floral Vase',
        image: 'public/assets/home/furniture-collections-3.webp',
    },
    {
        id: 'mc-2',
        name: 'Modern Olive Lounge Sofa',
        image: 'public/assets/home/furniture-collections-4.webp',
    },
    {
        id: 'p3',
        name: 'Belgian Washed Linen Duvet Set',
        image: 'public/assets/home/furniture-collections-5.webp',
    },
    {
        id: 'mc-3',
        name: 'Minimal Oak Low Table',
        image: 'public/assets/home/furniture-collections-6.webp',
    },
    {
        id: 'p4',
        name: 'Heritage Jute & Wool Runner',
        image: 'public/assets/home/furniture-collections-7.webp'
    },
    {
        id: 'mc-4',
        name: 'Sculptural Woven Pendant',
        image: 'public/assets/home/furniture-collections-8.webp',
    },
];

export function MovingCarousel({ items, onNavigate }) {
    const displayProducts =
        items && items.length > 0 ? items : defaultCarouselProducts;

    // Duplicate images to create a continuous loop.
    const duplicatedProducts = [...displayProducts, ...displayProducts];

    return (
        <section className="relative w-full overflow-hidden  py-10 sm:py-14 lg:py-16">

            {/* Single Heading */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
                <h2 className="text-2xl font-bold text-green-950 sm:text-3xl lg:text-5xl">
                    Furniture Collections
                </h2>
                <p className="text-[16px] text center text-b">Discover thoughtfully designed furnitures for living</p>
            </div>

            {/* Carousel Viewport */}
            <div className="relative w-full overflow-hidden">

                {/* Left Fade */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-20 lg:w-32 bg-linear-to-r from-stone-100/90 to-transparent" />

                {/* Right Fade */}
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-20 lg:w-32 bg-linear-to-l from-stone-100/90 to-transparent" />

                {/* Moving Track */}
                <div className="flex w-max animate-home-marquee hover:[animation-play-state:paused]">

                    {duplicatedProducts.map((product, index) => (
                        <div
                            key={`${product.id}-${index}`}
                            className="mr-3 w-56 shrink-0 overflow-hidden rounded-xl sm:mr-5 sm:w-64 lg:mr-6 lg:w-80"
                        >
                            <div className=" relative h-52 overflow-hidden rounded-xl bg-stone-200 sm:h-60 lg:h-90">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading={
                                        index < displayProducts.length
                                            ? 'eager'
                                            : 'lazy'
                                    }
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 flex justify-center p-4 sm:p-5">
                                    <Button
                                        size="md"
                                        variant="primary"
                                        onClick={() => onNavigate?.('shop')}
                                    >
                                        Shop Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default MovingCarousel;