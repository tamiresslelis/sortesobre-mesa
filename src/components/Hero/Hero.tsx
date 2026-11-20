import { Tree } from '../Tree';
import arrow from '../../assets/arrow.svg';
import './Hero.css';

export function Hero() {
  return (
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
      <Tree className="tree-hero" />
    </header>
  );
}
