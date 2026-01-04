"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { Folder } from "lucide-react";

const projects = [
    {
        title: "Snappy",
        description: "Snappy a realtime chat application built with React js and Node js with websocket integration",
        tags: ["React", "Node.js", "WebSocket"],
        image: "/project1.png"
    },
    {
        title: "Botsphere",
        description: "Modern conversational AI powered by large language models. This domain-specific chatbot allows users to tap into LLM intelligence.",
        tags: ["OpenAI", "Python", "React", "Flask", "Streamlit"],
        image: "/project2.png"
    }
];

export default function Projects() {
    return (
        <section className={styles.section} id="projects">
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardImage}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDesc}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
