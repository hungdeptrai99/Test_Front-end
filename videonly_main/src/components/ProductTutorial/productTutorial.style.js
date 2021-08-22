import styled from 'styled-components'

export const WrapperProduct = styled.div`
  width: 33.33%;
  flex: 0 0 33.33%;
  max-width: 33.33%;
  padding-right: 20px;
  margin: 15px 0;
`
export const ProductTutorial = styled.div`
  position: relative;
`
export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`
export const SubTitle = styled.div`
  position: absolute;
  top: 40px;
  left: 28px;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`
export const ImageArrow = styled.img`
  position: absolute;
  top: 30px;
  right: 27px;
  object-fit: contain;
`
export const ProductTitle = styled.div`
  width: 250px;
  position: absolute;
  top: 74px;
  left: 29px;
  font-size: 30px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #222;
  span {
    display: block;
  }
`
