import s from './Main.module.css';
import sCont from '../../common/styles/Container.module.css'

export const Main = () => {
  return (
    <div className={s.main}>
      <div className={sCont.container}>
        <div className={s.text}>
          <span>Hello!</span>
          <h3>i'm Valisi Lysenkou</h3>
          <p>Front-ent developer</p>
        </div>
        <div className={s.photo}></div>
      </div>
    </div>
  );
};
