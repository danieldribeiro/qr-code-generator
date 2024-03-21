import React from 'react'

export const FrameIcon = ({handleFrameIcon, activeAccordion}) => {

    const icons = [
        {
            id: 'app',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/app.svg'
        },
        {
            id: 'business',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/business.svg'
        },
        {
            id: 'coupon',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/coupon.svg'
        },
        {
            id: 'event',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/event.svg'
        },
        {
            id: 'facebook',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/facebook.svg'
        },
        {
            id: 'feedback',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/feedback.svg'
        },
        {
            id: 'gallery',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/gallery.svg'
        },
        {
            id: 'mobile',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/mobile.svg'
        },
        {
            id: 'mp3',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/mp3.svg'
        },
        {
            id: 'pdf',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/pdf.svg'
        },
        {
            id: 'rating',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/rating.svg'
        },
        {
            id: 'pdf',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/pdf.svg'
        },
        {
            id: 'social',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/social.svg'
        },
        {
            id: 'url',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/url.svg'
        },
        {
            id: 'vcard',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/vcard.svg'
        },
        {
            id: 'video',
            src: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/video.svg'
        },
    ]

    return (
        <div className= {activeAccordion == 'frame-icon' ? 'colors-wrapper' : 'unshow'}>
            {icons.map((icon, i) => {
                return (
                    <div key={i} className='icon-wrapper' onClick={handleFrameIcon}>
                        <img src={icon.src} alt={icon.id} />
                    </div>
                )
            })}
        </div>
    )
}
