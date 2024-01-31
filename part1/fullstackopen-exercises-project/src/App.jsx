const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Content = (props) => {
    return (
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>
    );
  };

  const Total = () => {
    return (
      <p>
        Number of Exercises{" "}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts[0]} />
      <Content parts={parts[1]} />
      <Content parts={parts[2]} />
      <Total />
    </div>
  );
};

export default App;
