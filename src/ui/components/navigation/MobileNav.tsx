import links from "./links";
import { Button } from "../../design/button/Button";

type Props = {
  toggleMenu: () => void;
};

export const MobileNav = ({ toggleMenu }: Props) => {
  return (
    <div className="mobile-nav absolute right-2 top-16 z-[1000]  bg-black-white  text-black p-4 space-y-4 shadow-lg">
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li
            onClick={toggleMenu}
            key={(Math.random() * index).toString()}
            className="text-sm"
          >
            <a href={`#${link.href}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div onClick={toggleMenu}>
        <Button variant="primary">Contact</Button>
      </div>
    </div>
  );
};
