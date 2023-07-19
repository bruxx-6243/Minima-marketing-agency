import { clsx } from "clsx";

type Props = {
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6"
    | "large"
    | "medium"
    | "normal"
    | "small"
    | "extra";
  slug?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: React.ReactNode;
  className?: string;
};

export const Typography: React.FC<Props> = ({
  variant = "normal",
  slug: Component = "p",
  children,
  className,
}) => {
  let variantStyle;

  switch (variant) {
    case "heading1":
      variantStyle =
        "text-heading5 sm:heading4 md:text-heading3 lg:text-heading1";
      break;
    case "heading2":
      variantStyle = "text-heading2";
      break;
    case "heading3":
      variantStyle = "text-heading3";
      break;
    case "heading4":
      variantStyle = "text-heading4";
      break;
    case "heading5":
      variantStyle = "text-heading5";
      break;
    case "heading6":
      variantStyle = "text-heading6";
      break;
    case "large":
      variantStyle = "text-lg ";
      break;
    case "medium":
      variantStyle = "text-md ";
      break;
    case "normal":
      variantStyle = "text-base";
      break;
    case "small":
      variantStyle = "text-sm";
      break;
    case "extra":
      variantStyle = "text-xs";
      break;
  }
  return (
    <Component className={clsx([className, variantStyle])}>
      {children}
    </Component>
  );
};
