import HostSection from "components/HostSection/HostSection";
import PageWrapper from "components/PageWrapper";
import routeList from "shared/data/routes";

export default function AboutPage() {
    return (
        <PageWrapper>
            <HostSection link={{to: routeList.EPISODES, text: "View episodes"}} />
        </PageWrapper>
    );
}