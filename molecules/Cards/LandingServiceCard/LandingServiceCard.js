import { Box, Flex } from 'atoms'
import Image from 'next/image'
import React from 'react'

export const LandingServiceCard = ({name, hasI, mt, mti}) => {
    return (
        <Box
            width={{md:'12.6rem', lg:' 19rem'}}
            height={{md:'4.8rem', lg: '8rem'}}
            boxShadow='rgb(0 0 0 / 15%) 0px 4px 50px'
            borderRadius={{md: '0.2rem', lg: '0.5rem'}}
            background='rgb(255, 255, 255)'            
        >
            {
                hasI &&            
                <Flex
                    height={{md:'1.2rem', lg: '2.1rem'}}
                    width={{md:'1.2rem', lg: '2.1rem'}}
                    background='rgb(73, 80, 87)'
                    position='absolute'
                    top='-0.5rem'
                    right='-0.5rem'
                    borderRadius='50%'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Box
                        height={{md: '0.65rem', lg: '1.4rem'}}
                        width={{md: '0.65rem', lg: '1.4rem'}}
                        display={{md: 'flex', lg: 'block'}}
                    >
                        <Image
                            src='/images/i.svg'
                            alt='icon-i'
                            width={100}
                            height={100}
                        />
                    </Box>                                
                </Flex>
            }
            <Box
                width={{md:'12.6rem', lg:' 19rem'}}
                height={{md:'4.8rem', lg: '8rem'}}
            >
                <Flex                     
                    mt={{ md: mti, lg: mt }}
                    justifyContent='center'
                >
                    <Flex
                        alignItems='center'
                    >
                        <Box
                            height={{md: '1.8rem', lg:'3rem'}}
                            width={{md: '2rem', lg:'3rem'}}
                            m='auto'
                        >
                            <Image
                                src='/images/landing-service-subicon.svg'
                                alt='icon-service-subicon-1'
                                width={100}
                                height={100}
                            />
                        </Box>
                    </Flex>
                    <Box
                        fontSize={{md: '1.2rem', lg: '1.6rem'}}
                        ml={{md:'1.8rem', lg: '2.9rem'}}
                        color='rgb(73, 80, 87)'
                        fontWeight='500'
                        maxWidth={{md:'6.6rem', lg:'8rem'}}
                        textAlign='start'
                    >
                        {name}
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}