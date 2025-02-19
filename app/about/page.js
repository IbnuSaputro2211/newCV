export default function About() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-10">
        <div className="max-w-2xl bg-white bg-opacity-10 p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-extrabold mb-4">About Me</h1>
          <p className="text-lg">
          Hai, saya Ibnu Risqi Saputro, seorang mahasiswa pengembang web yang bersemangat dengan keahlian di Next.js dan Tailwind CSS.
          Saya suka membangun aplikasi web yang indah dan fungsional yang memberikan pengalaman pengguna yang luar biasa.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
              Contact Me
            </button>
            <button className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition">
              See My Work
            </button>
          </div>
        </div>
      </div>
    );
  }
  