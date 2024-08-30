import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

CoralogixRum.setLabels({
  paymentMethod: 'visa',
  userTheme: 'black'
  // ...
})

function HomePage() {
  const navigate = useNavigate();

  const generateError = () => {
    try {
      firstFunction();
    } catch (error) {
      console.error("Caught an error:", error);
    }
  };

  const firstFunction = () => {
    secondFunction();
  };

  const secondFunction = () => {
    thirdFunction();
  };

  const thirdFunction = () => {
    fourthFunction();
  };

  const fourthFunction = () => {
    fifthFunction();
  };

  const fifthFunction = () => {
    console.log('About to throw an error in fifthFunction.');
    throw new Error('This is a manually generated error in fifthFunction for testing.');
  };

  return (
    <div>
      <h1>Hello World - Home Page</h1>
      <button onClick={() => navigate('/about')}>Go to About Page</button>
      <button onClick={generateError}>Generate Error</button>
    </div>
  );
}

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => navigate('/')}>Go to Home Page</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;