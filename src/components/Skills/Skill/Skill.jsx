import s from './Skill.module.css';

export const Skill = (props) => {
  return (
    <div className={s.skill}>
      <div className={s.icon}></div>
      <h3>{props.children}</h3>
      <span className={s.description}>
        {props.description}
      </span>
    </div>
  );
};
