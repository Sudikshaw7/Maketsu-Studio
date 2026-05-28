import { useEffect, useRef } from 'react';
import styles from './Team.module.css';

// Replace with your actual team member photos and info
const team = [
  {
    name: 'Your Name',
    role: 'Lead Designer & Founder',
    bio: 'Obsessed with letterforms and the geometry of identity. 8+ years crafting marks for brands across the globe.',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    skills: ['Wordmarks', 'Brand Strategy', 'Typography'],
  },
  {
    name: 'Team Member',
    role: 'Visual Identity Designer',
    bio: 'Brings a fine arts background to logo design — every mark is considered from form, balance, and emotional resonance.',
    src: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=400&q=80',
    skills: ['Symbols', 'Illustration', 'Color Theory'],
  },
  {
    name: 'Team Member',
    role: 'Brand Consultant',
    bio: 'Bridges the gap between business strategy and visual expression. Ensures every logo answers the right question.',
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    skills: ['Strategy', 'Research', 'Presentations'],
  },
];

export default function Team() {
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
    <section id="team" className={styles.team} ref={sectionRef}>
      <div className={styles.header} data-reveal>
        <span className="section-label">The Team</span>
        <h2 className={styles.title}>
          Small by design.<br /><em>Mighty</em> by craft.
        </h2>
        <p className={styles.sub}>
          We're a focused team — no middlemen, no outsourcing.<br />
          You work directly with the people crafting your mark.
        </p>
      </div>

      <div className={styles.grid}>
        {team.map((member, i) => (
          <div
            key={member.name + i}
            className={`${styles.card} reveal`}
            data-reveal
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className={styles.imgWrap}>
              <img src={member.src} alt={member.name} />
              <div className={styles.imgOverlay} />
            </div>
            <div className={styles.info}>
              <div className={styles.nameRow}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
              </div>
              <p className={styles.bio}>{member.bio}</p>
              <div className={styles.skills}>
                {member.skills.map(s => (
                  <span key={s} className={styles.skill}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
