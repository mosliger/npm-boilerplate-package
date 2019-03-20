import styled from '@emotion/styled'

const color = {
  primary: '#f00',
  white: '#FFF',
  brownGrey: '#DDD'
}

export default styled.button`
  label: button;
  padding: 6px 14px;
  border-radius: 3px;
  line-height: 1.2;
  font-size: 14px;
  min-width: 40px;
  text-align: center;
  transition: all .4s ease-in-out;
  cursor: pointer;
  opacity: 1;
  outline: none;

  &.primary {
    border: 1px solid ${color.primary};
    color: ${color.white};
    background: ${color.primary};
    &:hover, &:focus {
      box-shadow: 0px 2px 4px ${color.primary};
    }
  }
  &.default {
    background: ${color.white};
    border: 1px solid ${color.brownGrey};
    color: ${color.brownGrey};
    &:hover, &:focus {
      box-shadow: 0px 2px 4px ${color.brownGrey};
    }
  }
  &.border {
    border: 1px solid ${color.primary};
    color: ${color.primary};
    background: ${color.white};
    &:hover, &:focus {
      box-shadow: 0px 2px 4px ${color.primary};
    }
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  &.is-icon {
    > i {
      margin-right: 10px;
    }
  }
`
