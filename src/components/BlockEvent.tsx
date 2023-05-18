'use client'

import { useLayoutEffect } from 'react'


const BlockEvent = () => {
  useLayoutEffect(() => {
    window.onload = function () {
      console.log('onload')

    }
    window.addEventListener('resize', () => {
      console.log('resize')
    })

    window.addEventListener('scroll', () => {
      console.log('scroll')
    })

  }, [])
  
  return null;
}

export default BlockEvent
