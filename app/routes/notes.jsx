import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getStoredNotes, storeNotes } from '~/data/notes';
import NotesList from '~/components/NotesList';
import NotesForm from '~/components/NotesForm';

const NotesPage = () => {
  const notes = useLoaderData();

  return (
    <main className="flex text-center gap-10 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-32 px-5">
      <section className="container border border-slate-300 rounded-lg pt-10 pb-5 px-5 flex flex-col gap-10 h-fit">
        <NotesForm />
      </section>
      <section className="container border border-slate-300 rounded-lg pt-10 pb-5 px-5 flex flex-col gap-10 h-fit">
        <h1 className="font-semibold text-2xl text-white/80">Your notes</h1>
        <NotesList notes={notes} />
      </section>
    </main>
  );
};

export default NotesPage;

export async function loader() {
  const notes = await getStoredNotes();
  return notes;
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData); // best way of getting the note data
  noteData.id = new Date().toISOString();
  const existingNotes = await getStoredNotes();
  const updtedNotes = existingNotes.concat(noteData);
  await storeNotes(updtedNotes);
  return redirect('/notes');
}
