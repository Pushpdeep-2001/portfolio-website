"use client";

import Navbar from "../components/Navbar/Navbar";
import Blogs from "../components/Blogs/Blogs";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./BlogsPage.module.css";

export default function BlogsPage() {
    return (
        <main style={{ background: 'var(--background)' }}>
            <Navbar />
            <div className={styles.headerSpacer} />

            <motion.div
                className="container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/" className={styles.backLink}>
                    <span>←</span> Back to Home
                </Link>
            </motion.div>

            <Blogs limit={null} />

            <Footer />
        </main>
    );
}
