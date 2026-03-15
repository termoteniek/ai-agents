import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Home / Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center py-12 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-darkText mb-4"
          >
            Deco Decoster
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-body text-lg md:text-xl text-lightText mb-6"
          >
            Professional Painting Services
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-body text-base text-lightText max-w-2xl mx-auto"
          >
            Transform your space with our expert interior and exterior painting services.
            Licensed, insured, and trusted by homeowners and businesses.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-lightCream">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-darkText text-center mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Interior Painting", desc: "Walls, ceilings, trim - freshen up your living spaces" },
              { title: "Exterior Painting", desc: "Protect and beautify your home's exterior" },
              { title: "Specialty Services", desc: "Cabinet painting, deck staining, trim work and more" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-card shadow-card p-6 hover:shadow-hover transition-shadow duration-300"
              >
                <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-lightText">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-darkText text-center mb-12"
          >
            Our Gallery
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-lightCream rounded-image shadow-card overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center text-lightText">
                  Project {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-lightCream">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-darkText text-center mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John D.", project: "Living Room Painting", text: "Excellent work! The team was professional and the results exceeded my expectations." },
              { name: "Sarah M.", project: "Exterior House Painting", text: "Beautiful job on our home exterior. The color selection was perfect and the finish is flawless." },
              { name: "Mike R.", project: "Kitchen Cabinet Refinishing", text: "Our kitchen looks brand new! Saved us thousands compared to replacing the cabinets." },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-card shadow-card p-6"
              >
                <p className="font-body text-darkText mb-4">"{testimonial.text}"</p>
                <p className="font-heading font-semibold text-navy">{testimonial.name}</p>
                <p className="font-body text-sm text-lightText">{testimonial.project}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-darkText text-center mb-4"
          >
            Get Your Free Quote
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-body text-lightText text-center mb-8"
          >
            Ready to transform your space? Contact us today for a free estimate.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white rounded-card shadow-card p-8"
          >
            <div>
              <label htmlFor="name" className="block font-body text-darkText mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-input border border-lightCream focus:outline-none focus:ring-2 focus:ring-terracotta font-body"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-body text-darkText mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-input border border-lightCream focus:outline-none focus:ring-2 focus:ring-terracotta font-body"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-body text-darkText mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-input border border-lightCream focus:outline-none focus:ring-2 focus:ring-terracotta font-body"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-body text-darkText mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-input border border-lightCream focus:outline-none focus:ring-2 focus:ring-terracotta font-body resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-terracotta text-white px-6 py-4 rounded-button font-body font-semibold shadow-button hover:shadow-hover hover:bg-opacity-90 transition-all duration-300"
            >
              Submit Request
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
