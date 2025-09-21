import LatestSection from 'components/LatestSection/LatestSection';
import Header from '../components/Header/Header';
import TitleBlock from '../components/TitleBlock/TitleBlock';

function App() {
  return (
    <div className='APP'>
      <Header/>
      <TitleBlock />

      <LatestSection />
    </div>
  )
}

export default App;
