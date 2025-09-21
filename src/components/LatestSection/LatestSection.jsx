import './latest.css'
import EpisodeList from 'components/EpisodeList'

export default function LatestSection() {
    return (
        <section className='LATEST-wrapper'>
            <div className='LATEST-header'>
                <h1 className='LATEST-header_title'>
                    Latest episodes
                </h1>
                <div className='BUTTON LATEST-header_view_all'>
                    <a href='/'>View all episodes</a>
                </div>
            </div>

            <EpisodeList />
        </section>
    )
}