import { Link, NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './Navigation.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/Firebase/Firebase';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo' />
        </Link>
        <nav className='nav-links-container'>
          <NavLink to='/shop' className='nav-link'>
            SHOP
          </NavLink>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <NavLink className='nav-link' to='/auth'>
              SIGN IN
            </NavLink>
          )}
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
