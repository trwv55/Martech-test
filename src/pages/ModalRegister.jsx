import React from 'react';
import Exit from '../images/exit.svg';

const ModalRegister = () => {
  return (
    <div className="modal__wrapper">
      <img className="exit" src={Exit} alt="" />
      <form className="modal__form">
        <h2>To register, enter the mail to which our news is sent and set your password</h2>
        <input
          className="modal__email"
          type="email"
          id="email"
          name="email"
          placeholder="Example@email.com"
        />
        <input
          className="modal__password"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <button className="modal__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ModalRegister;
