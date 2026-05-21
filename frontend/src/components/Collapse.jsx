import '../styles/Collapse.css'
import { useState } from 'react'


function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    const icon = isOpen
        ? <img src="/DropIcon.png" alt="Icône du collapse"
            className={isOpen ? "collapse-icon collapse-icon-open" : "collapse-icon"}
        />
        : <img src="/DropIcon.png" alt="Icone de flèche vers le haut" />;
 
    return (
        <section className="collapse">
            <h2 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                {title} {icon}
            </h2>
            {isOpen && (
                <div className="collapse-content">
                    {content}
                </div>
            )}
        </section>
    )
}

export default Collapse