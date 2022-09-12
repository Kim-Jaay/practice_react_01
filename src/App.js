
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Main_02 from './component/Main_02'


function App() {
  return (
    <div className='Wrap'>
      <header className='header'>
        <Header />
      </header>

      <main className='main'>
        <Main />
      </main>

      <main className='main02'>
        <Main_02 />
      </main>

      <footer className='footer'>
        <Footer />
      </footer>



    </div>
  );
}

export default App;
