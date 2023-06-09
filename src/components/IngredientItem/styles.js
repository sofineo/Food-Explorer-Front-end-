import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  width: fit-content;
  height: 32px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;

  padding: 10px 16px;
  
  gap: ${({ isNew }) => isNew ? '0px' : '3px' };

  background: ${({ theme, isNew }) => isNew ? 'none' : theme.COLORS_LIGHT.LIGHT_600};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS_LIGHT.LIGHT_600}}` : 'none'};
  
  input {
    max-width: fit-content;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

    text-align: center;

    font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.FONT};
    font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.WEIGHT};
    font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.SIZE};
    line-height: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.LINE_HEIGHT};
  }

  button {
    display: flex;
    align-items: center;

    width: fit-content;
    height: fit-content;

    background: none;
    border: none;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS_LIGHT.LIGHT_600 : theme.COLORS_LIGHT.LIGHT_100};

    svg {
      height: 16px;
      width: 16px;
    }

    :hover {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS_TINTS.CAKE_100 : theme.COLORS_TINTS.TOMATO_100}};
    }
`