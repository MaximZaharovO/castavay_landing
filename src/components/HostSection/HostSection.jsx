import Image from 'components/Image'
import ForwardImg from 'images/forward.png'
import HostImg from 'images/host.png'

import './host.css'
import { Link } from 'react-router'
import HostInfo from './HostInfo';

export default function HostSection({link}) {
    return (
        <section className="HOST-wrapper">
            <div className="HOST-info">
                {link && <Link to={link.to}>
                    <div className="HOST-info_forward">
                        <Image src={ForwardImg} />
                    </div>
                    <div className="HOST-info_suttitle">
                        {link.text}
                    </div>
                </Link>}
                <HostInfo />
            </div>
            <Image src={HostImg} alt="host" />
        </section>
    )
}

