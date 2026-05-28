import { useEffect, useRef } from 'react';
import styles from './CTA.module.css';

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className={styles.cta} ref={sectionRef}>
      <div className={styles.bg} />
      <div className={styles.noise} />

      <div className={styles.inner}>
        <span className="section-label" data-reveal style={{ display: 'block', marginBottom: '1.5rem' }}>
          Ready to Begin?
        </span>
        <h2 className={styles.title} data-reveal>
          Your brand deserves<br />a mark that <em>lasts.</em>
        </h2>
        <p className={styles.sub} data-reveal>
          Let's talk about your brand. We take on a limited number of projects each month to ensure every client gets our full attention.
        </p>

        <div className={styles.form} data-reveal>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Your Name</label>
              <input type="text" placeholder="Jane Smith" />
            </div>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="jane@company.com" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Tell us about your brand</label>
            <textarea rows={4} placeholder="What does your brand do, and what feeling should the logo evoke?" />
          </div>
          <button className={styles.submit}>
            <span>Send Enquiry</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.sideInfo} data-reveal>
        <div className={styles.info}>
          <span className={styles.infoLabel}>Email</span>
          <span className={styles.infoVal}>hello@markform.studio</span>
        </div>
        <div className={styles.info}>
          <span className={styles.infoLabel}>Response Time</span>
          <span className={styles.infoVal}>Within 24 hours</span>
        </div>
        <div className={styles.info}>
          <span className={styles.infoLabel}>Availability</span>
          <span className={styles.infoVal}>Taking projects now</span>
        </div>
        <div className={styles.availability}>
          <span className={styles.availDot} />
          <span>Open for work</span>
        </div>
      </div>
    </section>
  );
}
