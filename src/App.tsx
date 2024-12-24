interface CoursePartBasic {
  name: string;
  exerciseCount: number;
  description: string;
  kind: "basic";
};

interface CoursePartGroup {
  name: string;
  exerciseCount: number;
  groupProjectCount: number;
  kind: "group";
};

interface CoursePartBackground {
  name: string;
  exerciseCount: number;
  description: string;
  backgroundMaterial: string;
  kind: "background";
};

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;

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
  const courseParts: CoursePart[] = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
      description: 'This is an awesome course part',
      kind: 'basic'
    },
    {
      name: 'Usin props to pass data',
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: 'group'
    },
    {
      name: 'Basics of type narrowing',
      exerciseCount: 7,
      description: 'How to go from unknown to string',
      kind: 'basic'
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
      description: 'Confusing description',
      backgroundMaterial: 'https://type-level-typescript.com/template-literal-types',
      kind: 'background'
    },
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