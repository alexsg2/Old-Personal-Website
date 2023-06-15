import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavBar';
import ContentSection from './ContentSection';

const App = () => {
  return (
    <div>
      {/* Render the navigation bar */}
      <NavigationBar />

      {/* Render the content sections */}
      <ContentSection />
    </div>
  );
};

export default App;