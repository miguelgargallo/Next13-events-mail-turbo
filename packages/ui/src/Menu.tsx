import { motion, useScroll } from "framer-motion";
import "./styles.css";

export const Menu = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden sm:block">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-row items-center justify-between rounded-xl bg-gradient-to-r from-white to-white text-black shadow-xl sm:m-8">
        <button className="rounded-xl py-2 px-4 font-bold text-black">
          <a href="/sales">In Store</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-black">
          <a href="/sales">Street Marketing</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-black">
          <a href="/sales">Ferias y Congresos</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-black">
          <a href="/sales">Eventos de Imagen</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-black">
          <a href="/sales">Otros Servicios</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-black">
          <a href="/sales">Uniformes</a>
        </button>
      </div>
    </div>
  );
};
