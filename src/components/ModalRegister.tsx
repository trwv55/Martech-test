import React, { useEffect, useState } from 'react';
import Exit from '../images/exit.svg';
import axios from 'axios';
import Success from './Success';

type ModalRegisterProps = {
  setModalOpen: (modalOpen: boolean) => void;
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ setModalOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const emailValidation = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, );

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setModalOpen(false);
    }
  };

  const handleSubmit = async function (event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (emailValidation) {
      setErrorEmail('Please enter a valid e-mail');
    } else {
      setErrorEmail('');
    }
    if (password.length < 8) {
      setErrorPassword('Password must be at least 8 characters long');
    } else {
      setErrorPassword('');
    }


    if (!errorEmail && !errorPassword) {
      await axios
        .put('https://api.dating.com/identity', {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          const token = response.headers["x-token"];
          localStorage.token = token;
          setIsAuth(true);
          window.location.href = `https://www.dating.com/people/#token=${localStorage.token}`;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  if (isAuth) {
    return <Success setModalOpen={setModalOpen} />;
  }

  return (
    <>
      <div className="modal__layout">
        <div className="wrapper">
          <button className="modal__button" onClick={() => setModalOpen(false)}>
            <img className="exit" src={Exit} alt="" />
          </button>
          <form className="modal__form" onSubmit={handleSubmit}>
            <h2>To register, enter the mail to which our news is sent and set your password</h2>
            <div className="mail__wrapper">
            <input
              className={`mail__wrapper-email ${Boolean(errorEmail) ? 'mail__wrapper-email-invalid' : ''}`}
              type="email"
              id="email"
              name="email"
              placeholder="Example@email.com"
              onChange={(event) => setEmail(event.target.value)}
            />
            {errorEmail && <p className="error error-email">{errorEmail}</p>}
              </div>
            <div className="pas__wrapper">
            <input
              className={`pas__wrapper-password ${
                Boolean(errorPassword) ? 'pas__wrapper-password-invalid' : ''
              }`}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            {errorPassword && <p className="error error-password">{errorPassword}</p>}
            </div>
            <button className="modal__button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalRegister;
