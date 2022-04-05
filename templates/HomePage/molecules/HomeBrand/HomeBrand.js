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
                mt={{ xs: '20rem', md: '32.2rem'}}                
            >
                <Text
                    as='h3'
                    fontSize={{ xs: '1.5rem', md: '2rem'}}
                    color='rgb(85, 110, 230)'
                    fontWeight='400'
                    textAlign='center'
                >
                    Brands that work with us
                </Text>
                <Text
                    as='h2'
                    fontSize={{ xs: '2rem', md:'4rem'}}
                    maxWidth={{xs: '34.4rem', md: '82rem'}}
                    mt={{xs: '1.6rem', md: '2rem'}}
                    color='rgb(73, 80, 87)'
                    mx='auto'
                    textAlign='center'
                    fontWeight='600'
                >
                    Leading Brands joining the Auditzy™ Beta Program!
                </Text>
                <Box
                    maxWidth={{md: '107rem'}}
                    mt={{xs: '1.7rem', md: '5rem'}}
                    pb='5rem'
                    mx={{xs: '3.6rem', md: 'auto'}}
                >
                    <Box
                        display={{xs: 'flex', md: 'grid'}}
                        flexWrap='wrap'
                        alignItems='center'
                        justifyContent='center'
                        gridTemplateColumns={{xs: 'repeat(3, 1fr)', md:"repeat(5, 1fr)"}} 
                        gridColumnGap={{xs: '1.8rem', md: "2rem"}}                                                
                    >
                        {
                           brands.map((item, index)=>(
                                <Box
                                    width={{ xs: '10rem', md: '18rem'}}                                    
                                    mx={{md: 'auto'}}
                                    mb={{ xs: '0', md: '6rem'}}
                                    placeItems='center'
                                    key={index}
                                >
                                    <Box
                                        width={{ xs: '10rem', md: '18rem'}}                                    
                                    >
                                        <Image
                                            src='/images/jamsfy.svg'
                                            width={100}
                                            height={100}
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
