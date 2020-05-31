import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  required,
  mustBeFullName,
  mustBeEmail,
  composeValidators,
} from 'utils/validators';
import { AuthData } from 'app/auth/types';
import MainForm from 'app/core/components/modules/MainForm';
import FormGroup from 'app/core/components/modules/FormGroup';
import ButtonSubmit from 'app/core/components/modules/ButtonSubmit';

type AuthFormProps = {
  legend: string;
  action: string;
  isRegistration: boolean;
  onSubmit: (values: AuthData) => Promise<void>;
} & typeof defaultProps;

const defaultProps = {
  isRegistration: false,
};

const AuthForm = ({ legend, action, isRegistration, onSubmit }: AuthFormProps) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <MainForm legend={legend} onSubmit={handleSubmit}>
        {isRegistration && (
          <Field
            name="name"
            validate={composeValidators(required, mustBeFullName)}
            render={({ input, meta }) => (
              <FormGroup input={input} meta={meta} label="Name" type="text" />
            )}
          />
        )}
        <Field
          name="email"
          validate={composeValidators(required, mustBeEmail)}
          render={({ input, meta }) => (
            <FormGroup input={input} meta={meta} label="Email" type="email" />
          )}
        />
        <Field
          name="password"
          validate={required}
          render={({ input, meta }) => (
            <FormGroup input={input} meta={meta} label="Password" type="password" />
          )}
        />
        <div>
          <ButtonSubmit>{action}</ButtonSubmit>
        </div>
      </MainForm>
    )}
  />
);

AuthForm.defaultProps = defaultProps;

export default AuthForm;
