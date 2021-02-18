import s from './Projects.module.css';
import sCont from '../../common/styles/Container.module.css';
import { Project } from './Project/Project';

export const Projects = () => {
  return (
    <div className={s.projectsBlock}>
      <div className={`${sCont.container} ${s.projectsCont}`}>
        <h2 className={s.title}>Projects</h2>
        <div className={s.projects}>
          <Project description={'Project discription'}>Project1</Project>
          <Project description={'Project discription'}>Project2</Project>
        </div>
      </div>
    </div>
  );
};
