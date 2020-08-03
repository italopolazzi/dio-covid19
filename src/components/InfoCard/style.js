import styled from 'styled-components'
import tw from 'twin.macro'

const StyledInfoCard = styled.div.attrs({
  className: `info-card`
})`

  .even-row > :first-child {
    order: 1
  }
  
  & > article:before {
    content: "";
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    margin: 0 auto;
    background: transparent;
    border-top: 100px solid ${props => props.prevColor || 'transparent'};
    border-right: 100px solid transparent;
    border-bottom: 100px solid transparent;
    border-left: 100px solid transparent;
  }

`

export default StyledInfoCard