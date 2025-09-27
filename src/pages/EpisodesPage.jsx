import PageWrapper from "components/PageWrapper";
import EpisodeList from "components/EpisodeList";
import { getSortedEpisodesList } from "shared/data/episodes";
import SORT from "shared/enums/sortTypes";

export default function EpisodesPage() {
    const list = getSortedEpisodesList(0, 0, SORT.ASC)

    return (
        <PageWrapper>
            <EpisodeList episodes={list}/>
        </PageWrapper>
    );
}