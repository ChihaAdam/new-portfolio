import React from "react";

type keywordsType = {
  text: string;
  className: string;
};
const keywords: keywordsType[] = [
  { text: "clean code", className: "text-teal-600 bg-teal-600/20" },
  { text: "performance", className: "text-purple-600 bg-purple-600/20" },
  { text: "user experience", className: "text-blue-600 bg-blue-600/20" },
  { text: "problem solving", className: "text-green-600 bg-green-600/20" },
];
function KeyPoints() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-gradiant text-4xl font-bold">key points</h3>
      <div className="flex flex-wrap gap-2 justify-around ">
        {keywords.map((keyword: keywordsType) => (
          <h4
            className={`${keyword.className} select-none text-xl px-4 py-2 rounded-md font-semibold`}
            key={keyword.text}
          >
            {keyword.text}
          </h4>
        ))}
      </div>
    </div>
  );
}

export default KeyPoints;
