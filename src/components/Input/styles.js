import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

margin-bottom: 36px;

border-radius: 5px;
gap: 14px;
padding: 12px;

background: ${({ theme }) => theme.COLORS_DARK.DARK_900};

input {
  min-width: 245px;
  background: none;
  border: none;

  font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.FONT};
  font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.WEIGHT};
  font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.SIZE};
  line-height: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.LINE_HEIGHT};
  color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};;
}

@media (min-width: 850px) {
  width: clamp(220px, 260px + 20vw, 581px);

  margin-bottom: unset;
}


`