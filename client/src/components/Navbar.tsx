import {
  Menu,
  Search,
  RefreshCw,
  Settings,
  Grid3X3,
  StickyNote,
  User,
  // User
} from 'lucide-react';

interface NavbarProps {
  isSidebarExpanded: boolean;
  setIsSidebarExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({
  setIsSidebarExpanded,
  isSidebarExpanded,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
          >
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <StickyNote className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-medium text-gray-700 dark:text-gray-200 hidden sm:block">
              BitNotes
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8 relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg border-0 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <RefreshCw className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <Grid3X3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// const BitNotesLayout = () => {
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
//         <div className="flex items-center justify-between px-4 py-3">
//           {/* Left Section */}
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
//             >
//               <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
//             </button>

//             <div className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
//                 <StickyNote className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-medium text-gray-700 dark:text-gray-200 hidden sm:block">
//                 BitNotes
//               </span>
//             </div>
//           </div>

//           {/* Search Bar */}
//           <div className="flex-1 max-w-2xl mx-8 relative">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg border-0 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-500"
//               />
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center space-x-2">
//             <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
//               <RefreshCw className="w-5 h-5 text-gray-600 dark:text-gray-300" />
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
//               <Grid3X3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
//               <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
//               <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
//                 <User className="w-4 h-4 text-white" />
//               </div>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <aside className={`fixed left-0 top-16 bottom-0 z-40 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
//         isSidebarExpanded ? 'w-72' : 'w-16'
//       }`}>
//         <div className="flex flex-col h-full">
//           <div className="flex-1 py-4">
//             {sidebarItems.map((item) => {
//               const IconComponent = item.icon;
//               const isActive = activeItem === item.id;

//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveItem(item.id)}
//                   className={`w-full flex items-center px-4 py-3 text-left transition-all duration-200 ${
//                     isActive
//                       ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-r-4 border-amber-500'
//                       : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
//                   }`}
//                 >
//                   <IconComponent className={`w-6 h-6 ${isSidebarExpanded ? 'mr-6' : ''}`} />
//                   {isSidebarExpanded && (
//                     <span className="font-medium">{item.label}</span>
//                   )}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Bottom section */}
//           <div className="p-4 border-t border-gray-200 dark:border-gray-700">
//             {isSidebarExpanded && (
//               <p className="text-xs text-gray-400 dark:text-gray-500">
//                 Open-source licenses
//               </p>
//             )}
//           </div>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <main className={`pt-16 transition-all duration-300 ${
//         isSidebarExpanded ? 'pl-72' : 'pl-16'
//       }`}>
//         <div className="p-6">
//           {/* Take a note section */}
//           <div className="max-w-2xl mx-auto mb-8">
//             <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <div className="flex items-center justify-between p-4">
//                 <input
//                   type="text"
//                   placeholder="Take a note..."
//                   className="flex-1 bg-transparent border-0 focus:outline-none text-gray-600 dark:text-gray-300 placeholder-gray-500"
//                 />
//                 <div className="flex items-center space-x-2 ml-4">
//                   <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
//                     <StickyNote className="w-5 h-5 text-gray-600 dark:text-gray-300" />
//                   </button>
//                   <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
//                     <Edit3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
//                   </button>
//                   <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
//                     <Grid3X3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Notes Grid */}
//           <div className="max-w-7xl mx-auto">
//             {/* Pinned Section */}
//             <div className="mb-8">
//               <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
//                 Pinned
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//                 {/* Sample Pinned Note 1 */}
//                 <div className="bg-amber-100 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800 hover:shadow-md transition-shadow duration-200">
//                   <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Email</h3>
//                   <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
//                     I'm currently working on the <strong>Landmark Group Project</strong>, which requires running multiple software and codebases simultaneously. My current i3 system is struggling to keep up, affecting productivity.
//                   </p>
//                   <div className="mt-4 pt-3 border-t border-amber-200 dark:border-amber-800">
//                     <p className="text-xs text-gray-600 dark:text-gray-400">
//                       <strong>Current Specification</strong><br />
//                       <strong>Processor:</strong> i3 12th Gen<br />
//                       <strong>Ram:</strong> 16GB
//                     </p>
//                   </div>
//                 </div>

//                 {/* Sample Pinned Note 2 */}
//                 <div className="bg-green-100 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800 hover:shadow-md transition-shadow duration-200">
//                   <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Npm package for Icon</h3>
//                   <div className="flex items-center space-x-2 mb-3">
//                     <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
//                       <span className="text-white text-sm font-bold">L</span>
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Lucide Icons</p>
//                       <p className="text-xs text-gray-500 dark:text-gray-400">lucide.dev</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Others Section */}
//             <div>
//               <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
//                 Others
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//                 {/* Sample Notes */}
//                 <div className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow duration-200">
//                   <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Vercel gitlab-pollhub token</h3>
//                   <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
//                     Ao73W7rSgHsZSwrOdQ9mYp
//                   </p>
//                 </div>

//                 <div className="bg-teal-100 dark:bg-teal-900/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800 hover:shadow-md transition-shadow duration-200">
//                   <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Acute users</h3>
//                   <p className="text-sm text-gray-700 dark:text-gray-300">
//                     hiten.farnani<br />
//                     praveenqa2
//                   </p>
//                 </div>

//                 <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
//                   <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">browser testing</h3>
//                   <p className="text-sm text-gray-700 dark:text-gray-300">BrowserStack</p>
//                 </div>

//                 <div className="bg-red-100 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800 hover:shadow-md transition-shadow duration-200">
//                   <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node js project env (Metube)</h3>
//                   <p className="text-sm text-gray-700 dark:text-gray-300">PORT=7000</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };
