import {ReactComponent as FaceSVG} from 'images/socials/facebook.svg'
import {ReactComponent as InstSVG} from 'images/socials/instagram.svg'
import {ReactComponent as TwitSVG} from 'images/socials/twitter.svg'
import './socials.css'

export function Socials() {
    return (
        <div className='socials__icons'>
            <a href='/' className='socials__icons_item'>
                <FaceSVG/>
            </a>
            <a href='/' className='socials__icons_item'>
                <InstSVG/>
            </a>
            <a href='/' className='socials__icons_item'>
                <TwitSVG/>
            </a>
        </div>
    )
}