import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import MainForm from '../../../../core/components/modules/MainForm';
import FormGroup from '../../../../core/components/modules/FormGroup';
import ButtonSubmit from '../../../../core/components/modules/ButtonSubmit';
import { required } from '../../../../../utils/validators';

const BookmarkForm = ({ legend, action, title, url, onSubmit }) => (
  <Form
    initialValues={{ title, url }}
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <MainForm legend={legend} onSubmit={handleSubmit}>
        <Field
          name="title"
          validate={required}
          render={({ input, meta }) => (
            <FormGroup input={input} meta={meta} label="Title" type="text" />
          )}
        />
        <Field
          name="url"
          validate={required}
          render={({ input, meta }) => (
            <FormGroup input={input} meta={meta} label="Url" type="url" />
          )}
        />
        <div>
          <ButtonSubmit>{action}</ButtonSubmit>
          <Link to="/bookmarks">Cancel</Link>
        </div>
      </MainForm>
    )}
  />
);

BookmarkForm.propTypes = {
  legend: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

BookmarkForm.defaultProps = {
  title: '',
  url: '',
};

export default BookmarkForm;
