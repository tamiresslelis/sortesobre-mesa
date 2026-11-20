import { useCallback } from 'react';
import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { Tree } from '../components/Tree';
import { Faq } from '../components/Faq';
import { ScrollToTop } from '../components/ScrollToTop';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function App() {
  // Hero → FAQ transition plays over the first viewport of scrolling and is
  // exposed to every component as the CSS variable --p (0…1).
  const p = useScrollProgress(useCallback(() => window.innerHeight, []));

  return (
    <div className="page" style={{ ['--p' as string]: p.toFixed(4) }}>
      <Nav />
      <Hero />
      <Tree className="tree-fixed" />
      <main>
        <Faq />
      </main>
      <ScrollToTop visible={p >= 0.5} />
    </div>
  );
}
