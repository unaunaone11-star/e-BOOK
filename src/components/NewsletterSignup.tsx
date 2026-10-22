export default function NewsletterSignup() {
  return (
    <section className="py-16 bg-slate-900 text-white rounded-lg my-12 overflow-hidden">
      <img src="/src/assets/images/newsletter_banner.jpg" alt="Newsletter" className="w-full h-48 object-cover mb-6 opacity-80" />
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Inspired</h2>
        <p className="text-slate-300 mb-8">Subscribe to our newsletter for new releases, special offers, and curated reading lists.</p>
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-lg text-slate-900 focus:outline-none"
            required
          />
          <button type="submit" className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
