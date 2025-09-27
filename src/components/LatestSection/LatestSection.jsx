import { Link } from 'react-router'
import './latest.css'
import EpisodeList from 'components/EpisodeList'
import routeList from 'shared/routes'

export default function LatestSection() {
    return (
        <section className='LATEST-wrapper'>
            <div className='LATEST-header'>
                <h1 className='LATEST-header_title'>
                    Latest episodes
                </h1>
                <Link to={routeList.EPISODES}>
                    <div className='BUTTON LATEST-header_view_all'>
                        View all episodes
                    </div>
                </Link>
                
            </div>

            <EpisodeList />
        </section>
    )
}