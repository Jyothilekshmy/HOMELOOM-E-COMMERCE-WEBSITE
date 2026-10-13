import React from 'react';

export function FeaturedCategories({
  categories,
  title = 'Shop by Craft & Medium',
  subtitle = 'Curated Spaces',
  onSelectCategory,
}) {
  return (
    <section className="my-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-950 mt-1">
            {title}
          </h2>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
            {subtitle}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {categories.map((cat) => (
    <button
      key={cat.name}
      onClick={() => onSelectCategory && onSelectCategory(cat.name)}
      className="group p-5 rounded-lg bg-white border border-stone-200/60 hover:border-amber-600 hover:bg-stone-400/30 hover:shadow-lg transition-all duration-300 flex flex-row items-center gap-4 text-left cursor-pointer"
    >
      {/* Image */}
      <img
        src={cat.image}
        alt={cat.name}
        className="w-30 h-30 shrink-0 object-cover rounded-xl transform group-hover:scale-105 transition-transform"
      />

      {/* Text Content */}
      <div className="flex flex-col min-w-0">
        <span className="font-semibold text-stone-900 text-xl group-hover:text-amber-800 transition-colors">
          {cat.name}
        </span>

        <span className="text-xs text-stone-500 mt-1">
          {cat.count}
        </span>
      </div>
    </button>
  ))}
</div>
    </section>
  );
}

export default FeaturedCategories;