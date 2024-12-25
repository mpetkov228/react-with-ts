interface CoursePartBase {
  name: string;
  exerciseCount: number;
};

interface CoursePartDescription extends CoursePartBase {
  description: string;
};

interface CoursePartBasic extends CoursePartDescription {
  kind: "basic";
};

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
};

interface CoursePartBackground extends CoursePartDescription {
  backgroundMaterial: string;
  kind: "background";
};

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;

interface PartProps {
  part: CoursePart;
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

const Part = (props: PartProps) => {
  switch (props.part.kind) {
    case 'basic':
      return (
        <div>
          <h3>{props.part.name} {props.part.exerciseCount}</h3>
          <p><em>{props.part.description}</em></p>
        </div>
      );
    case 'group':
      return (
        <div>
          <h3>{props.part.name} {props.part.exerciseCount}</h3>
          <p>project exercises {props.part.groupProjectCount}</p>
        </div>
      );
    case 'background':
      return (
        <div>
          <h3>{props.part.name} {props.part.exerciseCount}</h3>
          <p><em>{props.part.description}</em></p>
          <p>submit to {props.part.backgroundMaterial}</p>
        </div>
      );
    default:
      return null;
  }
};

const Header = (props: HeaderProps) => {
  return (
    <h1>{props.name}</h1>
  );
};

const Content = (props: ContentProps) => {
  return (
    <>
      {props.parts.map(part => <Part part={part} />)}
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
    {
      name: 'TypeScriot in the frontend',
      exerciseCount: 10,
      description: 'a hard part',
      kind: 'basic'
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