import Image from 'components/Image'
import ForwardImg from 'images/forward.png'
import HostImg from 'images/host.png'


import './host.css'

export default function HostSection() {
    return (
        <section className="HOST-wrapper">
            <div className="HOST-info">
                <div className="HOST-info_forward">
                    <Image src={ForwardImg} />
                </div>
                <div className="HOST-info_suttitle">
                    Meet your host
                </div>
                <div className="HOST-info_title">
                    Jacob Paulaner
                </div>

                <p className="HOST-info_description">
                    Jacob has a background in audio engineering, and has been podcasting since the early days.
                </p>
                <p className="HOST-info_description">
                    He’s here to help you level up your game by sharing everything he’s learned along the way.
                </p>
            </div>
            <Image src={HostImg} alt="host" />
        </section>
    )
}