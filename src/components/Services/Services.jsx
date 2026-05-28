import { useEffect, useRef } from 'react';
import styles from './Services.module.css';

const services = [
  {
    num: '01',
    title: 'Wordmark Logos',
    desc: 'Typographic logos built around your brand name — custom lettering, refined spacing, and character that holds at any size.',
    tags: ['Typography', 'Lettering', 'Kerning'],
  },
  {
    num: '02',
    title: 'Symbol & Icon Marks',
    desc: 'Abstract or pictorial icons that become the face of your brand — scalable, timeless, and unmistakably yours.',
    tags: ['Icon Design', 'Vector', 'Scalable'],
  },
  {
    num: '03',
    title: 'Combination Marks',
    desc: 'The perfect marriage of symbol and type — versatile systems that work together and independently.',
    tags: ['Versatile', 'Systems', 'Lockups'],
  },
  {
    num: '04',
    title: 'Brand Identity Systems',
    desc: 'Full visual language — color, typography, pattern, and usage guidelines that keep your brand consistent everywhere.',
    tags: ['Palette', 'Guidelines', 'Typography'],
  },
  {
    num: '05',
    title: 'Logo Refinement',
    desc: 'You have a logo but it feels off. We rebuild it from the ground up with proper geometry and professional craft.',
    tags: ['Redesign', 'Craft', 'Polish'],
  },
  {
    num: '06',
    title: 'Stationery & Collateral',
    desc: 'Business cards, letterheads, envelopes — physical touchpoints that extend your brand into the real world.',
    tags: ['Print', 'Business Cards', 'Letterhead'],
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section id="services" className={styles.services} ref={sectionRef}>
      <div className={styles.header} data-reveal className="reveal">
        <span className="section-label">What We Do</span>
        <h2 className={styles.title}>
          Every logo <em>starts</em><br />with a question.
        </h2>
        <p className={styles.sub}>
          We don't just draw shapes — we solve brand problems through visual clarity.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`${styles.card} reveal`}
            data-reveal
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className={styles.num}>{s.num}</span>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <div className={styles.tags}>
              {s.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
            <div className={styles.cardLine} />
          </div>
        ))}
      </div>

      <div className={styles.bigText} aria-hidden>LOGOS</div>
    </section>
  );
}
