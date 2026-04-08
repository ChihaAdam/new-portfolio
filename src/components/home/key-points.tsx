import { keywords } from "@/constants/constants";
function KeyPoints() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-gradiant text-4xl font-bold">key points</h2>
      <div className="flex flex-wrap gap-2 justify-around ">
        {keywords.map((keyword) => (
          <h3
            aria-label={keyword.text}
            className={`${keyword.className} select-none  text-xl px-4 py-2 rounded-md font-semibold`}
            key={keyword.text}
          >
            {keyword.text}
          </h3>
        ))}
      </div>
    </div>
  );
}

export default KeyPoints;
