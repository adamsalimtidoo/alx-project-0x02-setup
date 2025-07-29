// define interfaces

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  className?: string;
}
