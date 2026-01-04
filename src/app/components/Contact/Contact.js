"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section className={styles.section} id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Get In Touch</h2>
                    <p className={styles.subtitle}>
                        Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you!
                    </p>

                    <div className={styles.card}>
                        <a href="mailto:pushpdeepsingh96@gmail.com" className={styles.email}>
                            pushpdeepsingh96@gmail.com
                        </a>

                        <div className={styles.socials}>
                            <Link href="https://gmail.com" target="_blank" className={styles.socialLink}>
                                <Mail size={24} />
                            </Link>
                            <Link href="https://github.com/Pushpdeep-2001" target="_blank" className={styles.socialLink}>
                                <Github size={24} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/pushpdeep-singh-41810b200/" target="_blank" className={styles.socialLink}>
                                <Linkedin size={24} />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" className={styles.socialLink}>
                                <Twitter size={24} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
