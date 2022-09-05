import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 16px;

  .btnMore{
   color: #6959CD;
   cursor: pointer;
  }

  .btnMore:hover{
   color: #836FFF;
  }

  .contentBtnMore{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .contentpicker{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
  }

  .pickerDATE{
    background-color: #cdcdcd;
    width: 100%;
    height:52px;
    border-radius: 20px;
    padding: 10px;
  }
  .PickerIN{
    border:0;
  }
`
