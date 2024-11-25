import React from "react";
import { motion } from "framer-motion";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import DateTimePicker from "../CallSection/DateTimePicker";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex items-center justify-center">
      {/* Particle Animation (Optional) */}
      <div className="absolute inset-0 pointer-events-none bg-particles opacity-50"></div>

      <div className="text-center space-y-6 px-6 md:mt-0 -mt-20">
        {/* Hero Text */}
        <motion.h1
          className="text-5xl sm:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Off-Campus
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Unlock your potential with off-campus opportunities. Internships and placements made simple, accessible, and effective.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <a
            href="/explore"
            className="px-6 py-3 text-lg font-medium bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg hover:scale-105 transition-transform"
          >
            Explore Opportunities
          </a>

          <Dialog>
            <DialogTrigger>
              <button className="px-6 py-3 text-lg font-medium border border-gray-700 rounded-lg hover:bg-gray-800 transition">
                Schedule a Call
              </button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 p-6 rounded-lg">
              <DateTimePicker />
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;