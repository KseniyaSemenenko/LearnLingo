import css from './Statistic.module.css';

export default function Statistic() {
  return (
    <ul className={css.statisticContainer}>
      <li className={css.statisticItem}>
        <p className={css.statisticNumber}>32,000 +</p>
        <p className={css.statisticText}>Experienced tutors</p>
      </li>
      <li className={css.statisticItem}>
        <p className={css.statisticNumber}>300,000 +</p>
        <p className={css.statisticText}>5-star tutor reviews</p>
      </li>
      <li className={css.statisticItem}>
        <p className={css.statisticNumber}>120 +</p>
        <p className={css.statisticText}>Subjects taught</p>
      </li>
      <li className={css.statisticItem}>
        <p className={css.statisticNumber}>200 +</p>
        <p className={css.statisticText}>Tutor nationalities</p>
      </li>
    </ul>
  );
}
