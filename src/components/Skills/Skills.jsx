import s from './Skills.module.css';
import sCont from '../../common/styles/Container.module.css';
import { Skill } from './Skill/Skill';

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={`${sCont.container} ${s.skillsCont}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          <Skill
            description={
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptate eligendi vitae suscipit'
            }
          >
            Skill1
          </Skill>
          <Skill
            description={
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptate eligendi vitae suscipit'
            }
          >
            Skill2
          </Skill>
          <Skill
            description={
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptate eligendi vitae suscipit'
            }
          >
            Skill3
          </Skill>
        </div>
      </div>
    </div>
  );
};
