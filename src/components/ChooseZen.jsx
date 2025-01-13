import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GenZ from "./GenZ";
import GenY from "./GenY";

const ChooseZen = () => {
  const [currentScreen, setCurrentScreen] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Nền chuyển động */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-blue-500"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0% 100%)",
        }}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-green-500"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0% 100%)",
        }}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Nút chọn */}
      {currentScreen === null && (
        <>
          <motion.button
            className="absolute top-56 left-56 bg-white text-black px-6 py-3 rounded shadow z-10 font-bold"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setCurrentScreen("GenZ")}
          >
            Gen Z
          </motion.button>
          <motion.button
            className="absolute bottom-56 right-56 bg-white text-black px-6 py-3 rounded shadow z-10 font-bold"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setCurrentScreen("GenY")}
          >
            Gen Y
          </motion.button>
        </>
      )}

      {/* Hiển thị màn hình */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <AnimatePresence mode="wait" initial={false}>
          {currentScreen === null && (
            <motion.div
              key="welcome"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-white text-center"
            >
              <h1 className="text-5xl font-bold">Welcome to ChooseZen</h1>
              <p className="mt-4 text-lg">Please select a screen to continue.</p>
            </motion.div>
          )}
          {currentScreen === "GenZ" && (
            <motion.div
              key="genz"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full h-full"
            >
              <GenZ />
            </motion.div>
          )}
          {currentScreen === "GenY" && (
            <motion.div
              key="geny"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full h-full"
            >
              <GenY />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChooseZen;
