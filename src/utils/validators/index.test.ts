import {
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
} from './';

describe('validators', () => {
  describe('required', () => {
    it('should return undefined when is valid', () => {
      expect(required('test')).toEqual(undefined);
    });

    it('should return an error message when is not valid', () => {
      expect(required(null)).toEqual('É necessário preencher este campo.');
    });
  });

  describe('mustChooseOne', () => {
    it('should return undefined when is valid', () => {
      expect(mustChooseOne([])).toEqual('É necessário escolher ao menos uma opção.');
    });

    it('should return an error message when is not valid', () => {
      expect(mustChooseOne(['one', 'two'])).toEqual(undefined);
    });
  });

  describe('mustBeEmail', () => {
    it('should return undefined when value is empty', () => {
      expect(mustBeEmail('')).toEqual(undefined);
    });

    it('should return undefined when is valid', () => {
      expect(mustBeEmail('john.doe@gmail.com')).toEqual(undefined);
    });

    it('should return an error message when is not valid', () => {
      expect(mustBeEmail('invalid')).toEqual('O e-mail informado não é válido.');
    });
  });

  describe('mustBePassword', () => {
    it('should return undefined when value is empty', () => {
      expect(mustBePassword('')).toEqual(undefined);
    });

    it('should return undefined when is valid', () => {
      expect(mustBePassword('q1w2e3R4')).toEqual(undefined);
    });

    it('should return an error message when is not valid', () => {
      expect(mustBePassword('q1w2e3r4')).toEqual(
        'Senha inválida. Use oito ou mais caracteres contendo no mínimo, uma letra maiúscula, uma letra minúscula e um número.'
      );
    });
  });

  describe('mustBeNumeric', () => {
    it('should return undefined when is valid', () => {
      expect(mustBeNumeric('1234')).toEqual(undefined);
    });

    it('should return an error message when is not valid', () => {
      expect(mustBeNumeric('invalid')).toEqual('Este campo só aceita números.');
    });
  });

  describe('mustBeUrl', () => {
    it('should return undefined when is a valid', () => {
      expect(mustBeUrl('wwww.example.com')).toEqual(undefined);
    });

    it('should return an error message when is not valid', () => {
      expect(mustBeUrl('example.')).toEqual('Digite um endereço válido.');
    });
  });

  describe('mustBeFullName', () => {
    it('should return undefined when is a valid', () => {
      expect(mustBeFullName('Antonio Rüdiger')).toEqual(undefined);
    });

    it('should return an error message when is not valid', () => {
      expect(mustBeFullName('Rüdiger')).toEqual('Digite o nome completo.');
    });
  });

  describe('minLength', () => {
    it('should return undefined when is valid', () => {
      expect(minLength(3)('123')).toEqual(undefined);
    });

    it('should return an error message when is not valid', () => {
      expect(minLength(2)('a')).toEqual('Este campo requer no mínimo 2 caracteres.');
    });

    it('should return the plural form of an error message when is not valid', () => {
      expect(minLength(3)('12')).toEqual('Este campo requer no mínimo 3 caracteres.');
    });
  });

  describe('maxLength', () => {
    it('should return undefined when is valid', () => {
      expect(maxLength(3)('123')).toEqual(undefined);
    });

    it('should return an error message when is not valid', () => {
      expect(maxLength(1)('1234')).toEqual('Este campo requer no máximo 1 caractere.');
    });

    it('should return the plural form of an error message when is not valid', () => {
      expect(maxLength(3)('1234')).toEqual('Este campo requer no máximo 3 caracteres.');
    });
  });

  describe('composeValidators', () => {
    it('should return undefined when is valid', () => {
      expect(composeValidators(required, mustBeFullName)('Antonio Rüdiger')).toEqual(undefined);
    });

    it('should return undefined when is not valid', () => {
      expect(composeValidators(required, mustBeFullName)('')).toEqual(
        'É necessário preencher este campo.'
      );
    });
  });
});
