import React from 'react';
import { connect } from 'react-redux';
import { doRequestRegistration } from 'app/auth/actions';
import { AuthActionTypes, AuthData } from 'app/auth/types';
import AuthForm from 'app/auth/components/modules/AuthForm';
import Logo from 'app/core/components/modules/Logo';
import MainWrapper from 'app/core/components/modules/MainWrapper';
import MainHeader from 'app/core/components/modules/MainHeader';
import MainNavigation from 'app/core/components/modules/MainNavigation';
import MainContent from 'app/core/components/modules/MainContent';

type SignUpProps = {
  onRequestRegistration: (name: string, email: string, password: string) => AuthActionTypes;
};

export const SignUp = ({ onRequestRegistration }: SignUpProps) => {
  const onSubmit = async (values: AuthData) => {
    const { name, email, password } = values;
    onRequestRegistration(name!, email, password);
  };

  return (
    <MainWrapper>
      <MainHeader>
        <Logo />
        <MainNavigation pathname="/sign_in" title="Sign In" />
      </MainHeader>
      <MainContent>
        <AuthForm legend="Sign up for free" action="Register" isRegistration onSubmit={onSubmit} />
      </MainContent>
    </MainWrapper>
  );
};

const mapDispatchToProps = {
  onRequestRegistration: doRequestRegistration,
};

export default connect(null, mapDispatchToProps)(SignUp);
