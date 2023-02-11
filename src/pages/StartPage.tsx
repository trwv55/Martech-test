import React from 'react';
import Group from '../images/Group.png';
import ModalRegister from '../components/ModalRegister';

type StartPageProps = {
  modalOpen: boolean
  setModalOpen: (modalOpen: boolean) => void;
}

const StartPage: React.FC<StartPageProps> = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <div className="container">
        <div className="start__wrapper">
          <div className="photos__wrapper">
            <img className="group" src={Group} alt="" />
          </div>
          <div className="text__wrapper">
            <h1>How to Participate</h1>
            <ul className="text__list">
              <li className="text__list-item">
                <span className="number">1.</span>
                <span className="text">Subscribe to our News</span>
              </li>
              <li className="text__list-item text__list-item-button">
                <span className="number">2.</span>

                <button onClick={() => setModalOpen(true)} className="button">
                  Sign Up
                </button>
              </li>
              <li className="text__list-item">
                <span className="number">3.</span>
                <span className="text">Check your email inbox</span>
              </li>
              <li className="text__list-item">
                <span className="number">4.</span>
                <span className="text">Wait till September 22</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {modalOpen && <ModalRegister setModalOpen={setModalOpen} />}
    </>
  );
};

export default StartPage;
