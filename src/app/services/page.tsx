import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | FDSS LLC",
  description:
    "Commodities receiving, distribution, storage, and handling for dairy and beef cattle feed. Cottonseed, canola, soybean hulls, soybean meal, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            OUR SERVICES
          </h1>
          <div className="w-20 h-1.5 bg-rust mb-6" />
          <p className="text-white/60 text-lg max-w-2xl">
            From receiving to storage to loadout — we handle the critical
            middle link in the feed commodity supply chain.
          </p>
        </div>
      </section>

      {/* Services — alternating full-width blocks */}
      <section className="bg-white">
        {[
          {
            num: "01",
            title: "COMMODITIES RECEIVING",
            description:
              "Bulk grain, byproducts, and cottonseed in from commodity brokers — coordinated and moved fast to dairy and beef operations. High-capacity receiving. No wasted time.",
            details:
              "Our facility is set up for high-volume throughput with minimal turnaround time. Trucks get in, get loaded, and get back on the road. We coordinate scheduling between brokers and haulers to keep things moving and eliminate bottlenecks.",
            capabilities: [
              "High-capacity receiving and loadout",
              "Quick turnaround — we don't keep trucks waiting",
              "Coordinated scheduling with brokers and haulers",
              "Quality verification at receiving",
            ],
          },
          {
            num: "02",
            title: "DISTRIBUTION",
            description:
              "Cottonseed, canola, soybean hulls, soybean meal, and other feed commodities — moved across the Treasure Valley for the brokers we work with every day.",
            details:
              "Our distribution network covers the Treasure Valley and surrounding agricultural regions. We maintain relationships with brokers and producers to ensure steady product availability, even during peak demand periods.",
            capabilities: [
              "Direct broker partnerships",
              "Consistent supply management",
              "Regional distribution coverage",
              "Flexible delivery scheduling",
            ],
          },
          {
            num: "03",
            title: "STORAGE & HANDLING",
            description:
              "Segregated storage. First-in, first-out rotation. Product condition protected from receiving through loadout.",
            details:
              "We maintain segregated storage for different commodity types, operate on a first-in first-out rotation to ensure freshness, and monitor conditions to protect product integrity. When it leaves our facility, it's in the same condition it arrived.",
            capabilities: [
              "Weather-protected storage facilities",
              "Commodity segregation by type",
              "Inventory management and tracking",
              "First-in, first-out rotation",
            ],
          },
        ].map((service, i) => (
          <div
            key={service.num}
            className={`border-b border-light-gray ${
              i % 2 === 1 ? "bg-cream" : "bg-white"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-black text-light-gray">
                      {service.num}
                    </span>
                    <div className="w-10 h-0.5 bg-rust" />
                    <h2 className="text-xl md:text-2xl font-black text-charcoal tracking-wide">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-warm-gray leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-warm-gray leading-relaxed">
                    {service.details}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <div className="bg-navy text-white p-6 md:p-8">
                    <h3 className="font-black tracking-widest text-xs text-gold mb-5">
                      KEY CAPABILITIES
                    </h3>
                    <ul className="space-y-3">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-3 text-sm text-white/70"
                        >
                          <span className="w-1.5 h-1.5 bg-gold mt-1.5 flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Products */}
      <section className="py-14 md:py-16 bg-charcoal text-white border-t-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black mb-2">
            FEED COMMODITIES WE HANDLE
          </h2>
          <div className="w-16 h-1.5 bg-rust mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
            {[
              {
                name: "COTTONSEED",
                desc: "Whole and processed cottonseed — a high-energy, high-protein feed ingredient widely used in dairy rations.",
              },
              {
                name: "CANOLA MEAL",
                desc: "Quality protein supplement for dairy and beef cattle with consistent amino acid profiles.",
              },
              {
                name: "SOYBEAN HULLS",
                desc: "Excellent source of digestible fiber for ruminants, supporting healthy rumen function.",
              },
              {
                name: "SOYBEAN MEAL",
                desc: "High-protein soybean meal for balanced dairy and beef cattle nutrition programs.",
              },
              {
                name: "DISTILLERS GRAINS",
                desc: "Cost-effective energy and protein source supporting milk production and weight gain.",
              },
              {
                name: "ADDITIONAL COMMODITIES",
                desc: "We handle other bulk feed commodities based on market availability. Contact us for specifics.",
              },
            ].map((product, i) => (
              <div
                key={product.name}
                className={`p-6 md:p-8 border-b border-r border-white/10 ${
                  i >= 3 ? "lg:border-b-0" : ""
                }`}
              >
                <h3 className="text-sm font-black tracking-widest text-gold mb-2">
                  {product.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-rust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-1">
              Need a reliable transfer station?
            </h2>
            <p className="text-white/70">
              Let&apos;s talk about how FDSS can support your operation.
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
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
