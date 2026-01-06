import LogoCarousel from '../components/LogoCarousel';

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <section>
        <h1 className="text-4xl font-bold text-primary mb-4">
          GeoFAIR Resource Hub
        </h1>
        <p className="max-w-3xl">
          Empowering geoscience communities to adopt FAIR data practices through
          trusted, community-vetted resources.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Pilot Disciplines</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/disciplines/ocean" className="border p-6 rounded-xl hover:border-primary">
            Ocean Sciences
          </a>
          <a href="/disciplines/hydrology" className="border p-6 rounded-xl hover:border-primary">
            Hydrology
          </a>
          <a href="/disciplines/seismology" className="border p-6 rounded-xl hover:border-primary">
            Seismology
          </a>
        </div>
      </section>

      <LogoCarousel />
    </main>
  );
}
