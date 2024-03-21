import React, { useState, useRef } from 'react';
import './App.scss';
import { Colors } from './components/Colors';
import { Markers } from './components/Markers';
import { Frames } from './components/Frames';
import { Accordion } from './components/Accordion';
import { FrameText } from './components/FrameText';
import { FrameIcon } from './components/FrameIcon';

function App() {
  const [endpoint, setEndpoint] = useState('');
  const [activeAccordion, setActiveAccordion] = useState(false);
  const input = useRef(null)
  console.log(input)
  
  const token = 'h-qgzrY0iKNFf5VHrvOrxx8HUM0Y_ILknDjqzqYkanBMsQtCdlmefKtUi6FNRyAA'
  const url = `https://api.qr-code-generator.com/v1/create?access-token=${token}`
  const linkedIn = 'https://www.linkedin.com/in/daniel-diego-ribeiro/'
  
  //Manipulação do endpoint
  const handleUrl = (e) => {
    const qrCodeText = e.target.value;
    const width = 250

    qrCodeText == '' ? 
    setEndpoint('') :
    setEndpoint(`${url}&qr_code_text=${qrCodeText}&image_width=${width}`);
  }

  //Manipulação de cores
  const handleColor = (color) => {
    const hexColor = color.hex.slice(1)
    setEndpoint(`${endpoint}&foreground_color=%23${hexColor}&frame_color=%23${hexColor}`);
  };

  //Manipulação dos marcadores
  const handleMarkers = (e) => {
    const markers = `&marker_left_template=${e.target.alt}&marker_right_template=${e.target.alt}&marker_bottom_template=${e.target.alt}`
    setEndpoint(`${endpoint}${markers}`)
  }

  // Manipulação de frames
  const handleFrames = (e) => {
    const frame = e.target.alt
    setEndpoint(`${endpoint}&frame_name=${frame}`)
  }

  //Manipulação de accordions
  const handleAccordion = (element) => {
    setActiveAccordion(element)

    if(activeAccordion && activeAccordion.id == element.id){
      return
    } else {
      setActiveAccordion(element)
    }
  }

  // Manipulação de texto do frame
  const handleFrameText = (e) => {
    setEndpoint(`${endpoint}&frame_text=${e.target.value}`)
  }

  //Manipulação de ícones do frame
  const handleFrameIcon = (e) => {
    const icon = e.target.alt
    setEndpoint(`${endpoint}&frame_icon_name=${icon}`)
  }

  //Manipulação formato do arquivo
  const handleDownloadFormat = (e) => {
    const format = e.target.value
    setEndpoint(`${endpoint}&image_format=${format}`)
  }

  //Manipulação download
  const handleDownload = () => {
    if (input.current.value == '') return
    else {
      const boolean = '1'
      window.open(`${endpoint}&download=${boolean}`, '_blank');
    }
  }

  return (
    <>
      <section className='container'>
        <div className='left-container'>
          <div className='qr-code-container'>
            {endpoint == '' ? 
              <img src={`${url}&qr_code_text=${linkedIn}`} alt="qr code"/> :
              <img src={endpoint} alt="qr code"/>
            }
          </div>

          <div className='download-option-wrapper'>
            <select name="dowload-option" onChange={handleDownloadFormat}>
              <option value="SVG">SVG</option>
              <option value="PNG">PNG</option>
              <option value="JPG">JPG</option>
            </select>
          </div>

          <div className='download-wrapper' onClick={handleDownload}>
            <img src="data:image/png;base64,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" alt="" className='download-icon'/>
            <strong>Download your QR Code</strong>
          </div>
        </div>

        <div className='customizations-container'>
          <label htmlFor='link'>Enter your link here
            <input type="text" id='link' onChange={handleUrl} ref={input} required/>
          </label>

          <Accordion
            title={'Colors'}
            iconSrc={'https://icons.iconarchive.com/icons/icons8/android/512/Editing-Bg-Color-icon.png'}
            id={'colors'}
            activeAccordion={activeAccordion} 
            handleAccordion={handleAccordion}
            children={<Colors handleColor={handleColor} activeAccordion={activeAccordion.id}/>}
          />

          <Accordion
            title={'Markers'}
            iconSrc={'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version1.svg'}
            id={'markers'}
            activeAccordion={activeAccordion} 
            handleAccordion={handleAccordion}
            children={<Markers handleMarkers={handleMarkers} activeAccordion={activeAccordion.id}/>}
          />

          <Accordion
            title={'Frames'}
            iconSrc={'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/frames/bottom-frame.svg'}
            id={'frames'}
            activeAccordion={activeAccordion} 
            handleAccordion={handleAccordion}
            children={<Frames handleFrames={handleFrames} activeAccordion={activeAccordion.id}/>}
          />

          <Accordion
            title={'Frame text'}
            iconSrc={'https://cdn-icons-png.flaticon.com/512/3721/3721901.png'}
            id={'frame-text'}
            activeAccordion={activeAccordion} 
            handleAccordion={handleAccordion}
            children={<FrameText handleFrameText={handleFrameText} activeAccordion={activeAccordion.id}/>}
          />

          <Accordion
            title={'Frame icon'}
            iconSrc={'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/mobile.svg'}
            id={'frame-icon'}
            activeAccordion={activeAccordion} 
            handleAccordion={handleAccordion}
            children={<FrameIcon handleFrameIcon={handleFrameIcon} activeAccordion={activeAccordion.id}/>}
          />

        </div>
      </section>
    </>
  );
}

export default App;
