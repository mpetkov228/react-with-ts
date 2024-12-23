type CoursePart = {
  name: string,
  exerciseCount: number
};

interface HeaderProps {
  name: string;
};

interface ContentProps {
  parts: CoursePart[]
};

interface TotalProps {
  total: number;
};

const Header = (props: HeaderProps) => {
  return (
    <h1>{props.name}</h1>
  );
};

const Content = (props: ContentProps) => {
  return (
    <>
      <p>{props.parts[0].name} {props.parts[0].exerciseCount}</p>
      <p>{props.parts[1].name} {props.parts[1].exerciseCount}</p>
      <p>{props.parts[2].name} {props.parts[2].exerciseCount}</p>
    </>
  );
};

const Total = (props: TotalProps) => {
  return (
    <p>
      Number of exercises {props.total}
    </p>
  );
};

const App = () => {
  const courseName = 'Half Stack application development';
  const courseParts = [
    {
      name: 'Fundamentals',
      exerciseCount: 10
    },
    {
      name: 'Usin props to pass data',
      exerciseCount: 7
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;