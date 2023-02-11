import React, { useEffect } from 'react';
import Exit from '../images/exit.svg';


type SuccessProps = {
  setModalOpen: (modalOpen: boolean) => void;
}

const Success: React.FC<SuccessProps> = ({ setModalOpen }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setModalOpen(false);
    }
  };
  return (
    <div className="modal__overlay">
      <div className="modal__wrapper">
        <button className="modal__button" onClick={() => setModalOpen(false)}>
          <img className="exit" src={Exit} alt="" />
        </button>
        <div className="text__wrapper">
          <h2>Thank You</h2>
          <p>To complete registration, please check your e-mail</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
