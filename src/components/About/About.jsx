import { useEffect, useRef } from 'react';
import styles from './About.module.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={styles.left}>
        <div className={styles.imgStack}>
          <img
            className={styles.imgBack}
            src="https://images.unsplash.com/photo-1542744094-24638eff58bb?w=500&q=80"
            alt="Design studio"
          />
          <img
            className={styles.imgFront}
            src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=400&q=80"
            alt="Sketching logos"
          />
          <div className={styles.badge}>
            <span className={styles.badgeNum}>ONE</span>
            <span className={styles.badgeText}>FOCUSED TEAM</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <span className="section-label" data-reveal style={{ display: 'block', marginBottom: '1rem' }}>
          About Us
        </span>
        <h2 className={styles.title} data-reveal>
          Logo design is all<br />we <em>do</em> — and we're
          <br /><span className={styles.accent}>obsessed</span> with it.
        </h2>
        <p className={styles.body} data-reveal>
          MARKFORM is not a full-service agency that dabbles in logos. We are a team of dedicated brand mark designers who have spent years studying what makes a logo endure, adapt, and communicate instantly across every context.
        </p>
        <p className={styles.body} data-reveal>
          Our process starts with research and ends with a mark that feels inevitable — as if it could never have been anything else.
        </p>

        <div className={styles.pillars} data-reveal>
          {['Research First', 'Concept-Led', 'Craft Obsessed', 'Timeless Not Trendy'].map(p => (
            <div key={p} className={styles.pillar}>
              <div className={styles.pillarDot} />
              <span>{p}</span>
            </div>
          ))}
        </div>

        <a href="#contact" className={styles.link} data-reveal>
          Learn our process
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
