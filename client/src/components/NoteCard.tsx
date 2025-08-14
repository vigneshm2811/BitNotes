import React from 'react';
import { getColorClasses } from '../utils/helper';
import type { Note } from '../utils/interfaceTypes';

const NoteCard: React.FC<{ note: Note }> = ({ note }) => (
  <div
    className={`rounded-lg p-4 border hover:shadow-md transition-shadow duration-200 cursor-pointer ${getColorClasses(
      note.color
    )}`}
    onClick={() => console.log('Note clicked:', note.id)}
  >
    {note.title && (
      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">
        {note.title}
      </h3>
    )}
    <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed line-clamp-6">
      {note.content}
    </p>
  </div>
);

export default NoteCard;
