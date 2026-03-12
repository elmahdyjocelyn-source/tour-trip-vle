import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">

      <section className="bg-teal-700 text-white py-16 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Tour Trip VLE Logo"
            width={180}
            height={180}
          />
        </div>

        <h1 className="text-5xl font-bold">Tour Trip VLE</h1>
        <p className="mt-4 text-lg">
          Van Transport & Tour Packages in Cebu and Bohol
        </p>
      </section>

      <section className="py-14 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
          Tour Trip VLE provides van transport and tour packages across Cebu and Bohol.
          We offer island hopping, whale shark watching, waterfalls, and historical tours.
        </p>
      </section>

      <section className="bg-teal-50 py-14 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Tour Packages</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">Cebu City Tour</h3>
            <ul>
              <li>Sirao Garden</li>
              <li>Temple of Leah</li>
              <li>Taoist Temple</li>
              <li>Magellan's Cross</li>
              <li>Basilica Sto. Niño</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">Moalboal / Badian</h3>
            <ul>
              <li>Island Hopping</li>
              <li>Sardines Run</li>
              <li>Swim with Turtle</li>
              <li>Kawasan Canyoneering</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">Oslob Tour</h3>
            <ul>
              <li>Whale Shark Watching</li>
              <li>Sumilon Island</li>
              <li>Tumalog Falls</li>
              <li>Carcar Pasalubong</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="py-14 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <p>📞 09773211243</p>
        <p>📞 09352756766</p>
        <p>📧 tourtripvle@gmail.com</p>

        <a
          href="https://web.facebook.com/profile.php?id=100086900440664"
          target="_blank"
        >
          Message us on Facebook
        </a>
      </section>

    </main>
  );
}