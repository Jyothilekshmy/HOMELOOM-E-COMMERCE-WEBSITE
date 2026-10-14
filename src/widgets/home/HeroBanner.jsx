import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { ProductFilter } from '../shop/ProductFilter';

export function HeroBanner({
  categories = [],
  selectedCategory = 'All',
  onSelectCategory,
  onExplore,
  filterSelectedButtonClassName = '!bg-amber-800 !text-white hover:!bg-amber-900 focus:!ring-amber-500',
  filterUnselectedButtonClassName = '!text-white hover:!bg-white/20 hover:!text-white focus:!ring-white',
}) {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-stone-900 text-white mt-0 mb-4 shadow-2xl">
      {/* Background with artistic gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Assets/home/hero-banner-4.webp"
          alt="Artisanal home interior"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/assets/home/hero-banner1.jpg';
          }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
      </div>
      <div className="relative z-10 mx-auto flex min-h-105 max-w-7xl flex-col items-start justify-start px-5 pt-24 pb-16 sm:min-h-160 sm:px-8 sm:pt-28 sm:pb-20 lg:min-h-173 lg:px-8 lg:pt-32 lg:pb-24">
        <div className="flex w-full max-w-3xl flex-col items-start gap-5 sm:gap-6">
          <div className="w-full -mt-8 bg-transparent">
            <ProductFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={onSelectCategory}
              selectedButtonClassName={filterSelectedButtonClassName}
              unselectedButtonClassName={filterUnselectedButtonClassName}
              showSort={false}
            />
          </div>
          <Badge variant="new" size="md">
            Home Decors & Furnitures
          </Badge>
          <h1 className="text-4xl leading-[1.15] font-serif tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
            Homeloom <br />
            <span className="font-serif text-white">
              Where every corner feels like home.</span>
          </h1>
          <div className="flex flex-wrap gap-3 pt-2 sm:gap-4">
            <Button
              size="lg"
              variant="Primary"
              onClick={() => onExplore && onExplore('shop')}
            >
              Explore Collections
            </Button>
            <Button
              size="lg"
              variant="accent"
              onClick={() => onExplore && onExplore('details')}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
