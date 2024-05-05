import React from 'react'
import Background from './Components/Backgroun';
import FourGround from './Components/FourGround';

function App() {
  return (
   <>
    <div className="relative w-full h-screen bg-zinc-800">
        <Background/>
      <FourGround/>
    </div>
   </>
  );
}

export default App