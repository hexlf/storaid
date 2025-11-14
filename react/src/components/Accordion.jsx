import React, { useState } from 'react'


const Accordion = ({item}) => {
    const [isOpen, SetIsOpen] = useState(false)

    const toggleAccordion = () => {
        SetIsOpen(!isOpen)
    }

    return (
    <div className='Accordion-item'>
        <div className={`Accordio-titlebar ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
            <h3 className=''>{item.title}</h3>
            <div className='Accordion-btn'>
                <i className={`item-icon fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
        </div>
        {
            isOpen && (
                <p className={`item-content ${isOpen ? 'active' : ''}`}>
                    {item.description}
                </p>
            )
        }
    </div>
  )
}

export default Accordion