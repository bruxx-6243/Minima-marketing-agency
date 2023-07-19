import { Typography } from "../../design/typography/Typography";
import { Container } from "../container/Container";

export const CustomersSection = () => {
  return (
    <section>
      <Container className="space-y-8">
        <Typography
          slug="h2"
          variant="heading5"
          className="font-extrabold text-black text-center"
        >
          What our customer says
        </Typography>
      </Container>
    </section>
  );
};
