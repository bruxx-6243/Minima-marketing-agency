import { MainText } from "./MainText";
import Phone from "../../../assets/images/phone.png";
import { Container } from "../container/Container";

export const HeroSection = () => {
  return (
    <section className="pb-20">
      <Container>
        <div className="mt-8 lg:mt-0 lg:min-h-screen w-full flex flex-col lg:flex-row-reverse gap-8">
          <div className="flex items-center justify-center -z-50">
            <img src={Phone} className="w-1/2 rotate-12 " alt="" />
          </div>
          <div className="w-full flex flex-col justify-center ">
            <MainText />
          </div>
        </div>
      </Container>
    </section>
  );
};
