import { REDUCED_MOTION_QUERY } from '../../config';
import icon from '../../assets/to-top.svg';
import './ScrollToTop.css';

export function ScrollToTop({ visible }: { visible: boolean }) {
  const onClick = () =>
    window.scrollTo({ top: 0, behavior: matchMedia(REDUCED_MOTION_QUERY).matches ? 'auto' : 'smooth' });

  return (
    <button className="to-top" onClick={onClick} aria-label="Voltar ao topo" hidden={!visible}>
      <img src={icon} alt="" width={64} height={64} />
    </button>
  );
}
