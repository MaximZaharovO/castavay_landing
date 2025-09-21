import LatestSection from 'components/LatestSection/LatestSection';
import Header from '../components/Header/Header';
import TitleBlock from '../components/TitleBlock/TitleBlock';
import HostSection from 'components/HostSection/HostSection';
import SubSection from 'components/SubSection/SubSection';
import Comment from 'components/Comment';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div className='APP'>
      <Header/>

      <TitleBlock />

      <LatestSection />

      <HostSection />

      <SubSection />

      <Comment rating={4} />

      <Footer />
    </div>
  )
}

export default App;
