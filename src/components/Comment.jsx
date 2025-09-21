import {ReactComponent as StarSVG} from 'images/star.svg'

export default function Comment({rating}) {
    const maxRating = 5
    const ratingStars = Array.from(Array(maxRating).keys())
        .map(x => x < rating)

    return (
        <div className="COMMENT-wrapper">
            <div className="COMMENT-rating">
                <div className="COMMENT-rating_bar">
                    {ratingStars.map(active => (
                        <StarSVG fill={active ? 'var(--yellow)' : 'red'} />
                    ))}
                </div>
            </div>
            <div className="COMMENT-text">I can’t recommend this podcast enough</div>
            <div className="COMMENT-author">Betty Lacey</div>
        </div>
    )
}