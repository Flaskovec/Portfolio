import s from './Contacts.module.css';
import sCont from '../../common/styles/Container.module.css';
import { Form } from './Form/Form';

export const Contacts = () => {
  return (
    <div className={s.contactsBlock}>
      <div className={`${sCont.container} ${s.contactsCont}`}>
        <h2 className={s.title}>Contacts</h2>
        <div className={s.formCont}>
          <Form/>
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};
