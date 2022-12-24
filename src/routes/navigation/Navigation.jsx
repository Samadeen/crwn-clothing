import { Link, NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './Navigation.scss';

const Navigation = () => {
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
          <NavLink className='nav-link' to='/sign-in'>
            SIGN IN
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
