import { useEffect } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';


const Home = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div style={{ backgroundColor: '#08142c', minHeight: '100vh' }}>
        <Section2 />
      <Section1 />
    
     
   
    </div>
  );
};

export default Home;
