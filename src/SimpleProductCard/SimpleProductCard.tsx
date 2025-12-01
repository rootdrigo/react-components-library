import './SimpleProductCard.css'
import SimpleButton from '../SimpleButton/SimpleButton.tsx'

interface Props {
  header: string;
  description?: string;
  demo: int;
  imgURL: string;
}

const card = ({header, description, demo, imgURL}: Props) => {
  return (
    <>
      <div className={'spc'}>
        <section className={'spc-img'}>
          <img decoding="async" src={imgURL} alt={header} title={header}></img>
        </section>
        <section className={'spc-header'}>
          <h2>{header}</h2>
        </section>
        <section className={'spc-desc'}>
          <p>{description}</p>
        </section>
        <section className={'spc-demo-text'}>
          <strong>{'$' + demo}</strong>
        </section>
        <section className={'spc-cta'}>
          <SimpleButton flavor="primary" roundness="pill" opacity="20" size="s"></SimpleButton>
        </section>
      </div>
    </>
  )
}

export default card;
