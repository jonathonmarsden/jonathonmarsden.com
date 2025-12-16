import { projects } from '@/data/projects';

export default function Home() {
  const flagship = projects.filter((p) => p.category === 'Flagship');
  const arcade = projects.filter((p) => p.category === 'Arcade');

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-200">
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Jonathon Marsden</h1>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Digital Identity & Portfolio. Building tools for productivity, gaming, and data analysis.
          </p>
        </header>

        {/* Flagship Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 border-b border-neutral-200 pb-2">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flagship.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white border border-neutral-200 rounded-lg hover:border-neutral-400 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium group-hover:underline decoration-neutral-400 underline-offset-4">
                    {project.title}
                  </h3>
                  <span className="text-neutral-400 group-hover:text-neutral-600">↗</span>
                </div>
                <p className="text-neutral-600 mb-4">{project.description}</p>
                {project.tech && (
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            ))}
          </div>
        </section>

        {/* Arcade Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 border-b border-neutral-200 pb-2">The Arcade</h2>
          <p className="text-neutral-500 mb-6">Experimental tools, RPG utilities, and prototypes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {arcade.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-neutral-100 rounded hover:bg-neutral-200 transition-colors"
              >
                <h3 className="font-medium mb-1">{project.title}</h3>
                <p className="text-sm text-neutral-500 line-clamp-2">{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200 pt-8 text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Jonathon Marsden. All rights reserved.</p>
          <div className="mt-2 flex gap-4">
            <a href="mailto:hello@jonathonmarsden.com" className="hover:text-neutral-900">Contact</a>
            <a href="https://github.com/jonathonmarsden" className="hover:text-neutral-900">GitHub</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
