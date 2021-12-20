import { useState, VFC } from 'react';

import s from './Password.module.scss';

import { password } from 'config';
import { useNavigate } from 'react-router-dom';

const Password: VFC = () => {
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (password === pass) {
      navigate('mint');
    }
  };

  return (
    <section className={s.pass}>
      <div className={s.block}>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
          type="text"
        />
        <button onClick={handleButtonClick} type="button">
          Enter
        </button>
      </div>
    </section>
  );
};

export default Password;
