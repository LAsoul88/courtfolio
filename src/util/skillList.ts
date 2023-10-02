import { JS, Python, ReactJS, MongoDB, PostgreSQL, Vue, Flask, AWS } from '../images/images';

type SVG = React.JSX.Element;

interface Skill {
  name: string;
  svg: SVG;
}

export const skillList: Skill[] = [
  { name: 'JavaScript', svg: JS({ height: '100', width: '100' })},
  { name: 'Python', svg: Python({ height: '100', width: '100' })},
  { name: 'React', svg: ReactJS({ height: '100', width: '100' })},
  { name: 'MongoDB', svg: MongoDB({ height: '100', width: '100' })},
  { name: 'PostgreSQL', svg: PostgreSQL({ height: '100', width: '100' })},
  { name: 'Vue', svg: Vue({ height: '100', width: '100' })},
  { name: 'Flask', svg: Flask({ height: '100', width: '100' })},
  { name: 'AWS', svg: AWS({ height: '100', width: '100' })},
];