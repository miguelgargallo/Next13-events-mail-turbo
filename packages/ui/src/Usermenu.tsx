import { motion, useScroll } from "framer-motion";
import "./styles.css";

export const Usermenu = () => {

  return (
    <div className="hidden sm:block">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-row items-left rounded-xl bg-gradient-to-r from-black to-black text-black shadow-xl sm:m-8">
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/sales">Session</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/sales">Options</a>
        </button>
      </div>
    </div>
  );
};
