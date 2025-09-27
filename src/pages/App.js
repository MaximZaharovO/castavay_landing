import Header from '../components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Route, Routes } from 'react-router';
import MainPage from './MainPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import EpisodesPage from './EpisodesPage';
import HostPage from './HostPage';
import routeList from 'shared/routes';
import OneEpisodePage from './OneEpisodePage';

function App() {
  return (
    <div className='APP'>
      <div className='APP-wrapper'>
        <Header/>

        <Routes >
            <Route path={routeList.HOME} element={<MainPage />} />
            <Route path={routeList.CONTACT} element={<ContactPage />} />
            <Route path={routeList.ABOUT} element={<AboutPage />} />
            <Route path={routeList.EPISODES} element={<EpisodesPage />} />
            <Route path={routeList.HOST} element={<HostPage />} />
            <Route path={routeList.ONE_EPISODE()} element={<OneEpisodePage />} />
          </Routes>

        <Footer />
      </div>
    </div>
  )
}

export default App;
