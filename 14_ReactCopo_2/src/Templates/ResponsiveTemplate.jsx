import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

/*
    <ResponsiveTemplate component = {component} mobileComponent = {mobileComponent}
    props:
    component
    mobileComponent
*/

export default function ResponsiveTemplate(props) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    let Component = props.component;
    if(screenWidth <= 768 && props.mobileComponent) {
        Component = props.mobileComponent;
    }
    useEffect(() => {
        window.onload = () => {
            setScreenWidth(window.innerWidth);
        }
        window.onresize = () => {
            setScreenWidth(window.innerWidth);
        }
        return() => {
            window.removeEventListener('load', window.onload)
            window.removeEventListener('resize', window.onresize)
        }

    }, [])

    return (
        <Component /> 
    )
}
