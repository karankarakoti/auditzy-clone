import React from 'react'
import { Box, Text } from "atoms";
import Image from 'next/image';

const brands = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',     
    ''  
]

export const HomeBrand = () => {
    return (
        <>
            <Box                
                mt={{ xs: '20rem', md: '20.4rem', lg: '32.2rem'}}                
            >
                <Text
                    as='h3'
                    fontSize={{ xs: '1.5rem', md:'1.8rem', lg: '2rem'}}
                    color='rgb(85, 110, 230)'
                    fontWeight='400'
                    textAlign='center'
                >
                    Brands that work with us
                </Text>
                <Text
                    as='h2'
                    fontSize={{ xs: '2rem', md: '2.8rem', lg:'4rem'}}
                    maxWidth={{xs: '34.4rem', md: '63.8rem', lg: '82rem'}}
                    mt={{xs: '1.6rem', md: '1rem', lg: '2rem'}}
                    color='rgb(73, 80, 87)'
                    mx='auto'
                    textAlign='center'
                    fontWeight='600'
                >
                    Leading Brands joining the Auditzy™ Beta Program!
                </Text>
                <Box
                    maxWidth={{md: '64rem', lg: '107rem'}}
                    mt={{xs: '1.7rem', md:'3.1rem', lg: '5rem'}}
                    pb='5rem'
                    mx={{xs: '3.6rem', md: 'auto'}}
                >
                    <Box
                        display={{xs: 'flex', lg: 'grid'}}
                        flexWrap='wrap'
                        alignItems='center'
                        justifyContent='center'
                        gridTemplateColumns={{xs: 'repeat(3, 1fr)', lg:"repeat(5, 1fr)"}} 
                        gridColumnGap={{xs: '1.8rem', md: "2rem"}}                                                
                    >
                        {
                           brands.map((item, index)=>(
                                <Box
                                    width={{ xs: '10rem', md:'11rem', lg: '18rem'}}                                    
                                    mx={{md: 'auto'}}
                                    mb={{ xs: '0', lg: '6rem'}}
                                    placeItems='center'
                                    key={index}
                                >
                                    <Box
                                        width={{ xs: '10rem', md: '11rem', lg: '18rem'}}                                    
                                    >
                                        <Image
                                            src='/images/jamsfy.svg'
                                            width={150}
                                            height={150}
                                        />
                                    </Box>
                               </Box>
                           )) 
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}
