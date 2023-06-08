import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;

    label {
      font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.FONT};
      font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.WEIGHT};
      font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.SIZE};
      line-height: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.LINE_HEIGHT};

      color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_400};
    }

      :focus {
        outline: #FFFFFF 0.5px solid;
      }

    .items {
      min-height: 48px;
      width: 100%;
      background: ${({ theme }) => theme.COLORS_DARK.DARK_800};
      border: none;
      border-radius: 8px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;

      padding: 4px 14px;

      color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

      font-family: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.FONT};
      font-weight: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.WEIGHT};
      font-size: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.SIZE};
      line-height: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.LINE_HEIGHT};
    } 
`