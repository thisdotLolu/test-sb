import React from 'react'
import { ButtonWrapper } from './Button.style'
import PropTypes from 'prop-types'


const Button = ({variant,children,customWidth, customHeight, customBorderRadius,...restProps}) => {
  return (
    <div>
        <ButtonWrapper
        variant={variant} 
        {...restProps}
        customWidth={customWidth} 
        customHeight={customHeight}
        customBorderRadius={customBorderRadius}
        >
            {children}
        </ButtonWrapper>
    </div>
  )
}

Button.propTypes={
    variant: PropTypes.string,
    children:PropTypes.node
}

Button.defaultProps={
    variant:null,
    children:null
}

export default Button