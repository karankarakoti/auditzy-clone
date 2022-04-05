import { Box, Flex } from 'atoms'
import Image from 'next/image'
import React from 'react'

export const LandingServiceCard = ({name, hasI, mt}) => {
    return (
        <Box
            width='19rem'
            height='8rem'
            boxShadow='rgb(0 0 0 / 15%) 0px 4px 50px'
            borderRadius='0.5rem'
            background='rgb(255, 255, 255)'            
        >
            {
                hasI &&            
                <Flex
                    height='2.1rem'
                    width='2.1rem'
                    background='rgb(73, 80, 87)'
                    position='absolute'
                    top='-0.5rem'
                    right='-0.5rem'
                    borderRadius='50%'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Box
                        height='1.4rem'
                        width='1.4rem'
                    >
                        <Image
                            src='/images/i.svg'
                            alt='icon-i'
                            width={14}
                            height={14}
                        />
                    </Box>                                
                </Flex>
            }
            <Box
                height='8rem'
                width='19rem'
            >
                <Flex 
                    mt={mt}
                    justifyContent='center'
                >
                    <Flex
                        alignItems='center'
                    >
                        <Box
                            height='3rem'
                            width='3rem'
                            m='auto'
                        >
                            <Image
                                src='/images/landing-service-subicon.svg'
                                alt='icon-service-subicon-1'
                                width={'100%'}
                                height='100%'
                            />
                        </Box>
                    </Flex>
                    <Box
                        fontSize='1.6rem'
                        ml='2.9rem'
                        color='rgb(73, 80, 87)'
                        fontWeight='500'
                        maxWidth='8rem'
                        textAlign='start'
                    >
                        {name}
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}