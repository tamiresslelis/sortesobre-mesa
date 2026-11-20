import './Tree.css';
import trunk from '../../assets/tree/trunk.svg';
import branches from '../../assets/tree/branches.svg';
import garlands from '../../assets/tree/garlands.svg';
import star from '../../assets/tree/star.svg';
import creamTop from '../../assets/tree/cream-top.svg';
import redUpperLeft from '../../assets/tree/red-upper-left.svg';
import goldUpperRight from '../../assets/tree/gold-upper-right.svg';
import creamMiddleLeft from '../../assets/tree/cream-middle-left.svg';
import goldCenter from '../../assets/tree/gold-center.svg';
import redMiddleRight from '../../assets/tree/red-middle-right.svg';
import goldBottomLeft from '../../assets/tree/gold-bottom-left.svg';
import redBottomCenter from '../../assets/tree/red-bottom-center.svg';
import creamBottomRight from '../../assets/tree/cream-bottom-right.svg';
import creamLowRight from '../../assets/tree/cream-low-right.svg';

/** inset = [top, right, bottom, left] in % of the 540×680 artboard (from Figma). */
const layers: { src: string; inset: string; bleed?: string }[] = [
  { src: trunk, inset: '81.18% 45.37% 6.8% 45.37%' },
  { src: branches, inset: '16.46% 11.78% 10.73% 12.27%' },
  { src: garlands, inset: '30.15% 22.22% 15.18% 22.04%', bleed: '-0.54% -0.66%' },
  { src: star, inset: '6.54% 40.08% 78.48% 39.89%' },
  { src: creamTop, inset: '25.15% 47.59% 68.53% 46.85%' },
  { src: redUpperLeft, inset: '39.56% 56.11% 54.26% 37.96%' },
  { src: goldUpperRight, inset: '40.15% 40% 53.38% 53.7%' },
  { src: creamMiddleLeft, inset: '54.26% 61.38% 38.3% 31.48%' },
  { src: goldCenter, inset: '53.38% 47.22% 40.29% 47.22%' },
  { src: redMiddleRight, inset: '56.18% 33.15% 37.06% 60.19%' },
  { src: goldBottomLeft, inset: '72.06% 70.19% 21.18% 23.52%' },
  { src: redBottomCenter, inset: '73.24% 53.89% 19.71% 39.44%' },
  { src: creamBottomRight, inset: '70.15% 36.46% 21.9% 55.74%' },
  { src: creamLowRight, inset: '76.03% 24.07% 18.24% 70.74%' },
];

export function Tree({ className = '' }: { className?: string }) {
  return (
    <div className={`tree ${className}`} aria-hidden="true">
      {layers.map(({ src, inset, bleed }) => (
        <div key={src} className="tree-layer" style={{ inset }}>
          <img src={src} alt="" style={bleed ? { inset: bleed } : undefined} />
        </div>
      ))}
    </div>
  );
}
