import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { Navbar } from "../components";
import { navLinks } from "../constants/constants";

const SectionWrapper = (Component, idName) =>

    function HOC() {

        return (

            <div className="[@media(max-width:767px)]:scrollbar-hide">
                <Navbar/>

                {/* <motion.section
                    variants={staggerContainer()}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.25 }}
                    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
                    >
                    <span className='hash-span' id={idName}>
                        &nbsp;
                    </span> */}

                <div className={`${styles.padding} relative z-0`}>
                    <Component/>
                </div>
                    
                {/* </motion.section> */}
            </div>
        )
    }

export default SectionWrapper;