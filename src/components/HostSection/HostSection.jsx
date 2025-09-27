import Image from 'components/Image'
import ForwardImg from 'images/forward.png'
import HostImg from 'images/host.png'
import routeList from "shared/data/routes";


import './host.css'
import { Link } from 'react-router'

export default function HostSection() {
    return (
        <section className="HOST-wrapper">
            <div className="HOST-info">
                <div className="HOST-info_forward">
                    <Link to={routeList.HOST}><Image src={ForwardImg} /></Link>
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