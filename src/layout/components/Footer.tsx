export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Deco Decoster</h3>
            <p className="font-body text-lightText text-sm mb-4">
              Professional Painting Services
            </p>
            <p className="font-body text-lightText text-sm">
              Transform your space with our expert interior and exterior painting services.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact</h3>
            <ul className="font-body text-lightText text-sm space-y-2">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@decodecoster.com</li>
              <li>
                Address: 123 Paint Street,
                <br />
                City, State 12345
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="font-body text-lightText text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-terracotta transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-terracotta transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-terracotta transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-terracotta transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-terracotta transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Services</h3>
            <ul className="font-body text-lightText text-sm space-y-2">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Cabinet Refinishing</li>
              <li>Deck Staining</li>
              <li>Specialty Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-body text-lightText text-sm">
            &copy; {new Date().getFullYear()} Deco Decoster. All rights reserved.
          </p>
          <div className="font-body text-lightText text-sm mt-2 space-x-4">
            <a href="/privacy" className="hover:text-terracotta transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms" className="hover:text-terracotta transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
