import styled from 'styled-components'

export const FormContainer = styled.form`
  h3 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const TopForm = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const TopFormHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  line-height: 1.3;
  margin-bottom: 2rem;

  h4 {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

const BaseInput = styled.input`
  height: 2.625rem;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  outline: none;
  border: solid 1px ${(props) => props.theme['base-button']};
  margin-bottom: 1rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.3;
  border-radius: 4px;
`

export const ZipInput = styled(BaseInput)`
  width: 200px;
  display: block;
`

export const FormInput = styled(BaseInput)``

export const StreetInput = styled(BaseInput)`
  display: block;
  width: 100%;
`

export const LineOneInput = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1rem;
  position: relative;
`

export const LineTwoInput = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 1rem;
`

export const OptionalTag = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
  position: absolute;
  right: 1rem;
  top: 14px;
`
