"use client";

import { motion } from "framer-motion";
import styles from "./Achievements.module.css";
import { Trophy, Award, Star } from "lucide-react";

const achievements = [
    {
        title: "Pinnacle Performer",
        organization: "Z1 Tech",
        description: "Recognized as a Pinnacle Performer for outstanding contribution and performance twice in my first year.",
        icon: <Trophy size={28} />
    },
    {
        title: "HackOn",
        organization: "Amazon",
        description: "Developed innovative tech solutions addressing real-world challenges in a competitive hackathon organized by Amazon.",
        icon: <Award size={28} />
    },
    {
        title: "Open Mobility Challenge",
        organization: "Namma Yatri",
        description: "Built an assistive product to support specially-abled individuals, showcasing innovation and social impact. Architected a scalable backend system.",
        icon: <Star size={28} />
    },
    {
        title: "Techathon 4.0",
        organization: "EY",
        description: "Participated in a 36-hour hackathon demonstrating strong technical expertise, team collaboration, and problem-solving skills.",
        icon: <Star size={28} />
    }
];

export default function Achievements() {
    return (
        <section className={styles.section} id="achievements">
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Achievements
                </motion.h2>

                <div className={styles.grid}>
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <div className={styles.organization}>{item.organization}</div>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
