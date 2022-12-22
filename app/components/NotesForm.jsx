import { Form } from '@remix-run/react';
import Input from './Input';

const NotesForm = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl text-white/80">
        What are your thoughts?
      </h1>
      <Form
        id="form"
        method="post"
        className="container bg-white/25 rounded-lg flex flex-col gap-5 text-start p-10"
      >
        <Input
          id="title"
          name="title"
          type="input"
          label="Title"
          placeholder="E.g. Create a new Remix project..."
        />
        <Input
          id="description"
          name="description"
          type="textarea"
          label="Description"
          placeholder="E.g. Create a message application that blocks fake news being shared..."
        />
        <button className="flex place-self-end px-6 py-3 bg-orange-400/95 hover:bg-orange-400 rounded-md text-white font-bold border-dashed border-4 border-white text-xl">
          Add note
        </button>
      </Form>
    </>
  );
};

export default NotesForm;
