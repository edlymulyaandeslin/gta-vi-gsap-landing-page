import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-6xl text-pink flex-center">
          Welcome to the GTA VI
        </h1>
      </div>
    </main>
  );
};

export default App;
