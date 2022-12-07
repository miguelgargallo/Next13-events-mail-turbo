/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitleBCNHostess } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";
import { generateJSXMeshGradient } from "meshgrad";
const ELEMENTS = 12;

export default function Home() {
  console.log("✅ Index page by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>Pylar AI by Pencil</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <main>
        <div className="flex flex-col items-center justify-center">
          <TitleBCNHostess />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="flex flex-col items-center justify-center py-8">
              <p className="text-center text-2xl font-bold text-white">
                Consigue Trabajo hoy mismo
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center py-8">
          <h2 className="text-center text-xl font-bold text-white">
            Evento en la tierra
          </h2>
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.0/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLpA_RealESRGAN_x4plus.jpeg"
            alt="Earth by Stable Diffusion 1.4 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
                    <p className="text-center text-sm font-bold text-white">
            ¿Qué dicen nuestros clientes?
          </p>

        </div>
        <div className="flex flex-col items-center justify-center py-8">
        </div>
      </main>
      <Footer />
    </div>
  );
}
