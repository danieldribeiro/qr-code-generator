import React from 'react'

export const FrameText = ({activeAccordion, handleFrameText}) => {
    return (
        <div className= {activeAccordion == 'frame-text' ? 'input-wrapper' : 'unshow'}>
            <input type="text" placeholder='Your text here' onChange={handleFrameText}/>
        </div>
    )
}
