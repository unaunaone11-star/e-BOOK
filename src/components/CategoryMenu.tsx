const categories = ['All', 'Fiction', 'Tech', 'Business', 'Self-Improvement', 'Art'];

export default function CategoryMenu() {
  return (
    <section className="py-6 border-b border-slate-100">
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors whitespace-nowrap"
            onClick={() => console.log('Selected category:', category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
