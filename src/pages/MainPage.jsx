import LatestSection from 'components/LatestSection/LatestSection';
import TitleBlock from '../components/TitleBlock/TitleBlock';
import HostSection from 'components/HostSection/HostSection';
import SubSection from 'components/SubSection/SubSection';
import CommentsSection from 'components/CommentsSection/CommentsSection';
import routeList from 'shared/data/routes';

export default function MainPage() {
    return (
        <>
            <TitleBlock />

            <LatestSection />

            <HostSection link={{to: routeList.ABOUT, text: "Meet your host"}} />

            <SubSection />

            <CommentsSection />
        </>
    )
}