import './SimpleButton.css' 

interface Props {
  flavor?: 'primary' | 'secondary' | 'success';
  roundness?: 'rounded' | 'pill';
  size?: 's' | 'm' | 'l';
  opacity?: int;
  whiteBg?: bool;
}

const button = ({flavor = 'primary', roundness = 'rounded', size = 's', opacity = 1, whiteBg}: Props) => {
  return (
    <>
      <button className={'sb sb-' + flavor + ' ' + roundness + ' size-' + size + ' opacity-' + opacity + ' ' + (whiteBg ? 'white-bg' : '')}>
        <span>WONDERFUL BUTTON</span>
      </button>
    </>
  )
}

export default button;
