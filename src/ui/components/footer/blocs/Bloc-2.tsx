import { IconType } from "react-icons";
import { clsx } from "clsx";

import { Typography } from "../../../design/typography/Typography";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

type IC = {
  title: string;
  href: string;
  ico: IconType;
};

const coordinates: IC[] = [
  {
    title: "contact@minima.com",
    href: "mailto:blondeau.nbif@gmail.com",
    ico: AiOutlineMail,
  },
  {
    title: "+7 999 999 99 99",
    href: "tel:000000000",
    ico: BsTelephone,
  },
];

export const BlocTwo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Typography variant="heading6">Get in Touch</Typography>
      <ul>
        {coordinates.map((coord, i) => (
          <li key={coord.title}>
            <a
              href={coord.href}
              className={clsx([
                "flex items-center gap-x-4 text-grey-trolley hover:text-grey-christmas duration-150",
                i === 1 && "mt-4",
              ])}
            >
              <coord.ico />
              {coord.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
