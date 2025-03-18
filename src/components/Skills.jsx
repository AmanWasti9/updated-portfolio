import { motion } from "framer-motion";

const SkillSection = ({ title, skills, categoryIndex }) => (
  <motion.div
    className="border dark:border-zinc-700 rounded-lg p-6"
    key={title}
    initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
  >
    <h3 className="text-xl font-bold mb-6">{title}</h3>
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="dark:text-gray-400 text-gray-600 font-medium">
              {skill.name}
            </span>
            <span className="dark:text-gray-400 text-gray-600 font-medium">
              {skill.level}%
            </span>
          </div>
          <div className="h-1 dark:bg-gray-400 bg-gray-600 rounded-lg">
            <div
              className="h-1 bg-red-600 rounded-lg"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Stats = ({ number, label }) => (
  <div className="text-center border dark:border-zinc-700 rounded-lg p-4">
    <div className="text-red-600 text-2xl font-bold mb-1">{number}+</div>
    <div className="dark:text-gray-400 text-gray-600 text-sm font-medium">
      {label}
    </div>
  </div>
);

const Skills = () => {
  const skillSections = {
    frontend: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 75 },
      { name: "React.js", level: 85 },
      { name: "React Native", level: 75 },
    ],
    backend: [
      { name: "Java/Spring Boot", level: 70 },
      { name: "Node.js/Express", level: 55 },
      { name: "SQL/NoSQL", level: 75 },
    ],
    tools: [
      { name: "Firebase/Firestore", level: 80 },
      { name: "Git/GitHub", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Vercel", level: 90 },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-5 md:px-16">
        <h2 className="text-2xl font-bold text-center mb-2">
          Skills & Expertise
        </h2>
        <p className="dark:text-gray-400 text-gray-600 text-center mb-12">
          Leveraging cutting-edge technologies to build scalable, efficient, and
          user-friendly applications
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "3", label: "Years Experience" },
            { number: "10", label: "Projects Done" },
            { number: "4", label: "Happy Clients" },
            { number: "3000", label: "Work Hours" },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Stats number={metric.number} label={metric.label} />
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skillSections).map(([category, skills], index) => (
            <SkillSection
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              skills={skills}
              categoryIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
