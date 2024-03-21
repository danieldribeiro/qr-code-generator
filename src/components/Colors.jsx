import WheelColor from './WheelColor'

export const Colors = ({handleColor, activeAccordion}) => {
    return (
        <>
            <div className= {activeAccordion == 'colors' ? 'colors-wrapper' : 'unshow'}>
                <WheelColor handleColor={handleColor}/>
            </div>

        </>
    )
}
