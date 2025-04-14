import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const checkItems = [
  { label: "Buy groceries" },
  { label: "Complete UI challenge" },
  { label: "Learn Framer motion" },
  { label: "Learn SwiftUI" },
];

const AnimatedCheckbox = () => {
  const [checkedItems, setCheckedItems] = useState(
    Array(checkItems.length).fill(false)
  );
  const [shakingItem, setShakingItem] = useState(null);

  const handleToggle = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);

    setShakingItem(index);
    setTimeout(() => {
      setShakingItem(null);
    }, 500);
  };
  const shakeAnimation = {
    shake: {
      x: [-3, 3, -2, 2, 0],
      transition: { duration: 0.4 },
    },
  };
  return (
    <div className="py-12 px-4 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5 bg-wl1">
      <div className="flex items-center pt-3 px-4 bg-gray-300 rounded-t-2xl -mx-4 -mt-12 border-b border-gray-400">
        <div className="flex space-x-2 mr-4">
          <div className="size-3.5 rounded-full bg-[#FF605C]"></div>
          <div className="size-3.5 rounded-full bg-[#FFBD44]"></div>
          <div className="size-3.5 rounded-full bg-[#00CA4E]"></div>
        </div>
        <div className="flex flex-1 items-center">
          <div className="flex items-center bg-wl1 rounded-t-xl px-3 py-1 max-w-md">
            <img
              src="/favicon.png"
              alt="peerlist"
              className="size-4 rounded-full object-contain mr-2"
            />
            <span className="text-sm text-gray-700 truncate">
              Peerlist - UI Animation Challenge
            </span>
            <span className="text-lg text-gray-500 ml-2 ">x</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        transition={{ duration: 0.3 }}
        className="p-6 space-y-4 mt-8"
      >
        {checkItems.map((item, index) => {
          const isChecked = checkedItems[index];
          return (
            <div
              key={item.label}
              className="flex items-center gap-6 cursor-pointer hover:bg-[#FFC7EA]/70 p-2 rounded-2xl"
              onClick={() => handleToggle(index)}
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  {!isChecked ? (
                    <motion.svg
                      width="30"
                      height="29"
                      viewBox="0 0 55 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      key="svg"
                    >
                      <motion.path
                        d="M44.5 2H10.5C6.08172 2 2.5 5.58172 2.5 10V44C2.5 48.4183 6.08172 52 10.5 52H44.5C48.9183 52 52.5 48.4183 52.5 44V10C52.5 5.58172 48.9183 2 44.5 2Z"
                        stroke="#915781"
                        strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.svg>
                  ) : (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                    >
                      <svg
                        width="30"
                        height="29"
                        viewBox="0 0 58 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_162_7)">
                          <motion.path
                            d="M42 0H8C3.58172 0 0 3.58172 0 8V42C0 46.4183 3.58172 50 8 50H42C46.4183 50 50 46.4183 50 42V8C50 3.58172 46.4183 0 42 0Z"
                            fill="#FC75B2"
                            fill-opacity="0.9"
                          />
                          <motion.path
                            d="M12.7171 27.0784C12.8861 29.1223 16.5203 33.4709 19.4196 36.6416C21.1866 38.574 24.2759 38.1687 25.5881 35.9028L37.6251 15.1182C38.032 14.4156 38.9925 14.2856 39.5715 14.8549V14.8549"
                            stroke="#E3E5E8"
                            stroke-width="5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            exit={{ pathLength: 0 }}
                            transition={{ duration: 1 }}
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_162_7"
                            x="0"
                            y="0"
                            width="58"
                            height="58"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_162_7"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_162_7"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative overflow-hidden">
                <motion.span
                  className={`font-medium text-2xl inline-block ${isChecked ? "text-gray-500":"text-bl2"}`}
                  animate={shakingItem === index ? "shake" : ""}
                  variants={shakeAnimation}
                >
                  {item.label}
                </motion.span>
                <AnimatePresence>
                  {isChecked && (
                    <motion.div
                      key="strike"
                      className="absolute left-0 top-1/2 h-[3px] w-full bg-[#915781]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AnimatedCheckbox;
