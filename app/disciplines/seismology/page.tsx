export default function SeismologyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-primary">Seismology</h1>

      <p>
        Seismology has led geoscience data standardization for decades, driven by
        global instrument networks and coordinated governance through the FDSN.
        These standards predate FAIR and are not fully machine-actionable.
      </p>

      <p>
        With growing use of AI and ML, the community is actively enhancing
        vocabularies and metadata rigor. GeoFAIR amplifies these efforts by
        supporting FAIR-compliant, machine-actionable practices.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mt-8">Collaborating Organizations</h2>
        <ul className="list-disc ml-6 mt-4">
          <li>EarthScope</li>
          <li>IRIS</li>
          <li>Swiss Seismological Service</li>
          <li>ISTerre</li>
          <li>ESIP</li>
          <li>World Data System</li>
        </ul>
      </section>
    </main>
  );
}
