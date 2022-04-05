import { Box, Flex } from 'atoms'
import React from 'react'

export const WorkflowCard = () => {
    return (
        <Box
            mt={{xs: '4.6rem', md: '11.6rem'}}
            background='url(/images/landing-workflow-bg.png)'
            backgroundSize='cover'
            height={{xs: '22.3rem', md: '35rem'}}
            width={{xs:'36rem', md: '111.7rem'}}
            mx={'auto'}
            mb={{xs: '5rem', md: '8.1rem'}}
            borderRadius='0.7rem'
        >
            <Flex
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
            >
                <Box
                    maxWidth={{xs: '30rem', md: '79.5rem'}}
                    fontWeight= '600'
                    fontSize= {{xs: '2rem', md: '4.2rem'}}
                    lineHeight= {{xs: '3rem', md: '6.3rem'}}
                    textAlign= 'center'
                    mt={{xs: '5.3rem', md: '7.8rem'}}
                    color='#fff'
                >
                    Now you can check your website’s health for Free
                </Box>
                <Flex
                    width={{xs: '14.4rem', md: '31rem'}}
                    height={{xs: '3.6rem', md: '5.5rem'}}
                    background='#245BAB'
                    boxShadow='0px 4px 30px rgba(0, 0, 0, 0.2)'
                    borderRadius='0.4px'
                    fontWeight= '600'
                    fontSize= {{xs:'1.2rem', md: '2rem'}}
                    lineHeight= {{xs:'1.8rem', md: '3rem'}}
                    alignItems='center'
                    justifyContent='center'
                    mt={{xs:'2.6rem', md: '3.6rem'}}
                    color='#fff'
                >
                    Try Now
                </Flex>
            </Flex>
        </Box>
    )
}
