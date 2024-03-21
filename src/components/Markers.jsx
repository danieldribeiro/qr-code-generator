import React from 'react'

export const Markers = ({handleMarkers, activeAccordion}) => {

    const styles = [
        {
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version1.svg',
            version: 'version1',
        },
        {
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version9.svg',
            version: 'version9',
        },
        {
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version11.svg',
            version: 'version11',
        },
        {
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version12.svg',
            version: 'version12',
        },
        {
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version13.svg',
            version: 'version13',
        },
        {
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version15.svg',
            version: 'version15',
        },
        {
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version16.svg',
            version: 'version16',
        }
    ]

    return (
        <>
            <div className={activeAccordion == 'markers' ? 'styles-container' : 'unshow'}>
                {styles.map((style, i) => {
                    return (
                        <div key={i} className='style-wrapper' onClick={handleMarkers}>
                            <img src={style.src} alt={style.version} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
