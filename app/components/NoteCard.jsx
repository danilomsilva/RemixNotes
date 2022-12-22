import React from 'react';

const NoteCard = ({ note }) => {
  const { title, description, id } = note;
  const formatedDate = new Date(id).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
  });
  return (
    <card className="container bg-white/25 rounded-lg flex flex-col gap-5 text-start p-10">
      <div className="flex justify-between items-center text-white/75 font-semibold text-2xl">
        <h6>{title}</h6>
        <h6 className="text-xl">{formatedDate}</h6>
      </div>
      <p className="text-md font-semibold text-white/75">{description}</p>
    </card>
  );
};

export default NoteCard;
