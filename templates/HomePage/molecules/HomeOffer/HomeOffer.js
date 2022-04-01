import { Box, Text } from 'atoms'
import { LandingOfferCard } from 'molecules'
import React from 'react'

export const HomeOffer = () => {
    return (
        <Box>
            <Box
                pb='2rem'
            >
                <Box pb='6rem' pt='4rem'>
                    <Text
                        as='h3'
                        fontSize='2rem'
                        textAlign='center'
                        pt='6rem'
                        fontWeight='400'
                        color='rgb(85, 110, 230)'
                    >
                        What more does Auditzy offer 
                    </Text>
                    <Text
                        as='h2'
                        fontSize='4rem'
                        maxWidth='102rem'
                        mx='auto'
                        mt='2rem'
                        fontWeight='600'
                        color='rgb(73, 80, 87)'
                        textAlign='center'
                    >
                       Audit and analyze your Website Speed, Performance, Security, SEO and Best Practices 
                    </Text>
                    <Text
                        as='p'
                        fontSize='1.6rem'
                        textAlign='center'
                        maxWidth='51rem'
                        mx='auto'
                        mt='1.2rem'
                        fontWeight='400'
                        color='rgb(128, 128, 128)'
                    >
                        Try it now and get insights and data that can be used to create a better user experience for website visitors.
                    </Text>
                </Box>

                <Box
                    position='absolute'
                    right='-18.5rem' 
                    top='0'
                    height='40rem'
                    width='40rem'
                    mt='5rem'
                    borderRadius='50%'
                    zIndex='-1'
                    background='rgba(52, 195, 143, 1)'
                />                
            </Box>
            <LandingOfferCard/>
        </Box>
    )
}
