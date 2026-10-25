export default function Hero() {
  return (
    <section className="relative w-full h-[40vh] min-h-[300px] md:h-[60vh] md:min-h-[500px] flex items-center justify-center overflow-hidden rounded-2xl">
      <img
        src="/images/hero_new_banner_1792510410439.jpg"
        alt="Cozy library setting"
        className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 tracking-tight" style={{ textWrap: 'balance' }}>
          How to succeed in life
        </h1>
        
      </div>
    </section>
  );
}
