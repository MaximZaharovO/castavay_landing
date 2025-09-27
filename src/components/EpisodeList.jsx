import EpisodeCard from "./EpisodeCard";

export default function EpisodeList({episodes}) {
    return (
        <div>
            {episodes.map(episode => <EpisodeCard key={episode.episode} episode={episode}/>)}
        </div>
    )
}