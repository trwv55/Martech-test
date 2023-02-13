import React, { useEffect } from 'react';
import ModalRegister from '../components/ModalRegister';


type StartPageProps = {
  modalOpen: boolean
  setModalOpen: (modalOpen: boolean) => void;
}

const StartPage: React.FC<StartPageProps> = ({ modalOpen, setModalOpen }) => {
  useEffect(() => {
    if(localStorage.token) {
      window.location.href = `https://www.dating.com/people/#token=${localStorage.token}`
    }
  }, [])
  
  return (
    <>
      <div className="container">
        <div className="start__wrapper">
          <div className="photos__wrapper">
            <img className="group" src="https://res.cloudinary.com/dm67wifng/image/upload/q_auto:eco/v1676293906/Group_nw45gt.png" alt="" /> 
          </div>
          <div className="text__wrapper">
            <h1>How to Participate</h1>
            <div className="text__list">
              <div className="text__list-item">
                <span className="number">1.</span>
                <p className="text">Subscribe to our News</p>
              </div>
              <div className="text__list-item text__list-item-button">
                <span className="number">2.</span>
                <button onClick={() => setModalOpen(true)} className="button">
                  Sign Up
                </button>
              </div>
              <div className="text__list-item">
                <span className="number">3.</span>
                <p className="text">Check your email inbox</p>
              </div>
              <div className="text__list-item">
                <span className="number">4.</span>
                <p className="text">Wait till September 22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <ModalRegister setModalOpen={setModalOpen} />}
    </>
  );
};

export default StartPage;
