import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-black tracking-wide mb-1">
              Feedstock Distribution &amp; Supply Solutions LLC
            </h3>
            <p className="text-gold font-bold text-sm mb-4">
              &ldquo;From Field to Feed&rdquo;
            </p>
            <p className="text-sm leading-relaxed">
              Feedstock distribution and commodities transfer for dairy and beef
              cattle operations. Boise, Idaho.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest mb-4">
              NAVIGATION
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest mb-4">
              CONTACT
            </h3>
            <ul className="space-y-2 text-sm">
              <li>8512 West Elisa St, Boise, Idaho</li>
              <li>
                <a href="tel:+14407325083" className="text-gold hover:text-white font-bold transition-colors">
                  (440) 732-5083
                </a>
              </li>
              <li>
                <a href="mailto:kalen.mckenzie@fdss-llc.com" className="hover:text-gold transition-colors">
                  kalen.mckenzie@fdss-llc.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Feedstock Distribution &amp; Supply Solutions LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
