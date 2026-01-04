"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { Code2, Server, Database, Brain, Cloud, Terminal } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: <Code2 size={24} />,
        skills: [
            "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS",
            "Bootstrap", "GSAP Animations", "REST API Integration"
        ]
    },
    {
        title: "Backend",
        icon: <Server size={24} />,
        skills: [
            "Node.js (Express)", "Python (Flask, FastAPI)",
            "REST APIs", "WebSocket (Socket.io)", "OAuth 2.0 Auth", "JWT Auth",
            "Event Streaming (SSE)", "Microservice Architecture", "Webhook Integrations"
        ]
    },
    {
        title: "Databases & Caching",
        icon: <Database size={24} />,
        skills: [
            "MongoDB", "MySQL", "Redis (Queue System, Workers, Vector Store)",
            "BigQuery", "ClickHouse", "Google Cloud MemoryStore", "FAISS",
            "Data Indexing & Search Optimization", "My SQL"
        ]
    },
    {
        title: "AI / GenAI",
        icon: <Brain size={24} />,
        skills: [
            "OpenAI", "Gemini", "Ollama", "LangChain", "Hugging Face Transformers",
            "Retrieval-Augmented Generation (RAG)", "Model Fine-tuning on OpenAI", "SFT (Supervised Fine Tunning)"
        ]
    },
    {
        title: "DevOps & Cloud",
        icon: <Cloud size={24} />,
        skills: [
            "Google Cloud Platform (Functions, Container App, Cloud Run)", "Docker",
            "Linux (AlmaLinux, Ubuntu)", "GitHub"
        ]
    },
    {
        title: "Core CS",
        icon: <Terminal size={24} />,
        skills: [
            "Data Structures & Algorithms", "Object-Oriented Programming",
            "DBMS Fundamentals", "Operating Systems", "Networking"
        ]
    }
];

export default function Skills() {
    return (
        <section className={styles.section} id="skills">
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.header}>
                                <div className={styles.iconWrapper}>{category.icon}</div>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>
                            <div className={styles.skillsList}>
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className={styles.skill}>{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
