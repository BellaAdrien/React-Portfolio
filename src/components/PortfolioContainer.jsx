import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>

        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

        <main className="mx-3">{renderPage()}</main>



      </div>

      <div id="footer">
        <ul id="footer-ul">
          <a href="https://www.linkedin.com/in/isabella-adrien-b38ba4267/">

            <li>LinkedIn</li>

          </a>

          <a href="mailto:iadrien2020@fau.edu">
            <li>Email</li>

          </a>
          <a href="https://github.com/BellaAdrien">
            <li>Github</li>

          </a>
        </ul>

      </div>

    </div>
  );
}
