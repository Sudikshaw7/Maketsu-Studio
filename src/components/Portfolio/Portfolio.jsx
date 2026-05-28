import { useState, useEffect, useRef } from 'react';
import styles from './Portfolio.module.css';

// Placeholder portfolio items — user replaces these src values with their own work photos
const items = [
  { id: 1, title: 'Aura Wellness', cat: 'Wordmark', src: 'https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=600&q=80', color: '#c9a84c' },
  { id: 2, title: 'Vertex Capital', cat: 'Symbol', src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80', color: '#e8c96e' },
  { id: 3, title: 'Bloom Bakery', cat: 'Combination', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', color: '#ff4d2e' },
  { id: 4, title: 'Forge Studio', cat: 'Wordmark', src: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80', color: '#c9a84c' },
  { id: 5, title: 'Nova Tech', cat: 'Symbol', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80', color: '#e8c96e' },
  { id: 6, title: 'Roots Restaurant', cat: 'Combination', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', color: '#c9a84c' },
  { id: 7, title: 'Slate Architecture', cat: 'Wordmark', src: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80', color: '#ff4d2e' },
  { id: 8, title: 'Lumen Events', cat: 'Symbol', src: 'https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=600&q=80', color: '#c9a84c' },
];

const categories = ['All', 'Wordmark', 'Symbol', 'Combination'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [visible, setVisible] = useState(items);
  const sectionRef = useRef(null);

  useEffect(() => {
    const filtered = active === 'All' ? items : items.filter(i => i.cat === active);
    setVisible(filtered);
  }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className={styles.portfolio} ref={sectionRef}>
      <div className={styles.header} data-reveal className="reveal">
        <span className="section-label">Portfolio</span>
        <h2 className={styles.title}>
          Work that <em>speaks</em><br />for itself.
        </h2>
      </div>

      <div className={styles.filters} data-reveal className="reveal">
        {categories.map(c => (
          <button
            key={c}
            className={`${styles.filter} ${active === c ? styles.filterActive : ''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((item, i) => (
          <div
            key={item.id}
            className={`${styles.card} reveal`}
            data-reveal
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <div className={styles.imgWrap}>
              <img src={item.src} alt={item.title} />
              <div className={styles.overlay}>
                <span className={styles.overlayNum}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className={styles.overlayInfo}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <span className={styles.cardCat}>{item.cat}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Replace-your-work notice */}
      <div className={styles.notice} data-reveal className="reveal">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1"/>
          <path d="M8 7v4M8 5.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        Replace the images above with your own work — update the <code>src</code> values in <code>Portfolio.jsx</code>.
      </div>
    </section>
  );
}
