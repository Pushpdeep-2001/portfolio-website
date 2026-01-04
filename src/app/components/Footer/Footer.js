"use client";

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                © {new Date().getFullYear()} Pushpdeep Singh. All rights reserved.
            </p>
        </footer>
    );
}
