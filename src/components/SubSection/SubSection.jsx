import './sub.css'
import LRContainer from './LRContainer'

export default function SubSection() {
 return (
    <div className='SUB-wrapper'>
        <LRContainer>

            <div className='SUB-container'>

                <div className='SUB-title'>
                    <div className='SUB-title-sut'>
                        Email Newsletter
                    </div>
                    <div className='SUB-title-main'>
                        Subscribe for updates
                    </div>
                </div>

                <div className='SUB-form'>
                    <form>
                        <input className='SUB-form_input' placeholder='Name' />
                        <input className='SUB-form_input' placeholder='Email' />
                        <button className='BUTTON SUB-form_submit' type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </LRContainer>
    </div>
 )
}