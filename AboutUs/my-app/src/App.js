// // src/App.js
// import React from 'react';
// import AboutUsPage from './Component/AboutUsPage';
// // import AboutUsPage from './AboutUsPage';

// function App() {
//   return (
//     <div className="App">
//       <AboutUsPage />
//     </div>
//   );
// }

// export default App;



// src/App.js
import React from 'react';
// import ContactUsPage from './Component/ContactUsPage'; // Import the Contact Us page component
import ContactUsPage from './Component/ContactUsPage.jsx';  
import './App.css'; // Ensure you have some global styles if needed

function App() {
  return (
    <div className="App">
      {/* Other routes/components */}
      <ContactUsPage />
    </div>
  );
}

export default App;
