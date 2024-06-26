'use client'
import * as React from "react"
import { motion } from 'framer-motion'
import Button from "../Button";
import NavBut from "../NavBut";
import styles from './style.module.scss';


export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isActive, setIsActive] = React.useState(false);

    const menu = {
        open: {
            width: "380px",
            height: "400px",
            top: "-25px",
            right: "-25px",
            transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }
        },
        closed: {
            width: "100px",
            height: "40px",
            top: "0px",
            right: "0px",
            transition: { duration: 0.5, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
        }
    }


    return (
        <div className={styles.header}>
            <motion.div
                className={styles.menu}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                {isActive && <NavBut />}
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
        </div>
    )
}
