"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.css";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.backgroundGlow} />

            <div className={`container ${styles.content}`}>
                <motion.span
                    className={styles.greeting}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Hey, I'm Pushpdeep Singh
                </motion.span>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Engineering Next - Gen  <br />
                    Digital Products.
                </motion.h1>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Software developer creating high-performance, AI-driven
                    experiences — accessible, human-centered, and built to scale.
                </motion.p>

                <motion.div
                    className={styles.ctaButtons}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.a
                        href="/" // Placeholder
                        download
                        className={styles.resumeBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download size={20} />
                        Download Resume
                    </motion.a>
                    <Link href="#projects" className={styles.primaryBtn}>
                        See What I've Built
                    </Link>
                    <Link href="#contact" className={styles.secondaryBtn}>
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
