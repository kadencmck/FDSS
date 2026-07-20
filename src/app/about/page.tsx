import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | FDSS LLC",
  description:
    "FDSS LLC is Idaho-owned and operated. 80+ years combined experience in business and logistics. 10+ years in food and feedstock services.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            ABOUT FDSS LLC
          </h1>
          <div className="w-20 h-1.5 bg-rust mb-6" />
          <p className="text-white/60 text-lg max-w-2xl">
            Idaho owned and operated. Built on decades of hands-on experience
            in logistics, business, and feedstock services.
          </p>
        </div>
      </section>

      {/* Company overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-black text-charcoal mb-2">
                WHO WE ARE
              </h2>
              <div className="w-16 h-1.5 bg-gold mb-8" />

              <p className="text-warm-gray leading-relaxed mb-5">
                FDSS LLC is a commodities transfer station serving dairy and
                beef cattle operations in the Boise, Idaho area. We handle the
                critical middle link in the feed supply chain — receiving bulk
                feedstock from producers and brokers, storing it properly, and
                getting it where it needs to go on time.
              </p>
              <p className="text-warm-gray leading-relaxed mb-5">
                We specialize in cottonseed, canola, soybean husk, soybean mill,
                distillers grains, and other bulk feed commodities. Our operation
                is built for efficiency — quick turnaround, minimal downtime,
                and consistent quality from receiving through loadout.
              </p>
              <p className="text-warm-gray leading-relaxed mb-5">
                FDSS is owned and operated by people who grew up in Idaho, built
                careers in logistics and food services, and know this industry
                from the ground up. We&apos;re not a corporate outfit running
                things from an office somewhere else. We&apos;re here, we&apos;re
                local, and we answer the phone.
              </p>
              <p className="text-warm-gray leading-relaxed">
                We started this company because we saw an opportunity to bring a
                higher standard of service to feedstock distribution in the
                Treasure Valley. Dependable, predictable, and fair. That&apos;s
                the standard we hold ourselves to on every load.
              </p>
            </div>

            {/* Sidebar stats */}
            <div className="md:col-span-2">
              <div className="bg-navy text-white p-8">
                <h3 className="font-black tracking-widest text-sm text-gold mb-6">
                  BY THE NUMBERS
                </h3>
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-6">
                    <p className="text-4xl font-black text-gold">80+</p>
                    <p className="text-sm text-white/60 tracking-wide font-bold mt-1">
                      YEARS COMBINED EXPERIENCE IN BUSINESS &amp; LOGISTICS
                    </p>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <p className="text-4xl font-black text-gold">10+</p>
                    <p className="text-sm text-white/60 tracking-wide font-bold mt-1">
                      YEARS IN FOOD &amp; FEEDSTOCK SERVICES
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-gold">100%</p>
                    <p className="text-sm text-white/60 tracking-wide font-bold mt-1">
                      IDAHO OWNED &amp; OPERATED
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — horizontal blocks, not cards */}
      <section className="py-16 md:py-20 bg-cream border-t-4 border-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-charcoal mb-2">
            HOW WE OPERATE
          </h2>
          <div className="w-16 h-1.5 bg-gold mb-10" />

          <div className="space-y-0 border border-light-gray bg-white">
            {[
              {
                title: "DEPENDABILITY",
                text: "In this industry, a missed delivery means real consequences for livestock operations. We treat every commitment like it matters — because it does. When we say a load will be there, it will be there.",
              },
              {
                title: "HONESTY",
                text: "Straight talk and fair pricing. No games, no hidden fees, no runaround. We believe the best business relationships are built on trust, and trust starts with telling you exactly what to expect.",
              },
              {
                title: "EFFICIENCY",
                text: "Time is money in commodities. Our operations minimize turnaround time and keep your supply chain moving. We don't waste your time and we don't waste ours.",
              },
              {
                title: "LOCAL ROOTS",
                text: "We're Idaho raised. We know the land, the people, and the industry here. When you work with FDSS, you're working with your neighbors — not some outfit calling in from out of state.",
              },
            ].map((item, i, arr) => (
              <div
                key={item.title}
                className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 md:p-8 ${
                  i < arr.length - 1 ? "border-b border-light-gray" : ""
                }`}
              >
                <h3 className="text-sm font-black tracking-widest text-rust md:w-48 md:flex-shrink-0 md:pt-0.5">
                  {item.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black mb-2">
            LEADERSHIP
          </h2>
          <div className="w-16 h-1.5 bg-gold mb-10" />

          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
            <div className="flex-shrink-0">
              <Image
                src="/kalen-headshot.jpg"
                alt="Kalen McKenzie"
                width={280}
                height={280}
                className="w-56 md:w-64 h-auto border-4 border-gold"
              />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-wide mb-1">
                KALEN MCKENZIE
              </h3>
              <p className="text-gold font-bold text-sm tracking-widest mb-5">
                OWNER &amp; OPERATOR
              </p>
              <p className="text-white/60 leading-relaxed mb-4">
                Kalen brings years of hands-on experience in food services,
                feedstock operations, and business logistics to FDSS LLC.
                Idaho raised and rooted in the Treasure Valley, he founded FDSS
                to deliver a higher standard of service to the region&apos;s
                dairy and beef cattle operations.
              </p>
              <p className="text-white/60 leading-relaxed">
                His approach is simple: show up on time, deliver what you
                promise, and treat people right. That&apos;s how he runs FDSS,
                and that&apos;s what every broker, farmer, and feed buyer can
                expect when they work with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-1">
              Want to learn more?
            </h2>
            <p className="text-white/50">
              We&apos;d like to hear from you — broker, farmer, or feed buyer.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+14407325083"
              className="bg-rust hover:bg-rust-dark text-white font-bold tracking-widest text-sm px-8 py-4 text-center transition-colors"
            >
              (440) 732-5083
            </a>
            <Link
              href="/contact"
              className="border-2 border-white/30 text-white hover:border-gold hover:text-gold font-bold tracking-widest text-sm px-8 py-4 text-center transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
