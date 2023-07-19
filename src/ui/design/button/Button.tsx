import { clsx } from "clsx";

type Props = {
  variant?: "primary" | "outline" | "secondary";
  icon?: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({
  variant = "primary",
  icon,
  type = "button",
  className,
  children,
}) => {
  let variantStyles;

  switch (variant) {
    case "primary":
      variantStyles = "bg-black text-black-white hover:bg-black-earie-black ";
      break;
    case "outline":
      variantStyles =
        "bg-gray-100/50 text-black border border-black cursor-not-allowed";
      break;
    case "secondary":
      variantStyles =
        "bg-brand-secondary text-black hover:bg-brand-secondary/70";
      break;
  }

  return (
    <button
      type={type}
      className={clsx([
        "flex items-center justify-center  rounded-lg duration-200 font-semibold",
        icon ? "w-10 h-10 text-2xl" : "px-8 py-2",
        variantStyles,
        className,
      ])}
    >
      {icon ? icon : <>{children}</>}
    </button>
  );
};
