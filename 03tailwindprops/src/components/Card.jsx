import React from 'react'

function Card({ title = "", image = "", desc = "" }) {

    return (
        <div>
            <figure className='rounded-2xl flex bg-slate-900 border border-slate-800'>
                <img className='w-50 rounded-xl' src={image} alt="" />
                <div className='text-left py-5 px-4'>
                    <strong className='flex text-xl font-medium mb-2 line-clamp-1'>{title}</strong>
                    <p className='text-slate-500 line-clamp-2'>{desc}</p>
                </div>
            </figure>
        </div>
    )
}

export default Card