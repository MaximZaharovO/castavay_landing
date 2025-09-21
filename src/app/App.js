import LatestSection from 'components/LatestSection/LatestSection';
import Header from '../components/Header/Header';
import TitleBlock from '../components/TitleBlock/TitleBlock';
import HostSection from 'components/HostSection/HostSection';
import SubSection from 'components/SubSection/SubSection';
import Footer from 'components/Footer/Footer';
import CommentsSection from 'components/CommentsSection/CommentsSection';

function App() {
  return (
    <div className='APP'>
      <div className='APP-wrapper'>
        <Header/>

        <TitleBlock />

        <LatestSection />

        <HostSection />

        <SubSection />

        <CommentsSection />

        <Footer />
      </div>
    </div>
  )
}

export default App;
