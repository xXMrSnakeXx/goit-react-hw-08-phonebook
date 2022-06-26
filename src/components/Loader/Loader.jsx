import { Rings } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Rings height="450" width="450" color="#0031f9" ariaLabel="loading" />
    </div>
  );
};
export default Loader;
