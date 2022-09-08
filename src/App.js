
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';


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
