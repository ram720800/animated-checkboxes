import AnimatedCheckbox from "./components/AnimatedCheckbox";
import { motion } from "framer-motion";

const text = "Animated Checkboxes";

const App = () => {
  return (
    <div className="h-screen w-screen g1 pt-4">
      <div className="font-extrabold text-2xl sm:text-5xl p-4 text-center text-[#915781]">
        {text.split("").map((l, i) => (
          <motion.span
            key={i}
            className="inline-block cursor-pointer"
            whileHover={{ y: 60, opacity: 0, rotate: 20 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <AnimatedCheckbox />
      </div>
    </div>
  );
};

export default App;
