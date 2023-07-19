import { Button } from "../../design/button/Button";
import { Typography } from "../../design/typography/Typography";
import { BsArrowRight } from "react-icons/bs";
import { SlackLogo } from "./icons/Slack";
import { MSLogo } from "./icons/MS";
import { FacebookLogo } from "./icons/Facebook";

export const MainText = () => {
  return (
    <div className="space-y-8">
      <Typography
        slug="h1"
        variant="heading1"
        className="font-bold text-start lg:whitespace-nowrap"
      >
        Authentic content
        <br className="hidden lg:block" />
        for{" "}
        <span className="before:block before:absolute before:-inset-1 lg:before:left-6 lg:before:w-[105%] before:bg-brand-secondary relative inline-block -z-10 mr-2 lg:mr-0">
          <span className="relative"> your social </span>
        </span>
        <br className="hidden lg:block" />
        media presence?
      </Typography>
      <Typography variant="normal" className="lg:max-w-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
        explicabo veniam ducimus quisquam iure recusandae.
      </Typography>
      <Button className="w-[160px]">Get Started</Button>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Typography variant="normal">Also trusted by</Typography>
          <BsArrowRight />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <SlackLogo />
          <MSLogo />
          <FacebookLogo />
        </div>
      </div>
    </div>
  );
};
