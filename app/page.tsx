import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-2xl font-bold">Granitura</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Global Export Solutions with Granitura
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-8">
          We specialize in delivering high-quality products worldwide with reliability, speed, and trust. Your global trade partner.
        </p>
        <div className="flex gap-4">
          <a className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80" href="#contact">
            Get Started
          </a>
          <a className="px-6 py-3 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800" href="#services">
            Our Services
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16 bg-gray-50 dark:bg-gray-900 text-center">
        <h3 className="text-3xl font-semibold mb-4">About Granitura</h3>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
          Granitura is a modern export company committed to connecting businesses globally. We ensure seamless logistics, quality assurance, and timely delivery across international markets.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 py-16">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <h4 className="font-semibold text-xl mb-2">Global Logistics</h4>
            <p className="text-gray-600 dark:text-gray-400">Efficient worldwide shipping and supply chain management.</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <h4 className="font-semibold text-xl mb-2">Quality Assurance</h4>
            <p className="text-gray-600 dark:text-gray-400">Strict quality control to meet international standards.</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <h4 className="font-semibold text-xl mb-2">Market Expansion</h4>
            <p className="text-gray-600 dark:text-gray-400">Helping businesses grow across global markets.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-16 bg-gray-50 dark:bg-gray-900 text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Ready to expand globally? Get in touch with us today.
        </p>
        <a className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80" href="mailto:info@granitura.com">
          Email Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Granitura. All rights reserved.</p>
      </footer>
    </div>
  );
}