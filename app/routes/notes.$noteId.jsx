import { json } from '@remix-run/node';
import { useLoaderData, useCatch } from '@remix-run/react';
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

  if (!findNote) {
    throw json(
      { message: 'Note not found for ID "' + noteId },
      { status: 404 }
    );
  }
  return findNote;
}

export default NoteDetails;

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
