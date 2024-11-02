import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import now_off from '../../assets/img/section/menu/now_off.svg';
import now_on from '../../assets/img/section/menu/now_on.svg';
import home_off from '../../assets/img/section/menu/home_off.svg';
import home_on from '../../assets/img/section/menu/home_on.svg';
import my_off from '../../assets/img/section/menu/my_off.svg';
import my_on from '../../assets/img/section/menu/my_on.svg';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getClassName = (path) => {
    return location.pathname === path ? 'on' : '';
  };

  const getImage = (path, onImage, offImage) => {
    return location.pathname === path ? onImage : offImage;
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='menu'>
      <div className="wrap">
        <div className={`now ${getClassName('/now')}`} onClick={() => handleNavigation('/now')}>
          <img src={getImage('/now', now_on, now_off)} alt="Now" />
        </div>
        <div className={`home ${getClassName('/')}`} onClick={() => handleNavigation('/')}>
          <img src={getImage('/', home_on, home_off)} alt="Home" />
        </div>
        <div className={`my ${getClassName('/my')}`} onClick={() => handleNavigation('/my')}>
          <img src={getImage('/my', my_on, my_off)} alt="My" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
