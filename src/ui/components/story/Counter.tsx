import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

type Props = {
  target: number;
  title: string;
  duration?: number;
};

const Counter = ({ target, title, duration = 10 }: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="w-full flex flex-col" ref={ref}>
      <CountUp
        start={target > 500 ? 500 : 0}
        end={inView ? target : 0}
        duration={duration}
        useEasing={true}
        separator=""
      >
        {({ countUpRef }) => (
          <span
            className="inline-block text-6xl font-bold text-black"
            ref={countUpRef}
          />
        )}
      </CountUp>
      <p className={"inline-block text-xs font-bold text-grey-trolley"}>
        {title}
      </p>
    </div>
  );
};

export default Counter;
