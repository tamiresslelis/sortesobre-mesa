import { useCallback } from 'react';
import { Faq } from './components/Faq';
import { Tree } from './components/Tree';
import { useScrollProgress } from './hooks/useScrollProgress';
import arrow from './assets/arrow.svg';

const links = ['Home', 'Sorte sobre mesa', 'DocesBH', 'Quando e onde', 'Tire suas dúvidas', 'Sobremesas'];

export function App() {
  // The hero→FAQ transition plays over the first ~1 viewport of scrolling.
  const p = useScrollProgress(useCallback(() => window.innerHeight, []));

  return (
    <div
      className="page"
      style={{ ['--p' as string]: p.toFixed(4) }}
    >
      <nav className="nav" aria-label="Principal">
        <ul>
          {links.map((l) => (
            <li key={l}>
              <a href={l === 'Tire suas dúvidas' ? '#duvidas' : '#'}>{l}</a>
            </li>
          ))}
        </ul>
        <a className="buy" href="#">Compra</a>
      </nav>

      <header className="hero">
        <h1 className="title">
          <span>SOR</span>
          <span>TE</span>
        </h1>
        <p className="tag tag-1">sobre </p>
        <p className="tag tag-2">mesa</p>
        <div className="hero-copy">
          <p className="hero-h">Edição especial de Natal!</p>
          <p className="hero-s">1 de novembro no Trip Food Sapucaí</p>
        </div>
        <img className="scroll-arrow" src={arrow} alt="" />
      </header>

      <Tree />

      <main>
        <Faq />
      </main>
    </div>
  );
}
