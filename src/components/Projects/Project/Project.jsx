import s from './Project.module.css';

export const Project = (props) => {
  return (
    <div className={s.Project}>
      <div className={s.icon}></div>
      <h3>{props.children}</h3>
      <span className={s.description}>
        {props.description}
      </span>
    </div>
  );
};
