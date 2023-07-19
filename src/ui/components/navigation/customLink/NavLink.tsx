import { Link, useMatch } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const NavLink: React.FC<Props> = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link className={match ? "active-link" : "nav-link"} to={to} {...props}>
      {children}
    </Link>
  );
};
