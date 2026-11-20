import { useId, useState } from 'react';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import type { FaqEntry } from './faq.data';

interface Props {
  item: FaqEntry;
  defaultOpen?: boolean;
}

export function AccordionItem({ item, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="acc">
      <button className="acc-q" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((o) => !o)}>
        <span>{item.q}</span>
        <img src={open ? minus : plus} alt="" width={24} height={24} />
      </button>
      <div id={panelId} className="acc-a" hidden={!open}>
        {item.a.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </div>
  );
}
