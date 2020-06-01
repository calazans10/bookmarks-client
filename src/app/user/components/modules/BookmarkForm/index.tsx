import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { required } from 'utils/validators';
import { BookmarkData } from 'app/user/types';
import MainForm from 'app/core/components/modules/MainForm';
import FormGroup from 'app/core/components/modules/FormGroup';
import ButtonSubmit from 'app/core/components/modules/ButtonSubmit';

type BookmarkFormProps = {
  legend: string;
  action: string;
  title: string;
  url: string;
  onSubmit: (values: BookmarkData) => Promise<void>;
} & typeof defaultProps;

const defaultProps = {
  title: '',
  url: '',
};

const BookmarkForm = ({ legend, action, title, url, onSubmit }: BookmarkFormProps) => (
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

BookmarkForm.defaultProps = defaultProps;

export default BookmarkForm;
