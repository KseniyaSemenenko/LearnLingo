import Hero from '../../components/Hero/Hero';
import HeroImg from '../../components/HeroImg/HeroImg';
import Statistic from '../../components/Statistic/Statistic';
import css from '../HomePage/HomePage.module.css';
export default function HomePage() {
  return (
    <section className={css.homeContainer}>
      <div className={css.containerHero}>
        <Hero />
        <HeroImg />
      </div>
      <Statistic />
    </section>
  );
}
