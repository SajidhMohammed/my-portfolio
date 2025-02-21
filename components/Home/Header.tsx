import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-[80vh] mb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#1a0b2e]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 h-full flex items-center relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/MainBanner2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          }}
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="relative z-10">
            <p className="text-purple-400 mb-4">SOFTWARE ENGINEER</p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Mohammed Sajid&apos;s Portfolio
            </h1>
            <p className="text-xl text-purple-300 mb-6">
              Junior Developer at AMEZcloud
            </p>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
            >
              View Projects
            </Button>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="/MainBanner.png"
              alt="Coding Illustration"
              width={800}
              height={600}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
} 