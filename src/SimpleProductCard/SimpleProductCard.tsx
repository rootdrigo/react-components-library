import './SimpleProductCard.css'
import SimpleButton from '../SimpleButton/SimpleButton.tsx'

interface Props {
  header: string;
  description?: string;
  demo: int;
}

const card = ({header, description, demo}: Props) => {
  return (
    <>
      <div className={'spc'}>
        <section className={'spc-img'}>
          <img decoding="async" src="https://essential-addons.com/elementor/wp-content/uploads/2020/01/Clasic-Artist.png" alt="Static Product 105" title="Static Product 105"></img>
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
