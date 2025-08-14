import React, { useState, useEffect } from 'react';
import {
  Edit3,
  Grid3X3,
  StickyNote,
  Palette,
  Image as ImageIcon,
  Archive,
  MoreHorizontal,
  Undo2,
  Redo2,
  Bell,
} from 'lucide-react';

interface NoteData {
  title: string;
  content: string;
}

interface NoteInputProps {
  onSave?: (note: NoteData) => void;
  className?: string;
}

const NoteInput: React.FC<NoteInputProps> = ({ onSave, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [noteData, setNoteData] = useState<NoteData>({
    title: '',
    content: '',
  });

  const handleInputChange = (field: keyof NoteData, value: string) => {
    setNoteData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);

    // Only save if there's content
    if (noteData.title.trim() || noteData.content.trim()) {
      if (onSave) {
        onSave(noteData);
      }
    }

    // Reset form
    setNoteData({ title: '', content: '' });
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('.note-input-container')) return;
    if (isExpanded) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    }
  }, [isExpanded]);

  const handleToolbarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // Handle specific toolbar actions here
  };

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div
        className="note-input-container bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
        style={{ minHeight: isExpanded ? '200px' : 'auto' }}
      >
        {/* Collapsed State */}
        {!isExpanded && (
          <div
            className="flex items-center justify-between p-4 cursor-text"
            onClick={handleExpand}
          >
            <input
              type="text"
              placeholder="Take a note..."
              className="flex-1 bg-transparent border-0 focus:outline-none text-gray-600 dark:text-gray-300 placeholder-gray-500 cursor-text"
              onFocus={handleExpand}
              readOnly
            />
            <div className="flex items-center space-x-2 ml-4">
              <button
                className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  handleExpand();
                }}
                title="New list"
              >
                <StickyNote className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  handleExpand();
                }}
                title="New note with drawing"
              >
                <Edit3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  handleExpand();
                }}
                title="New note with image"
              >
                <ImageIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        )}

        {/* Expanded State */}
        {isExpanded && (
          <div className="p-4">
            {/* Title Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Title"
                value={noteData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full bg-transparent border-0 focus:outline-none text-lg font-medium text-gray-800 dark:text-gray-200 placeholder-gray-500 pb-2"
                autoFocus
              />
            </div>

            {/* Content Textarea */}
            <div className="mb-6">
              <textarea
                placeholder="Take a note..."
                value={noteData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                className="w-full bg-transparent border-0 focus:outline-none text-gray-700 dark:text-gray-300 placeholder-gray-500 resize-none min-h-[100px]"
                rows={4}
              />
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {/* Left toolbar buttons */}
                <button
                  className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  title="Remind me"
                  onClick={handleToolbarClick}
                >
                  <Bell className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>

                <button
                  className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  title="Background options"
                  onClick={handleToolbarClick}
                >
                  <Palette className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>

                <button
                  className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  title="Add image"
                  onClick={handleToolbarClick}
                >
                  <ImageIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>

                <button
                  className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  title="Archive"
                  onClick={handleToolbarClick}
                >
                  <Archive className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>

                <button
                  className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  title="More"
                  onClick={handleToolbarClick}
                >
                  <MoreHorizontal className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>

                <button
                  className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  title="Undo"
                  onClick={handleToolbarClick}
                >
                  <Undo2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>

                <button
                  className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  title="Redo"
                  onClick={handleToolbarClick}
                >
                  <Redo2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
              >
                save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteInput;
