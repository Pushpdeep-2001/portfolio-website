"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        title: "Software Developer",
        company: "Z1-Tech",
        location: "Gurgaon",
        date: "Aug 2024 – Present",
        description: [
            "Engineered AI-driven Compliance Check System with Python (Flask), fine-tuned OpenAI models, MySQL, Redis Queue, and BigQuery — automating policy reviews with async processing, caching, continuous retraining.",
            "Developed anime multi-bot chat platform using Flask, OpenAI GPT, RAG (Redis Vector Store + FAISS), event streaming — delivering contextual, real-time conversations with advanced NLP for character behaviors.",
            "Scaled GCP-based systems (Redis Memorystore, BigQuery, Cloud Functions) handling millions of daily requests; optimized AI workflows via data-driven prioritization."
        ],
        technologies: [
            "Python", "LLM's", "RAG", "Redis", "BigQuery", "GCP", "MySQL", "ClickHouse", "WebSockets", "Go", "Linux"
        ]
    },
    {
        title: "Software Developer Intern",
        company: "IntelliAssist",
        location: "Gurgaon",
        date: "Jun 2024 – Jul 2024",
        description: [
            "Designed and deployed scalable RESTful APIs with Node.js, Express.js, MongoDB on Microsoft Azure; integrated Shopify OAuth, product/cart/checkout flows, and real-time webhooks via Azure Functions.",
            "Implemented custom middleware for validation/error handling and established CI/CD pipelines with GitHub Actions for automated testing & deployment."
        ],
        technologies: [
            "Node.js", "Express.js", "MongoDB", "Microsoft Azure", "Shopify API", "GitHub Actions"
        ]
    },
    {
        title: "Software Engineer Intern",
        company: "Shoppeal Tech",
        location: "Mumbai",
        date: "Dec 2023 – Feb 2024",
        description: [
            "Developed maintainable RESTful & GraphQL APIs with Node.js and CMS integrations for efficient content delivery and data flow.",
            "Integrated backend APIs seamlessly with Next.js frontends to enhance performance, reliability, and overall system architecture."
        ],
        technologies: [
            "Node.js", "GraphQL", "Next.js", "CMS Integrations"
        ]
    },
    {
        title: "Software Developer Intern",
        company: "10X Academy",
        location: "Remote",
        date: "Sep 2022 – Mar 2023",
        description: [
            "Specialized in frontend with React.js & Next.js — delivered responsive, high-performance web apps and contributed to AI-powered student chatbot using OpenAI APIs for personalized learning.",
            "Implemented secure OAuth authentication flows on backend to enable reliable user access management."
        ],
        technologies: [
            "React.js", "Next.js", "OpenAI API", "OAuth"
        ]
    }
];

export default function Experience() {
    return (
        <section className={styles.section} id="experience">
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Work Experience
                </motion.h2>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={styles.item}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                <Briefcase size={20} color="var(--primary)" />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.date}>{exp.date}</span>
                                <h3 className={styles.role}>{exp.title}</h3>
                                <div className={styles.companyHeader}>
                                    <h4 className={styles.company}>{exp.company}</h4>
                                    <span className={styles.location}>{exp.location}</span>
                                </div>
                                {Array.isArray(exp.description) ? (
                                    <ul className={styles.descriptionList}>
                                        {exp.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className={styles.description}>{exp.description}</p>
                                )}
                                <div className={styles.technologies}>
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className={styles.technology}>{tech}</span>
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
