import { Listens } from "../Socials/Listens";

export default function TitleSocials() {
    return (
        <div className='TITLE-text_socials'>
            <div className='TITLE-text_socials__text'>
                Listen on
            </div>
            <Listens/>
        </div>
    )
}