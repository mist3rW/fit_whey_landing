import { cn } from '../lib/utils';
import { Button } from './ui/button';

type WheyButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  isNew?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
};
export default function WheyButton({
  children,
  disabled,
  isNew,
  isSelected,
  className,
  onClick,
}: WheyButtonProps) {
  return (
    <Button
      className={cn(
        'rounded-md px-4 py-0.5 text-gray-400 hover:bg-gray-200 bg-gray-100 relative',
        isSelected && 'border-2 border-blue-600 text-blue-600 bg-blue-50',
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {isNew && (
        <span className="bg-red-500 px-2 text-white  mr-2 text-[10px]">
          New
        </span>
      )}
      {children}
    </Button>
  );
}
