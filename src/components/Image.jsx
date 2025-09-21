export default function Image({className, alt, src}) {
    return (
        <div className={className}>
            <img style={{width: '100%'}} alt={alt} src={src} />
        </div>
    )
}