import LatestSection from 'components/LatestSection/LatestSection';
import TitleBlock from '../components/TitleBlock/TitleBlock';
import HostSection from 'components/HostSection/HostSection';
import SubSection from 'components/SubSection/SubSection';
import CommentsSection from 'components/CommentsSection/CommentsSection';

export default function MainPage() {
    return (
        <>
            <TitleBlock />

            <LatestSection />

            <HostSection />

            <SubSection />

            <CommentsSection />
        </>
    )
}