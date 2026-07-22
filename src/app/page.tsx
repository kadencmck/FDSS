import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero — full width, background image */}
      <section className="relative text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
              FDSS
            </h1>
            <p className="text-sm tracking-widest text-white/40 font-bold mb-6">
              RAIL-TO-TRUCK COMMODITIES TRANSLOADING
            </p>
            <div className="w-20 h-1.5 bg-rust mb-6" />
            <p className="text-lg md:text-xl text-white/70 mb-2 max-w-xl leading-relaxed">
              Commodities transload station for dairy and beef cattle feed.
              Cottonseed, canola, soybean hulls, soybean meal, and more.
            </p>
            <p className="text-gold font-bold text-lg mb-10">
              &ldquo;Where the rail line meets the feed bunk&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="bg-rust hover:bg-rust-dark text-white font-bold tracking-widest text-sm px-8 py-4 text-center transition-colors"
              >
                REQUEST A QUOTE
              </Link>
              <a
                href="tel:+14407325083"
                className="border-2 border-white/30 hover:border-gold hover:text-gold text-white font-bold tracking-widest text-sm px-8 py-4 text-center transition-colors"
              >
                CALL (440) 732-5083
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-rust text-white border-b-4 border-rust-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            {[
              { value: "10+", label: "YEARS IN LOGISTICS" },
              { value: "80+", label: "YEARS COMBINED EXPERIENCE" },
              { value: "100%", label: "IDAHO OWNED & OPERATED" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 md:py-8 text-center px-4">
                <p className="text-3xl md:text-4xl font-black">{stat.value}</p>
                <p className="text-[11px] md:text-xs tracking-widest mt-1 text-white/70 font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do — 3 services, no logistics */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-2">
            WHAT WE DO
          </h2>
          <div className="w-16 h-1.5 bg-gold mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-light-gray">
            {[
              {
                title: "COMMODITIES RECEIVING",
                text: "Bulk grain, byproducts, and cottonseed in from commodity brokers — coordinated and moved fast to dairy and beef operations. High-capacity receiving. No wasted time.",
              },
              {
                title: "DISTRIBUTION",
                text: "Cottonseed, canola, soybean hulls, soybean meal, and other feed commodities — moved across the Treasure Valley for the brokers we work with every day.",
              },
              {
                title: "STORAGE & HANDLING",
                text: "Segregated storage. First-in, first-out rotation. Product condition protected from receiving through loadout.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`p-8 md:p-10 ${
                  i < 2 ? "md:border-r border-light-gray" : ""
                }`}
              >
                <h3 className="text-lg font-black text-charcoal tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-block bg-navy hover:bg-charcoal text-white font-bold tracking-widest text-sm px-8 py-4 transition-colors"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Why FDSS — new client copy */}
      <section className="py-16 md:py-20 bg-cream border-t-4 border-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-2">
            WHY FDSS
          </h2>
          <div className="w-16 h-1.5 bg-gold mb-8" />

          <p className="text-warm-gray leading-relaxed mb-10 text-[15px] max-w-3xl">
            Brokers don&apos;t need another vendor — they need a transload
            partner who doesn&apos;t create problems. That&apos;s the job we
            hold ourselves to.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-light-gray bg-white">
            {[
              {
                title: "WE MOVE FAST",
                text: "High-capacity receiving and quick turnaround mean your loads don't sit, your trucks don't wait, and your deals don't stall on the logistics end.",
              },
              {
                title: "WE KEEP IT CLEAN",
                text: "Segregated storage and first-in, first-out rotation mean the product that leaves is the same quality as what came in — no surprises for your buyers.",
              },
              {
                title: "WE COMMUNICATE",
                text: "You'll know where your load stands without having to chase us for it. Predictable coordination between us, your haulers, and your end users.",
              },
              {
                title: "WE KNOW THE VALLEY",
                text: "Established relationships with dairy and beef operations across the Treasure Valley mean your commodities land where they need to, on schedule.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`p-8 md:p-10 ${
                  i < 2 ? "border-b border-light-gray" : ""
                } ${i % 2 === 0 ? "md:border-r border-light-gray" : ""}`}
              >
                <h3 className="text-sm font-black text-rust tracking-widest mb-2">
                  {item.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-warm-gray leading-relaxed mt-8 text-[15px] max-w-3xl italic">
            At the end of the day, our job is to make the transfer invisible —
            so you can focus on the deal, not the details.
          </p>
        </div>
      </section>

      {/* Products strip */}
      <section className="py-12 bg-charcoal text-white border-t-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-black tracking-widest text-sm text-gold mb-6">
            COMMODITIES WE HANDLE
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Cottonseed",
              "Canola Meal",
              "Soybean Hulls",
              "Soybean Meal",
              "Distillers Grains",
              "Bulk Grain & Byproducts",
            ].map((item) => (
              <span
                key={item}
                className="border border-white/20 text-white/70 text-sm font-bold tracking-wide px-5 py-2.5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-rust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-1">
              Ready to work with us?
            </h2>
            <p className="text-white/70">
              Call us directly or send an email. We respond within one business day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+14407325083"
              className="bg-white text-charcoal font-bold tracking-widest text-sm px-8 py-4 text-center hover:bg-cream transition-colors"
            >
              (440) 732-5083
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold tracking-widest text-sm px-8 py-4 text-center hover:bg-white hover:text-charcoal transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
