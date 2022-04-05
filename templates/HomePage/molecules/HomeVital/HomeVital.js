import { Box, Flex, Text } from 'atoms'
import { VitalCard } from 'molecules'
import React from 'react'

export const HomeVital = () => {
    return (
        <Box pt={{xs: '3.4rem', md: '12rem'}} pb={{xs: '3.6rem', md: '20rem'}} overflow='hidden' mx='auto'>
            <Box
                background='url(/images/landing-vitals-bg.png)'
                backgroundRepeat='no-repeat'       
                backgroundSize='cover'
                height={{xs:'88rem', md: '58.2rem'}}
                pt={{xs: '6rem', md: '6rem'}}
                mt={{xs:'1.4rem', md: '3rem'}}                                
                mb={{xs:'4rem', md: '0'}}
                pl={{xs:'2.6rem', md: '0'}}
            >
                <Box mx={{md: 'auto'}}>
                    <Flex
                        flexDirection={{xs: 'column', md: 'row'}}
                    >                        
                        <Box ml={{md: '24rem'}} mt={{md: '15rem'}}>
                            <Box 
                                fontSize={{xs:'1.6rem', md: '2.8rem'}}
                                color='#fff'
                                fontWeight='600'
                            >
                                All you need to know about
                            </Box>
                            <Flex
                                flexDirection='column'
                            >
                                <Flex 
                                    fontSize={{xs:'3rem', md: '6rem'}}
                                    color='#fff'
                                    fontWeight='700'
                                >
                                    YOUR
                                    <Text
                                        as='span'
                                        color='rgb(52, 195, 143)'
                                        fontSize={{xs:'3rem', md: '6rem'}}
                                        ml='1rem'
                                    >
                                        WEBSITE'S
                                    </Text>
                                </Flex>                               
                                <Box 
                                    fontSize={{xs:'1.6rem', md: '3rem'}}
                                    color='#fff'
                                    fontWeight='600'
                                >
                                    Core web vital score
                                </Box>
                            </Flex>
                        </Box>
                        <VitalCard/>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
