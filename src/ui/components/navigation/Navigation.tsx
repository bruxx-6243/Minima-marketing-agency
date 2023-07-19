import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { clsx } from "clsx";

// Import components
import { Container } from "../container/Container";
import { Button } from "../../design/button/Button";
import { Logo } from "./logo/Logo";
import links from "./links";
import { NavLink } from "./customLink/NavLink";
import { MobileNav } from "./MobileNav";
import { useVisibility } from "../../../hooks/useVisibility";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isVisible, handleScroll } = useVisibility();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <header
        className={clsx([
          "py-4 sticky top-0",
          isVisible && "active-header",
          "relative z-[1000]",
        ])}
      >
        <Container className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href="#" className="inline-block">
              <Logo />
            </a>

            {/* Desktop navigation */}
            <ul className="hidden lg:flex space-x-4">
              {links.map((link, index) => (
                <li key={index * link.title.length}>
                  <NavLink to={link.href}>{link.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <Button variant="primary">Contact</Button>
          </div>

          {/* Icon Menu */}
          <button
            className={clsx([
              "lg:hidden text-xl text-black-white bg-black px-2 py-1 rounded-sm",
            ])}
            onClick={toggleMenu}
          >
            {isOpen ? <MdClear /> : <AiOutlineMenu />}
          </button>

          {/* Mobile Navigation */}
          {isOpen && <MobileNav toggleMenu={toggleMenu} />}
        </Container>
      </header>
    </>
  );
};
