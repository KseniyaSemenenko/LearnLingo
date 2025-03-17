export const Icon = ({ name, width = 16, height = 16, className = '' }) => (
  <svg width={width} height={height} className={className}>
    <use xlinkHref={`/sprite.svg#${name}`} />
  </svg>
);
