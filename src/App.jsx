import ScrollSequence from './components/ScrollSequence';
import LandingPage from './components/LandingPage';
import FloatingWheel from './components/FloatingWheel';

function App() {
  const frameCount = 151;

  return (
    <div className="bg-black min-h-screen">
      <ScrollSequence frameCount={frameCount} />
      <LandingPage />
      <FloatingWheel />
      
      <div className="py-20 text-center text-gray-500">
        <p>End of demo</p>
      </div>
    </div>
  )
}

export default App;
