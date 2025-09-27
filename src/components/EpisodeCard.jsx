import { Link } from "react-router";
import routeList from "shared/data/routes";
import EpisodeInfo from "./EpisodeInfo";

export default function EpisodeCard({episode}) {
    return (
        <div className="EPISODE-card_wrapper">
            <EpisodeInfo episode={episode}> 
                <Link to={routeList.ONE_EPISODE(episode.episode)}>
                    <div className="BUTTON">
                        View Episode Details
                    </div>
                </Link>
                
            </EpisodeInfo>
        </div>
        
    )
}

