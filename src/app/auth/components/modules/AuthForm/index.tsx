import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { ErrorMessages } from 'enums';
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

const schema = yup.object().shape({
  firstName: yup.string().when('isRegistration', {
    is: 'YES',
    then: yup.string().required(ErrorMessages.REQUIRED),
  }),
  lastName: yup.string().when('isRegistration', {
    is: 'YES',
    then: yup.string().required(ErrorMessages.REQUIRED),
  }),
  email: yup.string().email(ErrorMessages.EMAIL).required(ErrorMessages.REQUIRED),
  password: yup.string().required(ErrorMessages.REQUIRED),
});

const AuthForm = ({ legend, action, isRegistration, onSubmit }: AuthFormProps) => {
  const { register, handleSubmit, errors } = useForm<AuthData>({
    resolver: yupResolver(schema),
  });

  return (
    <MainForm legend={legend} onSubmit={handleSubmit(onSubmit)}>
      <input
        name="isRegistration"
        type="hidden"
        defaultValue={isRegistration ? 'YES' : 'NO'}
        ref={register}
      />
      {isRegistration && (
        <>
          <FormGroup
            name="firstName"
            label="First Name"
            type="text"
            inputRef={register}
            error={errors.firstName?.message}
          />
          <FormGroup
            name="lastName"
            label="Last Name"
            type="text"
            inputRef={register}
            error={errors.lastName?.message}
          />
        </>
      )}
      <FormGroup
        name="email"
        label="E-mail"
        type="email"
        inputRef={register}
        error={errors.email?.message}
      />
      <FormGroup
        name="password"
        label="Password"
        type="password"
        inputRef={register}
        error={errors.password?.message}
      />
      <div>
        <ButtonSubmit>{action}</ButtonSubmit>
      </div>
    </MainForm>
  );
};

AuthForm.defaultProps = defaultProps;

export default AuthForm;
