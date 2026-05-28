import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <a href="#hero" className={styles.logo}>MARK<span>FORM</span></a>
          <p className={styles.tagline}>
            One team. One mission.<br />Logos that mean something.
          </p>
        </div>

        <nav className={styles.nav}>
          <div className={styles.col}>
            <span className={styles.colHead}>Studio</span>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#services">Services</a>
          </div>
          <div className={styles.col}>
            <span className={styles.colHead}>Work</span>
            <a href="#work">Portfolio</a>
            <a href="#contact">Case Studies</a>
          </div>
          <div className={styles.col}>
            <span className={styles.colHead}>Connect</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
          </div>
        </nav>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <span className={styles.copy}>© {new Date().getFullYear()} MARKFORM Studio. All rights reserved.</span>
        <span className={styles.made}>Crafted with intention.</span>
      </div>
    </footer>
  );
}
