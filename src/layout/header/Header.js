import React from 'react';
import './header.css';
import { useAuth } from '../../config/useAuth';

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="header">
      <div className="header__body">
        <div className="header__brand">Talky</div>
        <div className="header__user">
          {user && (
            <>
              <button onClick={signOut} className="header__sign-out">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F25%2F25376.png&f=1&nofb=1"
                  alt="sign out"
                  style={{ width: '30px' }}
                />
              </button>
              <img src={user.photoURL} alt="user" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
