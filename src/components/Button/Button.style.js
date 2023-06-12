import styled, { css } from 'styled-components'
// import styled from 

export const ButtonWrapper = styled.button`
  width: ${props=>(props.customWidth ? props.customWidth: '105px')};
  height: ${props=>(props.customHeight ? props.customHeight: '36px')};
  border-radius: ${props=>(props.customBorderRadius ? props.customBorderRadius: '4px')};
  padding: 6px 16px 6px 16px;
  border: none;
  font-size: 13px;
  color:#FEFEFE;
  cursor:pointer;
  font-family:'Inter', sans-serif;

  ${(props) =>{
        if(props.variant === 'primary'){
            return css`
            background-color:#282828;
            &:hover{ background-color: #2E2E2E;}
            &:focus{border:1px solid #464646;
            background-color:#2E2E2E;
            &:disabled{
                background-color:#363636;
                color:#6F6F6F
            }    
        }
            `;
            
        }

        if(props.variant === 'secondary'){
            return css`
            background-color:#1A8453;
            &:hover{ background-color: #177348;}
            &:focus{border:1px solid #1A8453;
            background-color: #177348;
            }
            &:disabled{
                background-color:#177348;
                color:#6F6F6F
            }
            `; 
        }


        if(props.variant === 'primary disabled'){
                return css`
                background-color:#363636;
                opacity: 0.7;
                `
        }


        if(props.variant === 'secondary disabled'){
            return css`
                background-color:rgba(23, 115, 72, 1);
                opacity: 0.7;`
        }


        if(props.variant === 'primary focused'){
            return css`
            border:1px solid #464646;
            background-color:#2E2E2E;
            `
        }

        if(props.variant === 'secondary focused'){
            return css`
            border:1px solid #1A8453;
            background-color:#177348;
            `
        }

        if(props.variant === 'primary hover'){
            return css`
            background-color:#282828;
            `
        }

        if(props.variant === 'secondary hover'){
            return css`
             background-color: #177348;
            `
        }
    }
  }
`