import styled from 'styled-components'

export const MemeBox = styled.div`
  background-image: ${props => props.imageUrl};
  height: 380px;
  width: 100%;
  background-size: cover;
  margin-bottom: 30px;
`
export const TopAndBottomText = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-family: 'Open Sans';
`
