import css from './Button.module.css';

export default function Button({ text, variant, type, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${css.btn} ${css[variant]}`}
    >
      {text}
    </button>
  );
}
