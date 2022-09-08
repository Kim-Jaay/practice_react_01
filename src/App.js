
import './App.css';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';


function App() {
  return (
    <div className='Wrap'>
      <header className='header'>
        <Header />
      </header>

      <main className='main'>
        <Main />
      </main>

      <footer className='footer'>
        <Footer />
      </footer>



    </div>
  );
}

export default App;
