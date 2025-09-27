import './project-link.css'

export default function ProjectLink() {
    const templateLink = "https://www.figma.com/file/Fn88HQzfmrE7xCHG0yPsEW/Castaway?type=design&node-id=0%3A1&t=baI183eUNAoIr3nW-1";
    const gitLink = "https://github.com/MaximZaharovO/castavay_landing"

    return (
        <div className="project-link">
            <div>Верстка по макету <a target="_blank" href={templateLink}>figma</a></div>
            <div>Исходники <a target="_blank" href={gitLink}>github</a></div>
        </div>
    )
}