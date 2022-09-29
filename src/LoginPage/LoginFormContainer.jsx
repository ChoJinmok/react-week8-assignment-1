import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import {
  changeLoginField,
  requestLogin,
  deleteAccessToken,
} from './LoginSlice';

import { get } from '../utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get({
    page: 'Login',
    key: 'loginFields',
  }));

  const accessToken = useSelector(get({
    page: 'Login',
    key: 'accessToken',
  }));

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleClickLogout = () => {
    dispatch(deleteAccessToken());
  };

  return (
    <>
      {accessToken ? (
        <LogoutForm onClick={handleClickLogout} />
      ) : (
        <LoginForm
          fields={loginFields}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}
