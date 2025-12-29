import './ShinyCard.css'
import SimpleButton from '../SimpleButton/SimpleButton.tsx'

const card = () => {
  return (
    <>
      <div className={'shiny-card'}>
        <section className={'shiny-card-img'}>
          <img decoding="async" src={'/treasure_chest_pixel.png'} alt={'chest'} title={'chest'}></img>
        </section>
        <section className={'shiny-card-cta'}>
          <SimpleButton flavor="warning" roundness="pill" opacity="60" size="s"></SimpleButton>
        </section>
      </div>
    </>
  )
}

export default card;
