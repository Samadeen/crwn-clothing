import SignInForm from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './Authentication.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      {/* <h1>Sign In Page</h1> */}
      <SignInForm />
      <SignUp />
    </div>
  );
};

export default Authentication;
