import React from 'react'
import { Box, Text, Flex, Grid } from "atoms";
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
                mt='28.2rem'                
            >
                <Text
                    as='h3'
                    fontSize='2rem'
                    color='rgb(85, 110, 230)'
                    fontWeight='400'
                    textAlign='center'
                >
                    Brands that work with us
                </Text>
                <Text
                    as='h2'
                    fontSize='4rem'
                    maxWidth='82rem'
                    mt='2rem'
                    color='rgb(73, 80, 87)'
                    mx='auto'
                    textAlign='center'
                    fontWeight='600'
                >
                    Leading Brands joining the Auditzy™ Beta Program!
                </Text>
                <Box
                    maxWidth='107rem'
                    mt='5rem'
                    pb='5rem'
                    mx='auto'
                >
                    <Grid
                        gridTemplateColumns="1fr 1fr 1fr 1fr 1fr" 
                        gridColumnGap="2rem"
                    >
                        {
                           brands.map((item, index)=>(
                                <Box
                                    width='18rem'
                                    mx='auto'
                                    mb='6rem'
                                    placeItems='center'
                                    key={index}
                                >
                                    <Box
                                        height='6rem'
                                    >
                                        <Image
                                            src='/images/jamsfy.svg'
                                            width={169}
                                            height={99}
                                        />
                                    </Box>
                               </Box>
                           )) 
                        }
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
