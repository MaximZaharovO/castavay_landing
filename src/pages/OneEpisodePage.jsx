import EpisodeInfo from "components/EpisodeInfo"
import PageWrapper from "components/PageWrapper"
import { Link, useParams } from "react-router"
import { getEpisode } from "shared/data/episodes"
import routeList from "shared/data/routes"

export default function OneEpisodePage() {
    const {episode} = useParams()
    const episodeInfo = getEpisode(episode)

    return (
        <PageWrapper>
            <EpisodeInfo episode={episodeInfo} >
                <Link to={routeList.EPISODES}>
                    <div className="BUTTON">
                        View all episodes
                    </div>
                </Link>
                
            </EpisodeInfo>
        </PageWrapper>
    )
}