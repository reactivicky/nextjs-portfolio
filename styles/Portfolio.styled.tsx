import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  margin: 2rem 0;
  padding: 1.5rem;

  @media (min-width: 1044px) {
    margin: 15vh auto;
    padding: 0;
  }
`

export const Divider = styled.div`
  margin: 1rem 0 3rem 0;
`

export const Heading = styled.h1`
  font-size: 1.6rem;

  @media (min-width: 1044px) {
    font-size: 1.9rem;
  }

  span {
    color: #eb4a4c;
  }
`

export const SliderContainer = styled(motion.div)`
  margin-bottom: 2rem;
  overflow: scroll;
`

export const InnerSlide = styled(motion.div)`
  display: flex;
  gap: 2rem;
`

export const Slide = styled.div`
  height: 300px;
  min-width: 245px;
  border-radius: .8rem;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: .5rem;

  button {
    background-color: transparent;
    border: none;

    svg {
      color: white;
      transition: color .5s ease;

      :hover {
        color: #eb4a4c;
      }
    }
  }
`

export const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SlideNumber = styled.span`
  font-family: 'Mulish', sans-serif;
`

export const ProgressBar = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`

export const ProgressContainer = styled.div`
  height: 1px; 
  width: 100px;
  background-color: #3c3c3c;
`

export const Progress = styled(motion.span)`
  height: 1px; 
  background-color: white;
  display: block;
  opacity: .5;
`

