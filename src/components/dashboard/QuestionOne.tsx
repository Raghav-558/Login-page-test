import React from "react";

const QuestionOne = () => {
  const Question = [
    {
      list: {
        data: [
          {
            title: "What is the capital of India?",
            options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
          },
        ],
      },
    },
  ];
  return (
    <div className="flex items-center justify-center py-20 text-center flex-col">
      <p className="text-xl font-semibold">{Question[0].list.data[0].title}</p>
      <p className="text-xl font-semibold">{Question[0].list.data[0].options[0]}</p>
    </div>
  );
};

export default QuestionOne;