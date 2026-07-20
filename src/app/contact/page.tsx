import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | FDSS LLC",
  description:
    "Get in touch with FDSS LLC — Feedstock Distribution & Supply Solutions. Boise, Idaho. (440) 732-5083.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            CONTACT US
          </h1>
          <div className="w-20 h-1.5 bg-rust mb-6" />
          <p className="text-white/60 text-lg max-w-2xl">
            Give us a call or send an email. We respond within one business day.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left — info */}
            <div>
              <h2 className="text-2xl font-black text-charcoal mb-2">
                GET IN TOUCH
              </h2>
              <div className="w-12 h-1.5 bg-gold mb-6" />

              <p className="text-warm-gray leading-relaxed mb-6">
                Whether you&apos;re a commodities broker looking for a reliable
                transfer station, a farmer needing dependable feed supply, or
                just want to know more about what we do — we want to hear
                from you.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-rust mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-black text-charcoal text-sm tracking-wide">CALL US</h3>
                    <a href="tel:+14407325083" className="text-rust font-bold hover:text-rust-dark transition-colors">
                      (440) 732-5083
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-rust mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-black text-charcoal text-sm tracking-wide">EMAIL US</h3>
                    <a href="mailto:kalen.mckenzie@fdss-llc.com" className="text-rust font-bold hover:text-rust-dark transition-colors">
                      kalen.mckenzie@fdss-llc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-rust mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-black text-charcoal text-sm tracking-wide">VISIT US</h3>
                    <p className="text-warm-gray">8512 West Elisa St, Boise, Idaho</p>
                  </div>
                </div>
              </div>

              <div className="bg-cream border border-light-gray p-6">
                <h3 className="font-black tracking-widest text-xs text-charcoal mb-4">
                  BUSINESS HOURS
                </h3>
                <table className="w-full text-sm text-warm-gray">
                  <tbody>
                    <tr className="border-b border-light-gray">
                      <td className="py-2 font-bold text-charcoal">Mon &ndash; Fri</td>
                      <td className="py-2 text-right">7:00 AM &ndash; 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-light-gray">
                      <td className="py-2 font-bold text-charcoal">Saturday</td>
                      <td className="py-2 text-right">By Appointment</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-charcoal">Sunday</td>
                      <td className="py-2 text-right">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right — Google Maps */}
            <div>
              <h2 className="text-2xl font-black text-charcoal mb-2">
                OUR LOCATION
              </h2>
              <div className="w-12 h-1.5 bg-gold mb-6" />
              <div className="border-2 border-light-gray">
                <iframe
                  src="https://maps.google.com/maps?q=8512+West+Elisa+St%2C+Boise%2C+Idaho&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FDSS LLC Location — Boise, Idaho"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
