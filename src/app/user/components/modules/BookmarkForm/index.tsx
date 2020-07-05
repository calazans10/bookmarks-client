import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
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

const schema = yup.object().shape({
  title: yup.string().required(),
  url: yup.string().url().required(),
});

const BookmarkForm = ({ legend, action, title, url, onSubmit }: BookmarkFormProps) => {
  const { register, handleSubmit, errors } = useForm<BookmarkData>({
    resolver: yupResolver(schema),
  });

  return (
    <MainForm legend={legend} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup
        name="title"
        label="Title"
        type="text"
        defaultValue={title}
        inputRef={register}
        error={errors.title?.message}
      />
      <FormGroup
        name="url"
        label="Url"
        type="url"
        defaultValue={url}
        inputRef={register}
        error={errors.url?.message}
      />
      <div>
        <ButtonSubmit>{action}</ButtonSubmit>
        <Link to="/bookmarks">Cancel</Link>
      </div>
    </MainForm>
  );
};

BookmarkForm.defaultProps = defaultProps;

export default BookmarkForm;
