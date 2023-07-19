import { AiOutlineInstagram } from "react-icons/ai";
import { PiTwitterLogo } from "react-icons/pi";
import { FiFacebook } from "react-icons/fi";

import { Typography } from "../../../design/typography/Typography";
import { IconType } from "react-icons";

type IM = {
  href: string;
  ico: IconType;
};

const icons: IM[] = [
  {
    href: "https://www.instagram.com/brx_6243/",
    ico: AiOutlineInstagram,
  },
  {
    href: "https://twitter.com/bryan_6243",
    ico: PiTwitterLogo,
  },
  {
    href: "https://www.facebook.com/bryan6243/",
    ico: FiFacebook,
  },
];

export const BlocThree = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <Typography variant="heading6">Social Media</Typography>
        <ul className="flex items-center justify-center gap-x-4">
          {icons.map((icon, index) => (
            <li
              key={index * icon.href.length}
              className="text-grey-trolley hover:text-grey-christmas duration-200"
            >
              <a href={icon.href} target="_blank">
                <icon.ico size={26} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
