"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              CONTACT US
            </h1>
            <div className="w-20 h-1.5 bg-rust mb-6" />
            <p className="text-white/60 text-lg max-w-2xl">
              Call us, email us, or fill out the form. We respond within one
              business day.
            </p>
          </div>
          <Image
            src="/map.png"
            alt="Treasure Valley, Idaho — FDSS service area"
            width={350}
            height={300}
            className="w-64 md:w-80 h-auto flex-shrink-0 rounded-lg border-2 border-white/20"
          />
        </div>
      </section>

      {/* Contact info strip */}
      <section className="bg-charcoal text-white border-b-4 border-rust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="py-6 sm:py-8 sm:pr-8">
              <p className="text-xs font-black tracking-widest text-gold mb-2">PHONE</p>
              <a
                href="tel:+14407325083"
                className="text-xl font-black hover:text-gold transition-colors"
              >
                (440) 732-5083
              </a>
            </div>
            <div className="py-6 sm:py-8 sm:px-8">
              <p className="text-xs font-black tracking-widest text-gold mb-2">EMAIL</p>
              <a
                href="mailto:kalen.mckenzie@fdss-llc.com"
                className="text-sm font-bold hover:text-gold transition-colors break-all"
              >
                kalen.mckenzie@fdss-llc.com
              </a>
            </div>
            <div className="py-6 sm:py-8 sm:pl-8">
              <p className="text-xs font-black tracking-widest text-gold mb-2">LOCATION</p>
              <p className="text-sm text-white/70">
                8512 West Elisa St<br />Boise, Idaho
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
            {/* Sidebar */}
            <div className="md:col-span-2">
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

            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="bg-cream border border-light-gray p-10 text-center">
                  <h3 className="text-2xl font-black text-charcoal mb-3">
                    MESSAGE SENT
                  </h3>
                  <div className="w-12 h-1.5 bg-gold mx-auto mb-4" />
                  <p className="text-warm-gray">
                    Thank you for reaching out. We&apos;ll get back to you
                    within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-black tracking-widest text-charcoal mb-2"
                      >
                        NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border-2 border-light-gray bg-white focus:border-navy focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-black tracking-widest text-charcoal mb-2"
                      >
                        COMPANY
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border-2 border-light-gray bg-white focus:border-navy focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-black tracking-widest text-charcoal mb-2"
                      >
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-light-gray bg-white focus:border-navy focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-black tracking-widest text-charcoal mb-2"
                      >
                        PHONE
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border-2 border-light-gray bg-white focus:border-navy focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="inquiry"
                      className="block text-xs font-black tracking-widest text-charcoal mb-2"
                    >
                      TYPE OF INQUIRY
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      className="w-full px-4 py-3 border-2 border-light-gray bg-white focus:border-navy focus:outline-none text-sm"
                    >
                      <option value="">Select one...</option>
                      <option value="quote">Request a Quote</option>
                      <option value="broker">Broker Partnership</option>
                      <option value="supply">Feed Supply Inquiry</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="block text-xs font-black tracking-widest text-charcoal mb-2"
                    >
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-light-gray bg-white focus:border-navy focus:outline-none text-sm resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-rust hover:bg-rust-dark text-white font-black tracking-widest text-sm px-10 py-4 transition-colors cursor-pointer"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
