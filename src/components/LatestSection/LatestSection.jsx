import Episode from 'components/Episode'
import './latest.css'

export default function LatestSection() {
    return (
        <section className='LATEST-wrapper'>
            <div className='LATEST-header'>
                <h1 className='LATEST-header_title'>
                    Latest episodes
                </h1>
                <div className='BUTTON LATEST-header_view_all'>
                    View all episodes
                </div>
            </div>

            <Episode />
        </section>
    )
}