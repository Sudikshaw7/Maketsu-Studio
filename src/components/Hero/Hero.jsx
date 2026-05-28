import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.querySelectorAll('.' + styles.charWrap).forEach((ch, i) => {
      ch.style.animationDelay = `${i * 0.04}s`;
      ch.classList.add(styles.animate);
    });
  }, []);

  const title = "We craft logos that mean something.";
  const chars = title.split('').map((ch, i) => (
    <span key={i} className={styles.charWrap}>
      <span className={styles.char}>{ch === ' ' ? '\u00A0' : ch}</span>
    </span>
  ));

  return (
    <section id="hero" className={styles.hero}>
      {/* Background elements */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />

      <div className={styles.eyebrow}>
        <span className={styles.dot} />
        <span className="section-label">Brand Identity Studio</span>
      </div>

      <h1 ref={titleRef} className={styles.title}>
        {chars}
      </h1>

      <p className={styles.sub}>
        MARKFORM is a dedicated logo design studio — <em>one team, one mission.</em><br />
        We distill brands into marks that speak before a word is said.
      </p>

      <div className={styles.actions}>
        <a href="#work" className={styles.btnPrimary}>
          <span>See Our Work</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="#contact" className={styles.btnSecondary}>
          Start a Project
        </a>
      </div>

      <div className={styles.stats}>
        {[['120+', 'Logos Delivered'], ['8+', 'Years of Craft'], ['40+', 'Industries'], ['100%', 'Custom Work']].map(([num, label]) => (
          <div key={label} className={styles.stat}>
            <span className={styles.statNum}>{num}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>

      {/* Hero image collage */}
      <div className={styles.imageCollage}>
        <div className={`${styles.img1} ${styles.imgCard}`}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
            alt="Design process"
          />
        </div>
        <div className={`${styles.img2} ${styles.imgCard}`}>
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&q=80"
            alt="Logo concepts"
          />
        </div>
        <div className={`${styles.img3} ${styles.imgCard}`}>
          <img
            src="https://images.unsplash.com/photo-1634942537034-2531766767d1?w=300&q=80"
            alt="Brand identity"
          />
        </div>
      </div>
    </section>
  );
}
