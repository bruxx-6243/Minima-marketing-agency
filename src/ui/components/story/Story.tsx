import { useInView } from "react-intersection-observer";

import { Typography } from "../../design/typography/Typography";
import { Container } from "../container/Container";
import { SubTitle } from "../container/SubTitle";
import { StoryCount } from "./StoryCount";

import StoryImage from "../../../assets/images/story-1.avif";
import { Skeleton } from "../about/Skeleton";

export const StorySection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="py-36">
      <Container className="flex flex-col md:flex-row-reverse gap-8">
        <div className="flex flex-col justify-center space-y-8">
          <SubTitle>Our success story</SubTitle>
          <Typography variant="medium">
            Develop a website by finding a product identity that has value and
            branding to become a characteristic of a company
          </Typography>
          <StoryCount />
        </div>
        <div className="w-full" ref={ref}>
          {!inView ? (
            <Skeleton />
          ) : (
            <img
              src={StoryImage}
              alt="Our story of success"
              className="about-image w-11/12 aspect-auto h-[300px] object-cover"
            />
          )}
        </div>
      </Container>
    </section>
  );
};
