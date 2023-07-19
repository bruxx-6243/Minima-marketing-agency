import type { TServices } from "./ServiceCards";
import { Typography } from "../../design/typography/Typography";

export const Card = ({ service }: { service: TServices }) => {
  return (
    <li key={service.title}>
      <article className="flex flex-wrap items-center gap-4">
        <service.icon
          size={40}
          className="px-2 py-1 bg-grey-christmas rounded-md shrink-0"
        />
        <div className="max-w-md">
          <Typography variant="medium" className="font-bold">
            {service.title}
          </Typography>
          <Typography variant="extra" className="text-grey-oak">
            {service.description}
          </Typography>
        </div>
      </article>
    </li>
  );
};
