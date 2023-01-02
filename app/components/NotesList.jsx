import { Link } from '@remix-run/react';
import NoteCard from './NoteCard';

const NotesList = ({ notes }) => {
  return (
    <section className="flex flex-col gap-5">
      {notes.map((note) => {
        return (
          <Link to={note.id} key={note.id}>
            <NoteCard note={note} />
          </Link>
        );
      })}
    </section>
  );
};

export default NotesList;
