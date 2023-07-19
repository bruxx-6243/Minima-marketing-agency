import Counter from "./Counter";

const counts = [
  {
    number: 1000,
    title: "Project Complete",
  },
  {
    number: 235,
    title: "Our team",
  },
  {
    number: 1100,
    title: "Our client",
  },
];

export const StoryCount = () => {
  return (
    <ul className="flex items-center flex-wrap justify-between gap-4">
      {counts.map((count) => (
        <li key={count.title}>
          <Counter target={count.number} title={count.title} />
        </li>
      ))}
    </ul>
  );
};
