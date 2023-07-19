import { useInView } from "react-intersection-observer";

// Components
import { Typography } from "../../design/typography/Typography";
import { Container } from "../container/Container";
import { SubTitle } from "../container/SubTitle";
import { Skeleton } from "./Skeleton";
import Image from "../../../assets/images/about-baner.avif";

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section id="about-us" className="pb-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex items-center  justify-center md:justify-start">
          <div className="about-section" ref={ref}>
            {!inView ? (
              <Skeleton />
            ) : (
              <img
                src={Image}
                alt="Agency Service"
                className="about-image w-full h-full relative object-cover z-10"
              />
            )}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center space-y-8">
          <SubTitle>About us</SubTitle>

          <Typography variant="medium">
            Minima is a template social media agency that offers full-service
            social media solutions.
          </Typography>

          <Typography variant="medium">
            With our co-founder Fariol Blondeau we have one of the biggest
            German influencers in our team which also gives our clients a direct
            access to the influencer world.
          </Typography>

          <Typography variant="medium">
            Our target group is primarily established brands that know us as
            modern premium agency.
          </Typography>
        </div>
      </Container>
    </section>
  );
};
