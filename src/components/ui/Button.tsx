import React from 'react';
import { LucideIcon } from 'lucide-react';

// Sistema de variantes e tamanhos escalavel
export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'outline-blue' 
  | 'ghost' 
  | 'danger'
  | 'success';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  loading = false,
  className = '',
  disabled,
  ...props 
}) => {
  // Estilos base
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Variantes de cor e estilo
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white border border-transparent shadow-sm hover:shadow-lg hover:shadow-blue-600/20",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-zinc-600",
    outline: "border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/50 bg-transparent",
    "outline-blue": "border border-blue-600/50 text-blue-500 hover:bg-blue-600/10 hover:border-blue-500 hover:text-blue-400 bg-transparent",
    ghost: "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent",
    danger: "bg-red-600 hover:bg-red-700 text-white border border-transparent shadow-sm hover:shadow-lg hover:shadow-red-600/20",
    success: "bg-green-600 hover:bg-green-700 text-white border border-transparent shadow-sm hover:shadow-lg hover:shadow-green-600/20",
  };

  // Tamanhos
  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
    md: "px-4 py-2.5 text-sm rounded-lg gap-2",
    lg: "px-6 py-3 text-base rounded-lg gap-2",
    xl: "px-8 py-4 text-lg rounded-xl gap-3",
  };

  // Tamanhos de icone baseado no tamanho do botao
  const iconSizes: Record<ButtonSize, number> = {
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  };

  // Width
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Carregando...
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={iconSizes[size]} />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={iconSizes[size]} />}
        </>
      )}
    </button>
  );
};

export default Button;
