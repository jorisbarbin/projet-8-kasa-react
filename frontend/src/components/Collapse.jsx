import '../styles/Collapse.css'
import { useState } from 'react'


function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="collapse">
            <button className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img
                    className={`collapse-image ${isOpen ? "collapse-icon-open" : ""}`}
                    src="/DropIcon.png"
                    alt="Icône du collapse"
                />
            </button>
            {isOpen && (
                <div className="collapse-content">
                    {content}
                </div>
            )}
        </section>
    )
}

export default Collapse