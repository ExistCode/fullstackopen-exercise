import Parts from "./Parts";
const Content = ({ parts }) => {
  console.log(parts);
  {
    return parts.map((part, i) => {
      console.log(part);
      return (
        <div key={i}>
          <Parts part={part.name} exercises={part.exercises} />
        </div>
      );
    });
  }
};

export default Content;
