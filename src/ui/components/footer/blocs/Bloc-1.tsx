import { Logo } from "../../navigation/logo/Logo";
import { Typography } from "../../../design/typography/Typography";

export const BlocOne = () => {
  return (
    <>
      <div>
        <a href="#">
          <Logo bg="bg-black-white" clr="text-black" />
        </a>
        <Typography
          slug="p"
          variant="extra"
          className="text-grey-christmas md:max-w-xs mt-4"
        >
          Minima is a boutique social media agency offers full-service media
          solutions.
        </Typography>
      </div>
    </>
  );
};
