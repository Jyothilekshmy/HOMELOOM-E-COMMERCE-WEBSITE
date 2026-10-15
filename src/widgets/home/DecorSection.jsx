const decorItems = [
  {
    id: 1,
    image: "/Assets/home/decor-section-1.webp",
    category: "HOME DECOR",
    name: "Ceramics Vases",
    price: "From ₹789",
  },
  {
    id: 2,
    image: "/Assets/home/decor-section-2.webp",
    category: "DECORS",
    name: "Decor Mirror",
    price: "From ₹1,499",
  },
  {
    id: 3,
    image: "/Assets/home/decor-section-3.webp",
    category: "WALL ARTS",
    name: "Wall Arts",
    price: "From ₹999",
  },
   {
    id: 4,
    image: "/Assets/home/decor-section-4.webp",
    category: "HOME DECOR",
    name: "Ceramic Planter",
    price: "From ₹899",
  },
];
export function DecorSection({ onNavigate }) {
  return (
    <>
    <div className="flex h-full min-w-0 items-center overflow-hidden">
      {/* Scrolling Track */}
      <div className="flex w-max animate-decor-marquee">
        {/* Original Products */}
        <div className="flex shrink-0">
          {decorItems.map((item) => (
            <div
              key={item.id}
              className="flex w-[85vw] shrink-0 items-center gap-5 px-5 sm:w-125 sm:gap-7 sm:px-7"
            >
              {/* Product Information */}
              <div className="min-w-0 flex-1">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-stone-500 sm:text-xs">
                  {item.category}
                </p>
                <h2 className="mb-3 text-xl font-medium leading-tight text-stone-900 sm:text-3xl">
                  {item.name}
                </h2>
                <p className="mb-3 text-xl font-medium leading-tight text-stone-900 sm:text-3xl">
                  {item.price}
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate?.('shop')}
                  className="mt-5 border-b border-stone-800 pb-1 text-xs text-stone-800 transition-colors hover:text-amber-800 sm:text-sm"
                >
                  Explore Collection →
                </button>
              </div>
              {/* Product Image */}
              <div className="h-62.5 w-[45%] shrink-0 overflow-hidden sm:h-82.5">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate Products for Continuous Scrolling */}
        <div className="flex shrink-0" aria-hidden="true">
          {decorItems.map((item) => (
            <div
              key={item.id}
              className="flex w-[85vw] shrink-0 items-center gap-5 px-5 sm:w-125 sm:gap-7 sm:px-7"
            >
              <div className="min-w-0 flex-1">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-stone-500 sm:text-xs">
                  {item.category}
                </p>

                <h2 className="mb-3 text-xl font-medium leading-tight text-stone-900 sm:text-3xl">
                  {item.name}
                </h2>
                <p className="mb-3 text-xl font-medium leading-tight text-stone-900 sm:text-3xl">
                  {item.price}
                </p>
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => onNavigate?.('shop')}
                  className="mt-5 border-b border-stone-800 pb-1 text-xs text-stone-800 sm:text-sm"
                >
                  Explore Collection →
                </button>
              </div>
               <div className="h-62.5 w-[45%] shrink-0 overflow-hidden sm:h-82.5">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
export default DecorSection;