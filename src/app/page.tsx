import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero — full width, dark, heavy */}
      <section className="relative bg-navy text-white">
        {/* Diagonal grain pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
              FEEDSTOCK
              <br />
              DISTRIBUTION &amp;
              <br />
              <span className="text-gold">SUPPLY SOLUTIONS</span>
            </h1>
            <div className="w-20 h-1.5 bg-rust mb-6" />
            <p className="text-lg md:text-xl text-white/70 mb-2 max-w-xl leading-relaxed">
              Commodities transfer station for dairy and beef cattle feed.
              Cottonseed, canola, soybean husk, soybean mill, and more.
            </p>
            <p className="text-gold font-bold text-lg mb-10">
              &ldquo;From Field to Feed&rdquo;
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

      {/* Stats strip — bold numbers, no icons */}
      <section className="bg-rust text-white border-b-4 border-rust-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {[
              { value: "10+", label: "YEARS IN FEEDSTOCK" },
              { value: "80+", label: "YEARS COMBINED EXPERIENCE" },
              { value: "100%", label: "IDAHO OWNED & OPERATED" },
              { value: "24/7", label: "OPERATIONS SUPPORT" },
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

      {/* What we do — dense, no cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-2">
            WHAT WE DO
          </h2>
          <div className="w-16 h-1.5 bg-gold mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-light-gray">
            {[
              {
                title: "COMMODITIES TRANSFER",
                text: "We receive bulk feedstock from producers and brokers and coordinate efficient transfer to dairy and beef operations. High-capacity receiving, quick turnaround, no wasted time.",
              },
              {
                title: "FEEDSTOCK DISTRIBUTION",
                text: "We work directly with major commodities brokers to distribute cottonseed, canola, soybean husk, soybean mill, and other feed products across the Treasure Valley.",
              },
              {
                title: "STORAGE & HANDLING",
                text: "Proper storage protects product quality. Our facilities maintain commodity condition from receiving through loadout. Segregated storage, first-in first-out rotation.",
              },
              {
                title: "LOGISTICS COORDINATION",
                text: "Getting the right product to the right place on time takes coordination. We work with brokers, haulers, and end users to keep the supply chain predictable.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`p-8 md:p-10 ${
                  i < 2 ? "border-b border-light-gray" : ""
                } ${i % 2 === 0 ? "md:border-r border-light-gray" : ""}`}
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

      {/* Why FDSS — two column, dense */}
      <section className="py-16 md:py-20 bg-cream border-t-4 border-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-2">
                WHY FDSS
              </h2>
              <div className="w-16 h-1.5 bg-gold mb-8" />

              <p className="text-warm-gray leading-relaxed mb-5 text-[15px]">
                Too many operations deal with missed deliveries, inconsistent
                quality, and brokers who don&apos;t return calls. We started
                FDSS because the feed industry deserves better than that.
              </p>
              <p className="text-warm-gray leading-relaxed mb-5 text-[15px]">
                We&apos;re Idaho locals with deep roots in agriculture and
                logistics. When your cattle need feed, there&apos;s no room
                for excuses. We show up, we deliver, we get it done.
              </p>
              <p className="text-warm-gray leading-relaxed text-[15px]">
                Our owners bring over 80 years of combined experience in
                business and logistics, including 10+ years specifically in
                food and feedstock services. This isn&apos;t our first rodeo.
              </p>
            </div>

            <div className="bg-navy text-white p-8 md:p-10">
              <h3 className="font-black tracking-widest text-sm mb-6 text-gold">
                OUR COMMITMENT
              </h3>
              {[
                {
                  title: "DEPENDABLE",
                  desc: "On time, every time. We show up when we say we will and deliver what we promise.",
                },
                {
                  title: "PREDICTABLE",
                  desc: "No surprises on pricing or scheduling. You know what you're getting before the truck rolls.",
                },
                {
                  title: "FAIR",
                  desc: "Honest pricing, straight talk. We earn your business every single load.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`py-5 ${
                    i < 2 ? "border-b border-white/10" : ""
                  }`}
                >
                  <h4 className="font-black text-white tracking-wide text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
              "Soybean Husk",
              "Soybean Mill",
              "Distillers Grains",
              "Other Bulk Feed Commodities",
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
              Call us directly or send a message. We respond within one business day.
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
