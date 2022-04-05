import { Box, Button, Flex, Text } from 'atoms'
import React from 'react'

export const WorkflowCard = () => {
    return (
        <Box
            mt={{xs: '4.6rem', md: '9.5rem', lg: '11.6rem'}}
            background='url(/images/landing-workflow-bg.png)'
            backgroundSize='cover'
            height={{xs: '22.3rem', md: '20.3rem', lg: '35rem'}}
            width={{xs:'36rem', md: '64.9rem', lg: '111.7rem'}}
            mx={'auto'}
            mb={{xs: '5rem', md: '8.8rem', lg: '8.1rem'}}
            borderRadius={{xs:'0.7rem', md: '1.1rem', lg:'0.7rem'}}
        >
            <Flex
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
            >
                <Box
                    maxWidth={{xs: '30rem', md: '46.2rem', lg: '79.5rem'}}
                    fontWeight= '600'
                    fontSize= {{xs: '2rem', md: '2.4rem', lg: '4.2rem'}}
                    lineHeight= {{xs: '3rem', md: '3.6rem', lg: '6.3rem'}}
                    textAlign= 'center'
                    mt={{xs: '5.3rem', md: '4.5rem', lg: '7.8rem'}}
                    color='#fff'
                >
                    Now you can check your website’s health for Free
                </Box>
                <Box
                    width={{xs: '14.4rem', md: '18rem', lg: '31rem'}}
                    height={{xs: '3.6rem', md: '3.1rem', lg: '5.5rem'}}                    
                    boxShadow='0px 4px 30px rgba(0, 0, 0, 0.2)'                    
                    mt={{xs:'2.6rem', md: '2.1rem', lg: '3.6rem'}}
                    
                >
                    <Button
                        bg='#245BAB'
                        borderRadius={{md: '0.2rem', lg:'0.4px'}}
                        height='100%'
                        width='100%'        
                        variant='default'                                        
                        border='none'
                    >
                        <Text
                            fontSize= {{xs:'1.2rem', md: '1.1rem', lg: '2rem'}}
                            lineHeight= {{xs:'1.8rem', md: '1.7rem', lg: '3rem'}}
                            color='#fff'
                            fontWeight= '600'
                        >
                            Try Now
                        </Text>
                    </Button>                    
                </Box>
            </Flex>
        </Box>
    )
}
