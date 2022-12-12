import { motion, useScroll } from "framer-motion";
import "./styles.css";
import { generateJSXMeshGradient } from "meshgrad";
import { MenuLogo } from "./MenuLogo";
const ELEMENTS = 12;

export const Submenu = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden sm:block">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="m-4 flex flex-row items-center justify-between rounded-xl bg-gradient-to-r from-white to-white p-4 text-black shadow-xl sm:m-8">
        <button
          className="m-2 hidden rounded-full py-3 px-4 text-xs font-bold text-black shadow-md hover:shadow-xl md:block"
          style={generateJSXMeshGradient(ELEMENTS)}
        >
          <a href="/cv/eventos">Descubre Eventos</a>
        </button>
        <MenuLogo />
        <button className="rounded-xl py-2 px-4 font-bold text-black">
          <a href="/sales">Crea tu CV</a>
        </button>
      </div>
    </div>
  );
};
