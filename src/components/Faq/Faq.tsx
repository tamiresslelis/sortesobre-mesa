import { useState } from 'react';
import { AccordionItem } from './AccordionItem';
import { faqItems } from './faq.data';
import { DESKTOP_QUERY } from '../../config';
import './Faq.css';

const isDesktop = () => typeof window !== 'undefined' && window.matchMedia(DESKTOP_QUERY).matches;

export function Faq() {
  // Desktop opens the first answer; mobile starts fully collapsed (per design).
  const [openFirst] = useState(isDesktop);

  return (
    <section id="duvidas" className="faq" aria-labelledby="faq-title">
      <div className="faq-inner">
        <h2 id="faq-title">Tire duas dúvidas</h2>
        {faqItems.map((item, i) => (
          <AccordionItem key={item.q} item={item} defaultOpen={openFirst && i === 0} />
        ))}
      </div>
    </section>
  );
}
