"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.section} id="about">
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className={styles.content}>
                    <motion.div
                        className={styles.text}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p>
                            I'm a passionate <span className={styles.highlight}>Software Developer</span> based in India.
                            My journey in coding began when I discovered the thrill of automating tasks and building things from scratch.
                        </p>
                        <p>
                            I specialize in full-stack development, with a strong focus on building<span className={styles.highlight}> scalable</span> and <span className={styles.highlight}>production-grade</span> AI systems.
                            I love turning complex problems into simple, beautiful, and intuitive designs.
                        </p>
                        <p>
                            When I'm not pushing pixels, you can find me exploring new tech stacks, contributing to open source, or gaming.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className={styles.codeBlock}>
                            <p>
                                <span className={styles.keyword}>const</span> <span className={styles.variable}>developer</span> = {"{"}
                            </p>
                            <p style={{ paddingLeft: '1rem' }}>
                                name: <span className={styles.string}>"Pushpdeep Singh"</span>,
                            </p>
                            <p style={{ paddingLeft: '1rem' }}>
                                role: <span className={styles.string}>"Software Developer"</span>,
                            </p>
                            <p style={{ paddingLeft: '1rem' }}>
                                mindset: [<span className={styles.string}>"Experimentation"</span>, <span className={styles.string}>"Innovation"</span>],
                            </p>
                            <p style={{ paddingLeft: '1rem' }}>
                                traits: [<span className={styles.string}>"Creative"</span>, <span className={styles.string}>"Curious"</span>]
                            </p>
                            <p>{"}"};</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
