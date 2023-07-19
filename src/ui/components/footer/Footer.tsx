import { Container } from "../container/Container";
import { BlocFour, BlocOne, BlocThree, BlocTwo } from "./blocs";

const Footer = () => {
  return (
    <footer className="bg-black pt-12 pb-20">
      <Container className="text-black-white">
        <div className="flex flex-wrap justify-between gap-12">
          <BlocOne />
          <BlocTwo />
          <BlocThree />
          <BlocFour />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
