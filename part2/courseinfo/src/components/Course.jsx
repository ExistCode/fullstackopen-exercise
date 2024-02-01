import Header from "./Header";
import Total from "./Total";
import Part from "./Parts";
import Content from "./Content";

const Course = ({ courses }) => {
  return courses.map((course) => {
    console.log(course);
    console.log(course.name);
    console.log(course.id);
    console.log(course.parts);

    return (
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    );
  });
};

export default Course;

// <div>
//   <Header course={course} />
//   <Content parts={parts} />
//   <Total
//     sum={parts[0].exercises + parts[1].exercises + parts[2].exercises}
//   />
// </div>
