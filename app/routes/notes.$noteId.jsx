import { useLoaderData } from '@remix-run/react';
import NoteCard from '~/components/NoteCard';
import { getStoredNotes } from '~/data/notes';

const NoteDetails = () => {
  const note = useLoaderData();
  return (
    <main className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-32 px-5 flex justify-center pb-10">
      <NoteCard note={note} />
    </main>
  );
};

export async function loader({ params }) {
  const allNotes = await getStoredNotes();
  const noteId = params.noteId; // same name as file notes.$noteId.jsx - IMPORTANT
  const findNote = allNotes.find((note) => note.id === noteId);
  return findNote;
}

export default NoteDetails;
