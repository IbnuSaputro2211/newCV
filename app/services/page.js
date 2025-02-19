import { FaCode, FaMobileAlt, FaCloud, FaDatabase } from "react-icons/fa";

const services = [
  { name: "Web Development", icon: <FaCode className="text-yellow-400 text-3xl" /> },
  { name: "Mobile Apps", icon: <FaMobileAlt className="text-blue-400 text-3xl" /> },
  { name: "Cloud Services", icon: <FaCloud className="text-purple-400 text-3xl" /> },
  { name: "Database Management", icon: <FaDatabase className="text-green-400 text-3xl" /> }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      <h1 className="text-4xl font-extrabold mb-6">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {services.map(service => (
          <div key={service.name} className="bg-white text-gray-800 py-6 px-8 rounded-lg shadow-md font-semibold flex flex-col items-center">
            {service.icon}
            <span className="mt-3 text-lg">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
