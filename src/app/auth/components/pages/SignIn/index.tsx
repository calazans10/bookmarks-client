import React from 'react';
import { connect } from 'react-redux';
import { doRequestLogin } from 'app/auth/actions';
import { AuthActionTypes, AuthData } from 'app/auth/types';
import AuthForm from 'app/auth/components/modules/AuthForm';
import Logo from 'app/core/components/modules/Logo';
import MainWrapper from 'app/core/components/modules/MainWrapper';
import MainHeader from 'app/core/components/modules/MainHeader';
import MainNavigation from 'app/core/components/modules/MainNavigation';
import MainContent from 'app/core/components/modules/MainContent';

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
