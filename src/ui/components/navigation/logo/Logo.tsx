import { clsx } from "clsx";

type Props = {
  bg?: string;
  clr?: string;
};

export const Logo = ({ bg = "bg-black", clr = "text-black-white" }: Props) => {
  return (
    <div
      className={clsx([
        "w-10 h-10 flex items-center justify-center rounded-full uppercase font-bold select-none",
        bg,
        clr,
      ])}
    >
      m
    </div>
  );
};
