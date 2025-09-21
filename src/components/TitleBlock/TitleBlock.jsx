import TITLEIMG from 'images/title.png'
import LRCORNERIMG from 'images/lr-corner.png'
import Image from 'components/Image'

import './title-block.css'
import TitleText from './TitleText'
import TitleSocials from './TitleSocials'

export default function TitleBlock() {
    return  (
        <div className='TITLE-wrapper'>
            <div className='TITLE-img_wrapper'>
                <Image src={LRCORNERIMG} className="TITLE-corner_img" alt='left corner' />
                <Image src={TITLEIMG} className='TITLE-img' alt='post' />
            </div>
            <div className='TITLE-text_wrapper'>
                <TitleText />
                <TitleSocials />
            </div>
        </div>
    )
}