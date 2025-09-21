import Image from 'components/Image'
import LBCorner from 'images/lb-corner.png'

export default function LRContainer({children}) {
    return (
        <div className='lb-corner_container'>
            <Image className="lb-corner" src={LBCorner} alt="left bottom corner" />
            {children}
        </div>
    )
}