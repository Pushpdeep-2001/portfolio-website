"use client";

import { motion } from "framer-motion";
import styles from "./Education.module.css";
import { GraduationCap } from "lucide-react";

const education = [
    {
        degree: "Bachelor of Technology (B.Tech)",
        institution: "Maharaja Agrasen Institute of Technology, Delhi",
        year: "2020 - 2024",
        score: "CGPA: 8.7/10",
        description: "Specialized in Information Technology. Active member of the Coding Club and Robotics Society."
    },
    {
        degree: "Senior Secondary (12th Grade)",
        institution: "Kendriya Vidyalaya, Vigyan vihar, Delhi",
        year: "2017 - 2019",
        score: "Percentage: 87.5%",
        description: "Stream: Science with Mathematics."
    },
    {
        degree: "Secondary School (10th Grade)",
        institution: "Kendriya Vidyalaya, Air force station, Hindan",
        year: "2007 - 2017",
        score: "Percentage: 94%",
        description: "Recipient of the Scholar Badge for academic excellence."
    }
];

export default function Education() {
    return (
        <section className={styles.section} id="education">
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                <div className={styles.grid}>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                <GraduationCap size={32} color="var(--primary)" />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.header}>
                                    <h3 className={styles.degree}>{edu.degree}</h3>
                                    <span className={styles.year}>{edu.year}</span>
                                </div>
                                <h4 className={styles.institution}>{edu.institution}</h4>
                                <div className={styles.scoreBadge}>{edu.score}</div>
                                <p className={styles.description}>{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
