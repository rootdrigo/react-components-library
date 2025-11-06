import './SimpleButton.css' 

  interface Props {
    flavor: string;
  }

  const SB = ({flavor}: Props) => {
    return (
      <>
        <button className={'sb sb-' + flavor + ' pill size-s'}>
          <span>text</span>
        </button>
      </>
    )
  }

export default SB;
