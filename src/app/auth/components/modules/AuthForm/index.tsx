import React from 'react';
import { Form, Field } from 'react-final-form';
import MainForm from '../../../../core/components/modules/MainForm';
import FormGroup from '../../../../core/components/modules/FormGroup';
import ButtonSubmit from '../../../../core/components/modules/ButtonSubmit';
import {
  required,
  mustBeFullName,
  mustBeEmail,
  composeValidators,
} from '../../../../../utils/validators';

type AuthFormProps = {
  legend: string;
  action: string;
  isRegistration?: boolean;
  onSubmit: (values: { name?: string, email: string; password: string; }) => Promise<void>;
};

const AuthForm = ({ legend, action, isRegistration = false, onSubmit }: AuthFormProps) => (
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

export default AuthForm;
