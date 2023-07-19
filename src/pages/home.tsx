import { AboutSection } from "../ui/components/about/About";
import { CustomersSection } from "../ui/components/customers/Customers";
import { HeroSection } from "../ui/components/hero/Hero";
import { ServiceSection } from "../ui/components/service/Service";
import { StorySection } from "../ui/components/story/Story";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <StorySection />
      <CustomersSection />
    </>
  );
};

export default Home;
