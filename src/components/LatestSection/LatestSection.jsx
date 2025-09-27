import { Link } from 'react-router'
import './latest.css'
import EpisodeList from 'components/EpisodeList'
import routeList from 'shared/data/routes'
import SORT from 'shared/enums/sortTypes'
import { getSortedEpisodesList } from 'shared/data/episodes'

export default function LatestSection() {

    const latestEpisodes = getSortedEpisodesList(0, 3, SORT.DESC)

    return (
        <section className='LATEST-wrapper'>
            <div className='LATEST-header'>
                <h1>Latest episodes</h1>
                <Link to={routeList.EPISODES}>
                    <div className='BUTTON LATEST-header_view_all'>
                        View all episodes
                    </div>
                </Link>
                
            </div>

            <EpisodeList episodes={latestEpisodes} />
        </section>
    )
}