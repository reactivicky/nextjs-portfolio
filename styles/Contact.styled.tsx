import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  margin: 2rem 0;
  padding: 1.5rem;

  @media (min-width: 1044px) {
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

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Mulish', sans-serif;

  @media (min-width: 1044px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 6rem;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
`

export const DetailsAddress = styled.div`
  background: #222222;
  padding: .6rem 1.5rem;
  border-radius: .5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: .9rem;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;

`

export const SubmitBtn = styled(motion.button)`
  align-self: flex-start;
  font-size: .9rem;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  textarea {
    resize: none;
    font-family: 'Mulish', sans-serif;
  }

  input, textarea {
    background-color: #222222;
    border: none;
    border-radius: .5rem;
    padding: .8rem 1.5rem;
    font-size: .9rem;
    color: white;
  }

  input::placeholder, textarea::placeholder {
    color: #a2a2a2;
  }

  span {
    color: #eb4a4c;
  }
`