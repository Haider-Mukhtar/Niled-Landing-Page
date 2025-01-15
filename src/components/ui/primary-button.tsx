import { cn } from "../../lib/utils";

interface PrimaryButtonProps {
  text: string;
  className?: string;
}

const PrimaryButton = ({ text, className }: PrimaryButtonProps) => {
  return (
    <button
      className={cn(
        "w-28 py-2 rounded-full bg-black hover:bg-black/90 transition-colors duration-200 text-white",
        className
      )}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
