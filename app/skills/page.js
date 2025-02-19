import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiTypescript } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-2xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500 text-2xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-2xl" /> }
];

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      <h1 className="text-4xl font-extrabold mb-6">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map(skill => (
          <div key={skill.name} className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-md font-semibold flex items-center justify-center gap-2">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
