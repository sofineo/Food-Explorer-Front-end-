import { Container } from './styles'

export function Footer() {
  const copyRightSymbol = '\u00A9'
  return (
    <Container>
      <div className="logo">
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_96_6316)">
            <path d="M23.6574 0L42.4133 10.8287V32.4862L23.6574 43.3149L4.90155 32.4862V10.8287L23.6574 0Z" fill="currentColor"/>
            <path d="M5.40155 11.1174L23.6574 0.57735L41.9133 11.1174V32.1975L23.6574 42.7375L5.40155 32.1975V11.1174Z" stroke="black"/>
            </g>
            <defs>
            <filter id="filter0_d_96_6316" x="0.901367" y="0" width="45.5117" height="51.3149" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_96_6316"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_96_6316" result="shape"/>
            </filter>
            </defs>
        </svg>
        <span>food explorer</span>
      </div>

      <div className="copyrights">
        {copyRightSymbol} <span>2023 - Todos os direitos reservados </span>
      </div>
    </Container>
  )
}