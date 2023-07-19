import { Logo } from "../../navigation/logo/Logo";
import { Typography } from "../../../design/typography/Typography";
import { Link } from "react-router-dom";

export const BlocOne = () => {
  return (
    <>
      <div>
        <Link to="/">
          <Logo bg="bg-black-white" clr="text-black" />
        </Link>
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
