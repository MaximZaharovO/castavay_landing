import EPISODES from "shared/episodes";
import Episode from "./Episode";

export default function EpisodeList() {
    return (
        <div>
            {EPISODES.map(episode => <Episode key={episode.episode} episode={episode}/>)}
        </div>
    )
}