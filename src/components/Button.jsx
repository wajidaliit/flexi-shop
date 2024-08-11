import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-full focus:outline-none transition-colors duration-300';

  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'border hover:bg-blue-100',
    // Add more variants as needed
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'outline']),
  className: PropTypes.string,
};

export default Button;
