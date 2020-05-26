import React from 'react';
import { connect } from 'react-redux';
import AuthForm from '../../modules/AuthForm';
import Logo from '../../../../core/components/modules/Logo';
import MainWrapper from '../../../../core/components/modules/MainWrapper';
import MainHeader from '../../../../core/components/modules/MainHeader';
import MainNavigation from '../../../../core/components/modules/MainNavigation';
import MainContent from '../../../../core/components/modules/MainContent';
import { doRequestLogin } from '../../../actions';
import { AuthActionTypes, AuthData } from '../../../types';

type SignInProps = {
  onRequestLogin: (email: string, password: string) => AuthActionTypes;
};

export const SignIn = ({ onRequestLogin }: SignInProps) => {
  const onSubmit = async (values: AuthData) => {
    const { email, password } = values;
    onRequestLogin(email, password);
  };

  return (
    <MainWrapper>
      <MainHeader>
        <Logo />
        <MainNavigation pathname="/sign_up" title="Sign Up" />
      </MainHeader>
      <MainContent>
        <AuthForm legend="Login to your account" action="Login" onSubmit={onSubmit} />
      </MainContent>
    </MainWrapper>
  );
};

const mapDispatchToProps = {
  onRequestLogin: doRequestLogin,
};

export default connect(null, mapDispatchToProps)(SignIn);
