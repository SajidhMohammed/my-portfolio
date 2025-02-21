import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Docker", level: 65 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-purple-900/20 border-purple-500/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-purple-400 flex items-center text-2xl">
            Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-purple-200">{item.name}</span>
                  <span className="text-purple-400">{item.level}%</span>
                </div>
                <Progress
                  value={item.level}
                  className="h-2"
                  indicatorClassName="bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 