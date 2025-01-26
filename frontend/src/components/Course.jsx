import React from 'react'
import list from '../assets/list.json'
import Cards from './Cards';

function Course() {
    return (
        <>
            <div className='max-w-screen-2xl mx-auto container md:px-20 px-4'>
                <div>
                    <h1 className='mt-20 text-center text-2xl md:text-4xl '>
                        We're delighted to have you <span className='text-pink-500'>Here! :)</span>
                    </h1>
                    <p className='text-center mt-12'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur quia consequuntur cupiditate, quos amet
                        quod odit nostrum ab explicabo? Modi nihil numquam
                        qui necessitatibus quas, et ullam blanditiis facere
                        nemo quam molestias! Possimus porro alias incidunt
                        quis veritatis! Iusto, minima? Ex, odit quis eligendi
                        libero voluptates tempore incidunt necessitatibus
                        deleniti!
                    </p>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        list.map((item)=>(
                            <Cards key = {item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course