export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-200 flex items-center justify-center">
      <main className="max-w-md w-full px-6 py-12 bg-white border border-neutral-200 rounded-lg shadow-sm">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Jonathon Marsden</h1>
          <p className="text-lg text-neutral-800 font-medium">
            Creative Technologist & Full Stack Engineer
          </p>
          <p className="text-neutral-500 text-sm mt-2 max-w-xs mx-auto">
            Building intelligent tools for productivity, data visualization, and gaming.
          </p>
        </header>

        {/* Contact Section */}
        <section>
          <p className="text-neutral-600 mb-6 text-center">
            Please use the form below to get in touch.
          </p>
          
          <form 
            action="https://formspree.io/f/ca0770826c1f4939a210931137c10572" 
            method="POST"
            className="space-y-4"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-neutral-900 text-white font-medium py-2 px-4 rounded-md hover:bg-neutral-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-neutral-100 text-center text-neutral-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Jonathon Marsden.</p>
        </footer>
      </main>
    </div>
  );
}
