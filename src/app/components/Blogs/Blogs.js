"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Blogs.module.css";

import blogsData from "./blogs.json";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export default function Blogs({ limit }) {
    const displayBlogs = limit ? blogsData.slice(0, limit) : blogsData;
    const hasMore = limit && blogsData.length > limit;

    return (
        <section id="blogs" className={styles.blogs}>
            <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Tech Blogs
            </motion.h2>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {displayBlogs.map((blog) => (
                    <motion.div
                        key={blog.id}
                        className={styles.card}
                        variants={itemVariants}
                    >
                        <div className={styles.date}>
                            <span>📅</span> {blog.date}
                        </div>
                        <h3 className={styles.title}>{blog.title}</h3>
                        <p className={styles.summary}>{blog.summary}</p>
                        <div className={styles.tags}>
                            {blog.tags.map((tag, index) => (
                                <span key={index} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                        <a href={blog.link} className={styles.readMore} target="_blank">
                            Read More <span>→</span>
                        </a>
                    </motion.div>
                ))}
            </motion.div>

            {hasMore && (
                <motion.div
                    className={styles.seeAllContainer}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/blogs" className={styles.seeAllButton}>
                        See All Blogs <span>→</span>
                    </Link>
                </motion.div>
            )}
        </section>
    );
}

