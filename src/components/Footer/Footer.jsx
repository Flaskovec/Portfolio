import s from './Footer.module.css';
import sCont from '../../common/styles/Container.module.css';
import { Item } from './Item/Item';

export const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div className={`${sCont.container} ${s.footerCont}`}>
        <h2 className={s.title}>Vasili Lusenkou</h2>
        <div className={s.footerCont}>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </div>
    </div>
  );
};
