import { Edit3, Grid3X3, StickyNote } from 'lucide-react';

const Notes = () => {
  return (
    <div className="p-6">
      {/* Take a note section */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between p-4">
            <input
              type="text"
              placeholder="Take a note..."
              className="flex-1 bg-transparent border-0 focus:outline-none text-gray-600 dark:text-gray-300 placeholder-gray-500"
            />
            <div className="flex items-center space-x-2 ml-4">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <StickyNote className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <Edit3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <Grid3X3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="max-w-7xl mx-auto">
    

      </div>
    </div>
  );
};

export default Notes;
