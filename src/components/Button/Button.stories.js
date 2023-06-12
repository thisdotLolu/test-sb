import Button from "./Button";



export default {
    title:'Button',
    component: Button,
}

const Template =(args)=> <Button {...args}/>


export const Primary = Template.bind({});


Primary.args ={
    label:'button',
    variant:'primary',
    children:'Button CTA'
}

export const Secondary = Template.bind({});


Secondary.args ={
    label:'button',
    variant:'secondary',
    children:'Button CTA'
}



export const PrimaryDisabled = Template.bind({});


PrimaryDisabled.args = {
    // label:'button',
    variant:'primary disabled',
    children:'Button CTA'
}


export const SecondaryDisabled = Template.bind({});


SecondaryDisabled.args = {
    // label:'button',
    variant:'secondary disabled',
    children:'Button CTA'
}



export const PrimaryFocused = Template.bind({});


PrimaryFocused.args = {
    // label:'button',
    variant:'primary focused',
    children:'Button CTA'
}


export const SecondaryFocused = Template.bind({});


SecondaryFocused.args = {
    // label:'button',
    variant:'secondary focused',
    children:'Button CTA'
}

export const PrimaryHover = Template.bind({});


PrimaryHover.args = {
    // label:'button',
    variant:'primary hover',
    children:'Button CTA'
}


export const SecondaryHover = Template.bind({});


SecondaryHover.args = {
    // label:'button',
    variant:'secondary hover',
    children:'Button CTA'
}


