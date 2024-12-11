import { easeOut, motion } from "framer-motion";
import team1 from "../../assets/team/banner1.jpg";
import team2 from "../../assets/team/banner2.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              src={team1}
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-b-[5px] border-l-[5px] border-blue-500 shadow-2xl"
            />

            <motion.img
              src={team2}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, delay:5, repeat: Infinity }}
              className="max-w-sm w-64 rounded-t-[40px] rounded-bl-[40px] border-b-[5px] border-r-[5px] border-blue-500 shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{ x: 50 }}
              transition={{
                duration: 2,
                delay: 1,
                ease: easeOut,
                repeat: Infinity
              }}
              className="md:text-5xl font-bold text-2xl"
            >
              Latest{" "}
              <motion.span
                animate={{ color: ["#3371ff", "#339fff"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Jobs
              </motion.span>{" "}
              for You!
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
