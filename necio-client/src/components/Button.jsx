import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-[#001E4B] text-white hover:bg-[#007489]',
  secondary: 'bg-zinc-50 border-[#007489] text-[#001E4B] hover:bg-[#007489]/10 hover:border-[#001E4B]',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 border-[#001E4B] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;

