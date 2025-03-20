import Button from '../Button/Button';
import css from './Hero.module.css';
export default function Hero() {
  return (
    <>
      <div className={css.heroTextContainer}>
        <h1 className={css.heroTitle}>
          Unlock your potential with the best{' '}
          <span className={css.heroTextSpan}>language</span> tutors
        </h1>
        <p className={css.heroSubtitle}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <Button text="Get started" type="button" variant="started" />
      </div>
    </>
  );
}
