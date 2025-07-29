import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 overflow-hidden">
      
      <ScrollToTop /> 
      
      <Header />
      
      <main className="flex-1 overflow-y-auto no-scrollbar">
        <div className="container mx-auto p-4 w-full">
            <Outlet />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;