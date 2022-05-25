import React from 'react'
import './Developer.css'
import Terminal from '../../assets/terminal.png'

const Developer = () => {
  return (
    <div className='developers'>
      <div className='container'>
        <div className='left'>
          <h2>Superpowers for DeFi developers</h2>
          <p>
            Checkout the <span className='blue'>documentation</span>
            , the <span className='blue'>quick start </span>
            or a guide below to integrate your project with thousands
            of tokens and billions in liquidity
          </p>
        </div>
        <div className='right'>
          <img src={Terminal} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Developer