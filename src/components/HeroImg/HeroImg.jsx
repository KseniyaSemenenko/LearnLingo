import css from './HeroImg.module.css';

export default function HeroImg() {
  return (
    <>
      <div className={css.heroImgContainer}>
        <img src="/img/girl.png" alt="girl" className={css.heroGirl} />
        <img src="/img/iMac.png" alt="iMac" className={css.heroMac} />
      </div>
    </>
  );
}
