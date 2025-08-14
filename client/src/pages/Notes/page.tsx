import { useState } from 'react';
import NoteInput from '../../components/NoteInput';
import { StickyNote } from 'lucide-react';
import type { Note } from '../../utils/interfaceTypes';
import NoteCard from '../../components/NoteCard';

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: 'Email',
      content:
        "I'm currently working on the Landmark Group Project, which requires running multiple software and codebases simultaneously. My current i3 system is struggling to keep up, affecting productivity.\n\nI'd like to request an upgrade to at least an i5 or higher system to better handle the workload and ensure smooth development.\n\nCurrent Specification\nProcessor: i3 12th Gen\nRam: 16GB",
      color: 'amber',
      isPinned: true,
      createdAt: new Date('2024-01-15'),
    },
    {
      id: 2,
      title: 'Npm package for Icon',
      content: 'Lucide Icons\nlucide.dev',
      color: 'green',
      isPinned: true,
      createdAt: new Date('2024-01-14'),
    },
    {
      id: 3,
      title: 'Vercel gitlab-pollhub token',
      content: 'Ao73W7rSgHsZSwrOdQ9mYp',
      color: 'blue',
      isPinned: false,
      createdAt: new Date('2024-01-13'),
    },
  ]);

  // Drag and drop state
  const [draggedNote, setDraggedNote] = useState<Note | null>(null);
  const [dragOverNote, setDragOverNote] = useState<Note | null>(null);

  const handleSaveNote = (noteData: { title: string; content: string }) => {
    const newNote: Note = {
      id: Date.now(),
      title: noteData.title,
      content: noteData.content,
      color: 'yellow', // Default color
      isPinned: false,
      createdAt: new Date(),
    };
    console.log(newNote, 'created');
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    console.log('New note saved:', newNote);
  };

  // Drag and drop handlers
  const handleDragStart = (e: React.DragEvent, note: Note) => {
    setDraggedNote(note);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', '');

    // Add smooth drag effect
    const target = e.target as HTMLElement;
    target.style.opacity = '0.5';
    target.style.transform = 'rotate(2deg) scale(0.95)';
    target.style.transition = 'all 0.2s ease';
  };

  const handleDragEnd = (e: React.DragEvent) => {
    setDraggedNote(null);
    setDragOverNote(null);

    // Reset drag styles
    const target = e.target as HTMLElement;
    target.style.opacity = '';
    target.style.transform = '';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetNote: Note) => {
    e.preventDefault();

    if (!draggedNote || draggedNote.id === targetNote.id) {
      return;
    }

    // Check if we're moving between pinned and unpinned sections
    if (draggedNote.isPinned !== targetNote.isPinned) {
      return; // Don't allow moving between sections
    }

    setNotes((prevNotes) => {
      const newNotes = [...prevNotes];
      const draggedIndex = newNotes.findIndex(
        (note) => note.id === draggedNote.id
      );
      const targetIndex = newNotes.findIndex(
        (note) => note.id === targetNote.id
      );

      // Remove dragged note and insert it at target position
      const [removed] = newNotes.splice(draggedIndex, 1);
      newNotes.splice(targetIndex, 0, removed);

      return newNotes;
    });
  };

  const handleNoteMouseEnter = (note: Note) => {
    if (
      draggedNote &&
      draggedNote.id !== note.id &&
      draggedNote.isPinned === note.isPinned
    ) {
      setDragOverNote(note);
    }
  };

  const handleNoteMouseLeave = () => {
    setDragOverNote(null);
  };

  const pinnedNotes = notes.filter((note) => note.isPinned);
  const otherNotes = notes.filter((note) => !note.isPinned);

  return (
    <div className="p-6">
      {/* Note Input Component */}
      <NoteInput onSave={handleSaveNote} className="mb-8" />

      {/* Notes Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Pinned Section */}
        {pinnedNotes.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
              Pinned
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {pinnedNotes.map((note) => (
                <div
                  key={note.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, note)}
                  onDragEnd={handleDragEnd}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, note)}
                  onMouseEnter={() => handleNoteMouseEnter(note)}
                  onMouseLeave={handleNoteMouseLeave}
                  className={`cursor-move transition-all duration-200 ${
                    dragOverNote?.id === note.id && draggedNote?.id !== note.id
                      ? 'scale-105 shadow-lg ring-2 ring-blue-400 ring-opacity-50'
                      : ''
                  }`}
                  style={{
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <NoteCard note={note} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Others Section */}
        {otherNotes.length > 0 && (
          <div>
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
              {pinnedNotes.length > 0 ? 'Others' : 'Notes'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {otherNotes.map((note) => (
                <div
                  key={note.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, note)}
                  onDragEnd={handleDragEnd}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, note)}
                  onMouseEnter={() => handleNoteMouseEnter(note)}
                  onMouseLeave={handleNoteMouseLeave}
                  className={`cursor-move transition-all duration-200 ${
                    dragOverNote?.id === note.id && draggedNote?.id !== note.id
                      ? 'scale-105 shadow-lg ring-2 ring-blue-400 ring-opacity-50'
                      : ''
                  }`}
                  style={{
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <NoteCard note={note} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {notes.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <StickyNote className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
              No notes yet
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              Start by creating your first note above
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
