import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthForm from '../../modules/AuthForm';
import Logo from '../../../../core/components/modules/Logo';
import MainWrapper from '../../../../core/components/modules/MainWrapper';
import MainHeader from '../../../../core/components/modules/MainHeader';
import MainNavigation from '../../../../core/components/modules/MainNavigation';
import MainContent from '../../../../core/components/modules/MainContent';
import { doRequestLogin } from '../../../actions';

export const SignIn = ({ onRequestLogin }) => {
  const onSubmit = async values => {
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

SignIn.propTypes = {
  onRequestLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRequestLogin: doRequestLogin,
};

export default connect(null, mapDispatchToProps)(SignIn);
