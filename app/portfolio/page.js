import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Portfolio() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Portfolio</h2>
      <div className="text-center flex justify-center">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-lg flex flex-col items-center">
          <FaGlobe className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold">Website Portofolio Pribadi</h3>
          <p className="mt-4 text-center">Website pribadi yang menampilkan informasi tentang diri saya, keahlian, serta proyek-proyek yang telah saya kerjakan.</p>
          <p className="mt-4 font-semibold">Teknologi: Next.js, Tailwind CSS, Node.js</p>
          <a 
            href="https://github.com/IbnuSaputro2211/biodata-saya" 
            className="text-blue-500 font-bold mt-6 flex items-center gap-2 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" /> GitHub Repository
          </a> 
        </div>
      </div>
    </section>
  );
}
