import preview from "images/previews/preview1.png"

export default function Episode() {
    const mock_types = ["Gear", "Test", "Talking"]
    
    return (
        <div className="EPISODE-wrapper">
            <div style={{background: `url(${preview})`}} className="EPISODE-img" />
            <div>
                <div className="EPISODE-types">
                    {mock_types.map(x => <div className="EPISODE-types_item">{x}</div>)}
                </div>
                <div className="EPISODE-number">Episode 21321</div>
                <h2 className="EPISODE-title">Title</h2>
                <p className="EPISODE-subtitle">description</p>
                <div className="BUTTON">button</div>
            </div>
        </div>
    )
}