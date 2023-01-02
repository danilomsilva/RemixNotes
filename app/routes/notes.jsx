import { json, redirect } from '@remix-run/node';
import { useCatch, useLoaderData } from '@remix-run/react';
import { getStoredNotes, storeNotes } from '~/data/notes';
import NotesList from '~/components/NotesList';
import NotesForm from '~/components/NotesForm';

const NotesPage = () => {
  const notes = useLoaderData();

  return (
    <main className="flex text-center gap-10 bg-gradient-to-r from-cyan-500 to-blue-500 h-fit pt-32 px-5 pb-10">
      <section className="container pt-10 pb-5 px-5 flex flex-col gap-10 h-fit">
        <NotesForm />
      </section>
      <section className="container pt-10 pb-5 px-5 flex flex-col gap-10 h-fit">
        <h1 className="font-semibold text-2xl text-white/80">Your notes</h1>
        <NotesList notes={notes} />
      </section>
    </main>
  );
};

export default NotesPage;

export async function loader() {
  const notes = await getStoredNotes();
  if (!notes || !notes.length) {
    throw json(
      { message: 'Something went wrong loading notes' },
      { status: 404 }
    );
  }
  return notes;
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData); // best way of getting the note data

  //validations
  if (noteData.title.length < 5) {
    return {
      title: {
        message: 'Please provide a longer title',
      },
    };
  }
  if (noteData.description.length < 200) {
    return {
      description: {
        message: 'Please provide a longer description',
      },
    };
  }

  noteData.id = new Date().toISOString();
  const existingNotes = await getStoredNotes();
  const updtedNotes = existingNotes.concat(noteData);
  await storeNotes(updtedNotes);
  return redirect('/notes');
}

export function ErrorBoundary({ error }) {
  return <main>An error ocurred retrieving notes: {error}</main>;
}

export function CatchBoundary() {
  const caughtReponse = useCatch();
  const errorMessage = caughtReponse.data?.message;
  return (
    <main className="flex flex-col items-center justify-center text-center gap-10 bg-gradient-to-r from-red-500 to-blue-500 h-screen px-20">
      <h1 className="text-4xl font-semibold text-white/75">
        An unexpected error occurred!
      </h1>
      <h6 className="text-xl text-white/75">{errorMessage}</h6>
    </main>
  );
}
