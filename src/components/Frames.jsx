import React from 'react'

export const Frames = ({handleFrames, activeAccordion}) => {

    const frames = [
        {
            name: 'no-frame',
            src: 'https://www.svgrepo.com/show/369658/x-small.svg'
        },
        {
            name: 'bottom-frame',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/frames/bottom-frame.svg'
        },
        {
            name: 'bottom-tooltip',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/frames/bottom-tooltip.svg'
        },
        {
            name: 'top-header',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/frames/top-header.svg'
        }
    ]

    return (
        <div className={activeAccordion == 'frames' ? 'frames-container' : 'unshow'}>
            {frames.map((frame, i) => {
                return (
                    <div key={i} className='frame-wrapper'>
                        <img src={frame.src} alt={frame.name} onClick={handleFrames}/>
                    </div>
                )
            })}
        </div>
    )
}
