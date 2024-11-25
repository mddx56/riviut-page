"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import MapLottie from "../Lotties/MapLottie";
import {
  AtSign,
  Clock,
  MapPin,
  Navigation,
  Navigation2,
  Phone,
} from "lucide-react";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h3 className="mb-15 flex items-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Clínica Riviut <MapLottie />
              </h3>

              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.0777799388843!2d-63.179893826364975!3d-17.788041275195464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e9439141902d%3A0x5e1f36f1f1a89bbf!2sCL%C3%8DNICA%20RIVIUT!5e0!3m2!1ses-419!2sbo!4v1732512489203!5m2!1ses-419!2sbo"
                  height="450"
                  loading="lazy"
                  className="w-full rounded-lg"
                ></iframe>
              </div>

              <div className="flex flex-wrap gap-4 xl:justify-between ">
                <a
                  href="https://maps.app.goo.gl/VdEFTjNgddmCWnqGA"
                  aria-label="send message"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                >
                  Como llegar
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 inline-flex items-center gap-2 text-metatitle3 font-medium text-black dark:text-white">
                  <MapPin />
                  Ciudad
                </h3>
                <p>Santa Cruz de la Sierra, Bolivia</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 inline-flex items-center gap-2 text-metatitle3 font-medium text-black dark:text-white">
                  <Navigation />
                  Direccion
                </h3>
                <p>Calle Cochabamba Nº 500</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 inline-flex items-center gap-2 text-metatitle3 font-medium text-black dark:text-white">
                  <Clock /> Horarios
                </h3>
                <p>Urgencias 24 horas</p>
                <p> Lunes a Viernes: 24 hrs </p>
                <p> Sábados: 24 hrs</p>
                <p>Domingos: 24 hrs</p>
              </div>
              <div>
                <h4 className="mb-4 inline-flex items-center gap-2 text-metatitle3 font-medium text-black dark:text-white">
                  <Phone /> Telefono
                </h4>
                <p>
                  <a href="https://wa.me/59169107848">+591 69107848</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
