const testimonials = [
  {
    id: 1,
    name: 'REYAJ ROY',
    role: 'Book Enthusiast',
    quote: 'The Digital E-Book Store has completely changed how I read. Instant access to my favorite titles is just amazing!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Iyer',
    role: 'Student',
    quote: 'I found rare academic books here that I couldn\'t find anywhere else. Highly recommend!',
    rating: 5,
  },
  {
    id: 3,
    name: 'PUJA SHARMA',
    role: 'Fiction Lover',
    quote: 'Professional design, easy purchase process, and the reader works flawlessly on my phone.',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 border-t border-slate-100">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">What Readers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="p-6 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < t.rating ? 'text-amber-400' : 'text-slate-300'}`}>★</span>
              ))}
            </div>
            <p className="text-slate-700 italic mb-4">"{t.quote}"</p>
            <p className="font-semibold text-slate-900">{t.name}</p>
            <p className="text-sm text-slate-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
