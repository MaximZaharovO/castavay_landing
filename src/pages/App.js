import Header from '../components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Route, Routes } from 'react-router';
import MainPage from './MainPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import EpisodesPage from './EpisodesPage';

function App() {
  return (
    <div className='APP'>
      <div className='APP-wrapper'>
        <Header/>

        <Routes >
          <Route path='/' element={<MainPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/episodes' element={<EpisodesPage />} />
        </Routes>

        <Footer />
      </div>
    </div>
  )
}

export default App;
