import React from 'react'
import { useFetcher } from 'react-router-dom'

export default function Home() {
    const data = useFetchData('https://shop.cyberlearn.vn/api/product');
    // Call the hook which returns, current value and the toggler function.
    return (
        <div>Home</div>
    )
}
