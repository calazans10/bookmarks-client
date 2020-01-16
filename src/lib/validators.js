// eslint-disable-next-line no-useless-escape
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const NUMERIC_REGEX = /^[0-9]+$/;
const FULLNAME_REGEX = /^(.+?) ([^\s,]+)(,? (?:[JS]r\.?|III?|IV))?$/i;
const URL_REGEX = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;

const required = value => (value ? undefined : 'É necessário preencher este campo.');

const mustChooseOne = value =>
  typeof value === 'undefined' || value.length === 0
    ? 'É necessário escolher ao menos uma opção.'
    : undefined;

const mustBeEmail = value => {
  if (!value || EMAIL_REGEX.test(value)) {
    return undefined;
  }

  return 'O e-mail informado não é válido.';
};

const mustBePassword = value => {
  if (!value || PASSWORD_REGEX.test(value)) {
    return undefined;
  }

  return 'Senha inválida. Use oito ou mais caracteres contendo no mínimo, uma letra maiúscula, uma letra minúscula e um número.';
};

const mustBeNumeric = value => {
  if (!value || NUMERIC_REGEX.test(value.replace(/\W/g, ''))) {
    return undefined;
  }

  return 'Este campo só aceita números.';
};

const mustBeUrl = value => {
  if (!value || URL_REGEX.test(value)) {
    return undefined;
  }

  return 'Digite um endereço válido.';
};

const mustBeFullName = value => {
  if (!value || FULLNAME_REGEX.test(value)) {
    return undefined;
  }

  return 'Digite o nome completo.';
};

const minLength = min => value => {
  if (!value || value.replace(/\W/g, '').length >= min) {
    return undefined;
  }

  return `Este campo requer no mínimo ${min} ${min === 1 ? 'caractere' : 'caracteres'}.`;
};

const maxLength = max => value => {
  if (!value || value.replace(/\W/g, '').length <= max) {
    return undefined;
  }

  return `Este campo requer no máximo ${max} ${max === 1 ? 'caractere' : 'caracteres'}.`;
};

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export {
  required,
  mustChooseOne,
  mustBeEmail,
  mustBePassword,
  mustBeNumeric,
  mustBeUrl,
  mustBeFullName,
  minLength,
  maxLength,
  composeValidators,
};
