import React from 'react';
import NoteCard from './NoteCard';

const NotesList = ({ notes }) => {
  return (
    <section className="flex flex-col gap-5">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};

export default NotesList;
