import { Typography } from "../../design/typography/Typography";
import { Container } from "../container/Container";
import { SubTitle } from "../container/SubTitle";
import { GridServices } from "./Grid";
import ServiceCards from "./ServiceCards";

export const ServiceSection = () => {
  return (
    <section className="pb-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <SubTitle>Service we provide</SubTitle>
          <Typography variant="medium">
            We will help a client's problems to provide their social media
            performance.
          </Typography>
          <ServiceCards />
        </div>
        <GridServices />
      </Container>
    </section>
  );
};
