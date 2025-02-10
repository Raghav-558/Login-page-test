
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

const Dummy = () => {
  return (
    <div>
      <p>
        {Question[0].list.data[0].title} {Question[0].list.data[0].options[0]}
      </p>
    </div>
  );
};

export default Dummy;
