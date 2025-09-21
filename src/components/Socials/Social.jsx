import {ReactComponent as SOCIAL1SVG} from '../../images/socials/Socials1.svg'
import {ReactComponent as SOCIAL2SVG} from '../../images/socials/Socials2.svg'
import {ReactComponent as SOCIAL3SVG} from '../../images/socials/Socials3.svg'
import {ReactComponent as SOCIAL4SVG} from '../../images/socials/Socials4.svg'
import {ReactComponent as SOCIAL5SVG} from '../../images/socials/Socials5.svg'
import './socials.css'

export function Socials() {
    return (
        <div className='socials__icons'>
            <a href='/' className='socials__icons_item'><SOCIAL1SVG/></a>
            <a href='/' className='socials__icons_item'><SOCIAL2SVG/></a>
            <a href='/' className='socials__icons_item'><SOCIAL3SVG/></a>
            <a href='/' className='socials__icons_item'><SOCIAL4SVG/></a>
            <a href='/' className='socials__icons_item'><SOCIAL5SVG/></a>
        </div>
    )
}