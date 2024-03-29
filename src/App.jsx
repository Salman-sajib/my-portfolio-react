import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const mainBackgroundImageUrl = `url("../src/assets/magicpattern-starry-night-1711726110696.png"))`;
  return (
    <div className='app min-h-dvh bg-slate-950'>
      <main
        style={{
          backgroundImage: mainBackgroundImageUrl,
        }}
        className='min-h-dvh'
      >
        <Header />
        {/* <Hero /> */}
      </main>
    </div>
  );
}

export default App;
