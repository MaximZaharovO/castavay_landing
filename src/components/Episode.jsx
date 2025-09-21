export default function Episode({episode}) {
    return (
        <div className="EPISODE-wrapper">
            <div style={{background: `url(${episode.imageUrl}) center center/cover no-repeat`}} className="EPISODE-img" />
            <div>
                <div className="EPISODE-types">
                    {episode.types.map(eType => <div className="EPISODE-types_item">{eType}</div>)}
                </div>
                <div className="EPISODE-number">Episode {episode.episode}</div>
                <h2 className="EPISODE-title">{episode.title}</h2>
                <p className="EPISODE-subtitle">{episode.description}</p>
                <div className="BUTTON">
                    <a href='/'>View Episode Details</a>
                </div>
            </div>
        </div>
    )
}