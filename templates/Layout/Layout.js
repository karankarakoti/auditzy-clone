import { Box } from 'atoms'
import React from 'react'
import { Footer, Header} from '../../organisms'

export const Layout = ({ children }) => {
  return (
    <Box 
      maxWidth='100vw' 
      maxHeight='100vh' 
      //overflowX='hidden'
    >
        <Header/>
        {children}
        <Footer/>
    </Box>
  )
}