import { useEffect, useState } from 'react';
import { navLinks } from '../../data/navLinks';
import menuIcon from '../../assets/menu.svg';
import closeIcon from '../../assets/close.svg';
import './Nav.css';

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav className={`nav${open ? ' open' : ''}`} aria-label="Principal">
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((o) => !o)}
      >
        <img src={open ? closeIcon : menuIcon} alt="" width={24} height={24} />
      </button>
      <div id="nav-links" className="nav-links">
        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
        <a className="buy" href="#">
          Compra<span className="buy-extra"> cartela</span>
        </a>
      </div>
    </nav>
  );
}
