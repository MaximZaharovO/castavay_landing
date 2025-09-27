import Header from '../components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Route, Routes } from 'react-router';
import MainPage from './MainPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import EpisodesPage from './EpisodesPage';
import routeList from 'shared/data/routes';
import OneEpisodePage from './OneEpisodePage';
import ProjectLink from 'components/ProjectLink/ProjectLink';

function App() {
  return (
    <div className='APP'>
      <Header/>

      <div className='APP-wrapper'>
        <Routes >
            <Route path={routeList.HOME} element={<MainPage />} />
            <Route path={routeList.CONTACT} element={<ContactPage />} />
            <Route path={routeList.ABOUT} element={<AboutPage />} />
            <Route path={routeList.EPISODES} element={<EpisodesPage />} />
            <Route path={routeList.ONE_EPISODE()} element={<OneEpisodePage />} />
          </Routes>
      </div>

      <Footer />

      <ProjectLink />
    </div>
  )
}

export default App;
