
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import SlideSection from './component/SlideSection'
import Footer from './component/Footer';


function App() {
  return (
    <div className='Wrap'>
      <header className='Header'>
        <Header />
      </header>

      <main className='Main'>
        <Main />
      </main>

      <main className='SlideSection'>
        <SlideSection />
      </main>

      <footer className='Footer'>
        <Footer />
      </footer>



    </div>
  );
}

export default App;
