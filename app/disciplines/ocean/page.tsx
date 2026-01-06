export default function OceanSciencesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-primary">Ocean Sciences</h1>

      <p>
        The ocean science community has a long history of data sharing, driven by
        interdisciplinary research and the high cost of seagoing work. Despite
        strong sharing norms, interoperability remains a challenge as new sensors
        and data types continue to emerge.
      </p>

      <p>
        International efforts such as SeaDataNet, EMODNet, IMOS, and Ocean Best
        Practices have advanced discovery and access, yet full interoperability
        remains elusive. The UN Decade of Ocean Science has further elevated the
        need for FAIR and Open data to support global sustainability goals.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mt-8">Collaborating Organizations</h2>
        <ul className="list-disc ml-6 mt-4">
          <li>IODE</li>
          <li>Ocean InfoHub (OIH)</li>
          <li>Ocean Best Practices (OBP)</li>
          <li>BODC</li>
          <li>Ocean Networks Canada</li>
          <li>British Antarctic Survey</li>
          <li>ESIP</li>
          <li>World Data System</li>
        </ul>
      </section>
    </main>
  );
}
