import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    console.log('%cTheme button clicked!', 'color: lime; font-size: 14px;');
    console.log('Current theme before toggle:', theme);
    toggleTheme();
  };

  const getNavlinkClasses = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = "font-medium transition-colors duration-200 hover:text-yellow-500";
    if (isActive) return `${baseClasses} text-yellow-500`;
    return `${baseClasses} text-gray-800 dark:text-gray-200`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md w-full transition-colors duration-200">
      <div className="container px-4 mx-auto flex items-center justify-between h-14">
        <NavLink to="/" className="flex items-center space-x-2" aria-label="Go to Homepage">
          <div className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-lg font-bold text-gray-800 dark:text-white">Gautam Pankuta</span>
        </NavLink>
        
        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            <NavLink to="/" className={getNavlinkClasses} end>Home</NavLink>
            <NavLink to="/about" className={getNavlinkClasses}>About</NavLink>
            <NavLink to="/projects" className={getNavlinkClasses}>Projects</NavLink>
            <NavLink to="/skills" className={getNavlinkClasses}>Skills</NavLink>
            <NavLink to="/contact" className={getNavlinkClasses}>Contact</NavLink>
            <NavLink to="/todo" className={getNavlinkClasses}>Todo App</NavLink>
          </nav>
          
          <button 
            onClick={handleThemeToggle} 
            className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-slate-700 flex items-center justify-center transition-colors hover:bg-gray-200 dark:hover:bg-slate-600" 
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;