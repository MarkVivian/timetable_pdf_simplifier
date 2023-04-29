import React from 'react'
import Deposit from './Deposit'
import Withdraw from './Withdraw'

function Money() {
  return (
    <div className='flex'>
        <Deposit />
        <Withdraw />
    </div>
  )
}

export default Money