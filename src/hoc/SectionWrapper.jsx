import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { Navbar } from "../components";
import { navLinks } from "../constants/constants";

const SectionWrapper = (Component, idName) =>

    function HOC() {

        return (
            <>
                <Navbar/>
                {/* <hr className="h-px mb-10 mt-2 bg-black-100 z-21 border-3 "/> */}

                <motion.section
                    variants={staggerContainer()}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.25 }}
                    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
                >
                    <span className='hash-span' id={idName}>
                        &nbsp;
                    </span>

                    <Component />
                    
                </motion.section>
            </>
        )
    }

export default SectionWrapper;