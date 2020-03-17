import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthForm from '../../modules/AuthForm';
import Logo from '../../../../core/components/modules/Logo';
import MainWrapper from '../../../../core/components/modules/MainWrapper';
import MainHeader from '../../../../core/components/modules/MainHeader';
import MainNavigation from '../../../../core/components/modules/MainNavigation';
import MainContent from '../../../../core/components/modules/MainContent';
import { doRequestRegistration } from '../../../actions';

export const SignUp = ({ onRequestRegistration }) => {
  const onSubmit = async values => {
    const { name, email, password } = values;
    onRequestRegistration(name, email, password);
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

SignUp.propTypes = {
  onRequestRegistration: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRequestRegistration: doRequestRegistration,
};

export default connect(null, mapDispatchToProps)(SignUp);
