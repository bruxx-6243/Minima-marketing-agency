import { Typography } from "../../design/typography/Typography";
type Props = {
  children: string;
};
export const SubTitle = ({ children }: Props) => {
  return (
    <Typography
      slug="h2"
      variant="heading5"
      className="inline-block relative font-extrabold text-black before:block before:absolute before:w-[70px] before:bg-grey-christmas before:h-[2px] before:-bottom-2"
    >
      {children}
    </Typography>
  );
};
