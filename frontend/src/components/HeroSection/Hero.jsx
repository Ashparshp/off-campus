import React from "react";
import ActionButton from "./ActionButton";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animations";
import ActionButton2 from "./ActionButton2";
import { Dialog,DialogTrigger,DialogContent } from "../ui/dialog";
import DateTimePicker from "../CallSection/DateTimePicker";

const Hero = () => {
  return (
    <div className="relative container  ">
      {/* brand Info */}
      <div className="h-[40rem] w-full 
     
      relative flex items-center justify-center">
        {/* { bg-black  bg-grid-white/[0.2]  } */}
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className=" py-14 md:my-20">
          <div className="text-center space-y-6 text-white">
            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-white uppercase font-semibold"
            >
              Missed on - campus opportunities?
              {" "}
            </motion.p>

            <motion.h2
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl relative z-20  font-style-gradient pb-2"
            >
             Off-campus is your  <br className="md:hidden" />
             next big chance.
              {/* <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Perfect Tour</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                <span>Perfect Tour  </span>
              </div>
            </div> */}
            </motion.h2>

            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
              className="lg:text-xl text-zinc-400"
            >
              Internships and Placements made easy.
            </motion.p>

            {/* Action Button */}

            <motion.div
              variants={SlideRight(0.9)}
              initial="hidden"
              animate="visible"
              className="flex flex-row items-center justify-center space-x-4"
            >
              <a href="/products">
                <ActionButton />
              </a>
              {/* <a href="/bookcall">
              <ActionButton2/>
              </a> */}

              <Dialog>
                <DialogTrigger>
                  <ActionButton2 />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-inherit border-none " closeButton = "right-7 top-7">
                  
                    
                    <DateTimePicker />
                  
                </DialogContent>
              </Dialog>
             
            </motion.div>
          </div>
        </div>
      </div>
      {/* Image */}
      <div></div>
    </div>
  );
};

export default Hero;
