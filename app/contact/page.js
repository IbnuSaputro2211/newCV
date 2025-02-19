import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
      <div className="text-center flex justify-center">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-lg flex flex-col items-center">
          <FaEnvelope className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold">Email</h3>
          <p className="mt-2">ibnusaputro123@gmail.com</p>
          
          <FaPhone className="text-4xl text-green-500 mt-6 mb-4" />
          <h3 className="text-2xl font-bold">Phone</h3>
          <p className="mt-2">+6285624854162</p>
          
          <FaMapMarkerAlt className="text-4xl text-red-500 mt-6 mb-4" />
          <h3 className="text-2xl font-bold">Location</h3>
          <p className="mt-2">Rancaekek, Indonesia</p>
        </div>
      </div>
    </section>
  );
}