import React, { useState } from 'react'

export const Accordion = ({activeAccordion, handleAccordion, title, iconSrc, children, id}) => {
    
    console.log(activeAccordion != false ? 'oi' : 'tchau')

    return (
        <div 
            className = {activeAccordion.id != '' ? 'accordion-show' : 'accordion'} 
            onClick = {() => handleAccordion({id})}
        >
            <header>
                <div className='title'>
                    <img src={iconSrc} alt="Color icon" />
                    <h3>{title}</h3>
                </div>
                {activeAccordion == false ? 
                    <img src="https://www.svgrepo.com/show/93813/up-arrow.svg" alt="" />:
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25623.png" alt="Down icon" />
                }
            </header>
            {children}
        </div>
    )
}
