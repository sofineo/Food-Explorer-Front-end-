import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
width: 100%;

.content {
  width: 100%;
  max-width: 700px;
  padding: 10px 32px 53px;

  margin: 0 auto;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  border: none;

  legend {
    width: 100%;
    font-family: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.FONT};
    font-weight: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.WEIGHT};
    font-size: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.SIZE};
    line-height: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.LINE_HEIGHT};
  }

  .column3 {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .column2 {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .input-wrapper {
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

    >input, select, textarea {
      height: 48px;
      width: 100%;
      background: ${({ theme }) => theme.COLORS_DARK.DARK_800};
      border: none;
      border-radius: 8px;
      display: flex;
      gap: 8px;
      padding: 12px 14px;

      color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

      font-family: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.FONT};
      font-weight: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.WEIGHT};
      font-size: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.SIZE};
      line-height: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.LINE_HEIGHT};

      :focus {
        outline: #FFFFFF 0.5px solid;
      }
    }

    .category {
    }

    select {
      background: ${({ theme }) => theme.COLORS_DARK.DARK_900};
      appearance: none;
    }

    select:focus {
      outline: #FFFFFF 0.5px solid;
    }

    select:hover {
      cursor: pointer;
    }

    .select-svg {
      position: absolute;
      right: 12px;
      bottom: 7px;
      pointer-events: none;
    }

 

    textarea {
      height: 172px;
      resize: none;
      overflow: scroll;
    }


  }

  .save-button {
    display: flex;
    justify-content: center;
    height: 48px;
    max-width: 361px;
    margin: 0 auto;
    width: 100%;
    background: ${({ theme }) => theme.COLORS_TINTS.TOMATO_400};
    border: none;
    border-radius: 8px;
    display: flex;
    padding: 12px 0;
    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

    font-family: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.FONT};
    font-weight: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.WEIGHT};
    font-size: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.SIZE};
    line-height: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.LINE_HEIGHT};
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
    max-width: 1122px;
    padding-bottom: 10px;
    overflow-y: scroll;
  }

  .form {
    gap: 32px;
    align-items: flex-end;
    
    .column3 {
      flex-direction: unset;
      width: 100%;

      .name {
        min-width: 229px;
        width: 55%;
      }
      
      .category {
        min-width: 210px;
        width: 35%;
      }

      .select-svg {
        bottom: 10px; 
      }

      label .file {
        min-width: 229px;
      }

 
    }
  
    .column2 {
      flex-direction: unset;
      width: 100%;

      .ingredients-items {
        width: 80%;
      }

      .price {
        width: 20%;
      }
      
    }

    .textarea {
      width: 100%;
    }

    .save-button {
      width: 172px;
      margin: 0;
    }
  }
}
`

export const Avatar = styled.div`
label {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.FONT};
    font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.WEIGHT};
    font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.SIZE};
    line-height: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.LINE_HEIGHT};

    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_400};

    .file {
      height: 48px;
      width: 100%;
      background: ${({ theme }) => theme.COLORS_DARK.DARK_800};
      border-radius: 8px;
      display: flex;
      gap: 8px;
      padding: 12px 32px;

      color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

      font-family: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.FONT};
      font-weight: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.WEIGHT};
      font-size: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.SIZE};
      line-height: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.LINE_HEIGHT};

      svg {
        height: 24px;
        width: 24px;
      }
    }
}

label:hover {
        cursor: pointer;
}

input {
    display: none;
}

`