"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Navbar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navItems = [
    { name: "About", href: "/#about" },
    { name: "Blogs", href: "/#blogs" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
];



export default function Navbar() {
    return (
        <motion.nav
            className={styles.navbar}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={`container ${styles.navContent}`}>
                <Link href="/" className={styles.logo}>
                    Pushpdeep.
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <ul className={styles.links}>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className={styles.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>
            </div>
        </motion.nav>
    );
}
