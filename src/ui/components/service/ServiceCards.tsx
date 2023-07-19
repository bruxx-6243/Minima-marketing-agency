import { FaMoneyBill } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";
import { GoMegaphone } from "react-icons/go";
import { MdFeed } from "react-icons/md";
import { IconType } from "react-icons";
import { Card } from "./Card";

export type TServices = {
  title: string;
  description: string;
  icon: IconType;
};

const services: TServices[] = [
  {
    title: "Content Production",
    description:
      "Make the appearance of a mobile application that has quality and increases user convenience.",
    icon: FaMoneyBill,
  },
  {
    title: "Performance Marketing",
    description:
      "Help create a website and redesign it so that it becomes a website that is more trendy and looks fresh.",
    icon: TfiStatsUp,
  },
  {
    title: "Influencer Marketing",
    description:
      "Create customizable illustrations with attractive designs that are made visually through high creativity.",
    icon: GoMegaphone,
  },
  {
    title: "Feed Management E-Commerce",
    description:
      "Create customizable illustrations with attractive designs that are made visually through high creativity.",
    icon: MdFeed,
  },
];

const ServiceCards = () => {
  return (
    <ul className="space-y-6">
      {services.map((service) => (
        <Card key={service.title.replace(/\s/g, "")} service={service} />
      ))}
    </ul>
  );
};

export default ServiceCards;
