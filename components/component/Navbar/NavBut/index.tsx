import styles from './style.module.scss';
import { motion } from 'framer-motion';


export default function index() {

    const links = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "#about",
        },
        {
            title: "Art",
            href: "#art",
        }
    ]

    const perspective = {
        initial: {
            opacity: 0,
            rotateX: 90,
            translateY: 80,
            translateX: -20,
        },
        enter: (i: number) => ({
            opacity: 1,
            rotateX: 0,
            translateY: 0,
            translateX: 0,
            transition: {
                duration: 0.65,
                delay: 0.5 + (i * 0.1),
            }
        }),
        exit: {
            opacity: 0,
            transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
        }
    }


    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    links.map((link, i) => {
                        const { title, href } = link;
                        return (
                            <div key={`b_${i}`} className={styles.linkContainer}>
                                <motion.div
                                    custom={i}
                                    variants={perspective}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <a href={href}>{title}</a>
                                </motion.div>

                            </div>

                        )
                    })
                }


            </div>
        </div>
    )
}