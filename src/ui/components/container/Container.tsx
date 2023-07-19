import { clsx } from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx(["container mx-auto px-4", className])}>
      {children}
    </div>
  );
};
