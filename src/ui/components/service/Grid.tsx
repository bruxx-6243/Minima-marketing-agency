import clsx from "clsx";
import { useInView } from "react-intersection-observer";

import service2 from "../../../assets/images/service-2.avif";
import service3 from "../../../assets/images/service-3.avif";
import service4 from "../../../assets/images/service-4.avif";
import service5 from "../../../assets/images/service-5.avif";
import { Skeleton } from "../about/Skeleton";

const servicesPics = [service4, service2, service5, service3];

export const GridServices = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {servicesPics.map((service, index) => (
        <div
          ref={ref}
          key={index}
          className={clsx([
            index === servicesPics.length - 1 && "col-span-2",
            index === 0 && "col-span-2 ",
            index === 1 && "flex items-end",
          ])}
        >
          {!inView ? (
            <Skeleton />
          ) : (
            <img
              src={service}
              alt="service"
              className={clsx([
                "about-image w-full h-full object-cover",
                index === 1 && "lg:h-[85%]",
                index === 2 && "lg:h-[85%]",
              ])}
            />
          )}
        </div>
      ))}
      {/* <div className="col-span-2 ">
        <img
          src={service4}
          alt="service"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-end">
        <img
          src={service2}
          alt="service"
          className="w-full h-[85%] object-cover"
        />
      </div>
      <div className="">
        <img
          src={service3}
          alt="service"
          className="w-full h-[85%] object-cover"
        />
      </div>
      <div className="col-span-2 ">
        <img
          src={service5}
          alt="service"
          className="w-full h-full object-cover"
        />
      </div> */}
    </div>
  );
};
