'use client'
import React from 'react'

const Partner = () => {
  return (
    <div className='donate-container'>
        <h3 className='donate-title'>Donate</h3>

        <input type={'text'} placeholder='First name' className='donate-input' />
        <input type={'text'}  placeholder='Last name' className='donate-input' />
        <input type={'email'}  placeholder='Email address' className='donate-input' />
        <textarea placeholder='Message'>

        </textarea>

        <button className='donate-btn'>Send Message</button>
    </div>
  )
}

export default Partner