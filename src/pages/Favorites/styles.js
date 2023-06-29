import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`

.button-back {
  padding: 10px 0 0 30px ;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 30px;

  h1 {
    padding: 10px 0px 0px 35px;
    margin-bottom: 29px;
    font-family: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.FONT};
    font-weight: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.WEIGHT};
    font-size: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.SIZE};
    line-height: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.LINE_HEIGHT};
  }

  .favorites {
    display: grid;
    gap: 32px;
  }
}

@media (min-width: 850px) {
height: 100vh;
display: grid;

grid-template-rows: 96px auto 77px;
grid-template-areas: 'header'
'page'
'footer';


  .page {
    grid-area: 'page';
    width: 100%;
    max-width: 1122px;

    justify-self: center;
  }

  .content {
    overflow-y: scroll;

    max-width: 1122px;

    margin-top: 42px;
    gap: 45px;

    padding: 0;

    .favorites {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    padding: 0 35px;
  }
  }

}

`