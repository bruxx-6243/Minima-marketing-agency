type Props = {
  to: string;
  children: React.ReactNode;
};

export const NavLink: React.FC<Props> = ({ children, to, ...props }) => {
  return (
    <a className={"nav-link"} href={`#${to}`} {...props}>
      {children}
    </a>
  );
};
