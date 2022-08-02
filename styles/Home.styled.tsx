import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  text-align: center;
`

export const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 2.5rem;
    margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 3.4375rem;
    margin-bottom: 20px;
  }

  @media (min-width: 1400px) {
    font-size: 4.5rem;
    margin-bottom: 20px;
  }

  span {
    color: #eb4a4c;
  }
`

export const Description = styled.div`
  font-size: 1.125rem;
  color: #a2a2a2;
  font-weight: 500;
  display: flex;
  gap: .5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 1.4375rem;
    margin-bottom: 32px;
  }
  
  @media (min-width: 1400px) {
    font-size: 1.5625rem;
    margin-bottom: 40px;
  }
`

export const DescriptionAnimation = styled(motion.span)`
  color: white;
`

export const GetInTouchBtn = styled(motion.button)``