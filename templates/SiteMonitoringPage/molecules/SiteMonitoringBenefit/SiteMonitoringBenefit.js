import { Box, Flex, Text } from 'atoms'
import { Warning } from 'public/assets/icons/Warning'
import React from 'react'

const data = [
    'Know recurring problems',
    'Learn of security threats',
    'Understand trends',
    'Best Technology selection',
    'Stay ahead of competitors'
]

export const SiteMonitoringBenefit = () => {
    return (
        <>
            <Box>
                <Box
                    maxWidth={{xs: "5.6rem", md: '7.2rem', lg:"8rem"}}
                    mx="auto"
                    pt={{xs: "4.1rem", md: '10.2rem', lg:"11.5rem"}}
                    fontSize={{xs: "1.4rem", md: '1.8rem', lg:"2rem"}}
                    fontWeight="400"
                    lineHeight={{xs: "2.1rem", md: '2.7rem', lg:"3rem"}}
                    color='#556EE6'
                >
                    Benefits
                </Box>                
                <Box
                    maxWidth={{xs: "39.5rem", md: "69.6rem"}}
                    mx="auto"
                    pt={{xs: "0.7rem", md: '1.4rem', lg:"2rem"}}  
                    textAlign="center"                  
                >                    
                    <Text
                        fontSize={{xs: "2rem", md:"2.8rem", lg: "3.2rem"}}
                        fontWeight="600"
                        lineHeight={{xs: "3rem", md: "4.2rem", lg:"5.2rem"}}
                        color='#495057'                           
                    >
                        The benefits of <br/>
                        constant monitoring with Auditzy
                    </Text>
                </Box>

                <Box
                    maxWidth={{xs: "33.6rem", md: '54.2rem', lg:"64.6rem"}}
                    mx="auto"
                    pt={{xs: "1.3rem", md: '1.4rem', lg:"2.2rem"}}
                    fontSize={{xs: "1.3rem", md: "1.4rem"}}
                    fontWeight="500"
                    lineHeight={{xs: "1.9rem", md: "2.2rem"}}
                    color='#495057'
                    textAlign="center"
                >
                    Try it now and get insights and data that can be used to create a better user experience for website visitors. Try it now and get insights and data that
                </Box>

                <Box
                    mt={{xs: "4.1rem", md: '8.1rem', lg:"8.4rem"}}
                    mb={{xs: "6.1rem", md: '3.6rem', lg:"13.7rem"}}
                    maxWidth={{xs: '100%', lg:"112rem"}}
                    mx={{md: 'auto'}}                    
                >
                    <Box
                        display={{xs: "grid", md:"flex", lg:"grid"}}
                        gridTemplateColumns={{xs: 'repeat(5, 14.6rem)', lg: 'repeat(5, 19.7rem)'}}
                        gridColumnGap={{xs: '2.4rem', lg: '3.3rem'}}                          
                        flexWrap={{md: 'wrap'}}
                        alignItems='center'
                        justifyContent={{md: "center"}}  
                        ml={{xs: '3.8rem', md: '0'}} 
                        width='100%'                           
                    >
                        {
                            data.map((item, index) => (
                                <Box
                                    width={{xs: "14.6rem", md: "18rem", lg:"19.7rem"}}
                                    height={{xs: "14.6rem", md: "18rem", lg:"19.7rem"}}
                                    boxShadow='0px 4px 50px rgba(0, 0, 0, 0.1)'
                                    background='#fff'
                                    key={index}
                                    borderRadius={{xs: "1.4rem", md: "1.8rem", lg:"2rem"}}   
                                    mb={{md: '4.4rem', lg: '0'}}  
                                    mr={{xs: '2.4rem', lg: '0'}}                                    
                                >
                                    <Flex
                                        width={{xs: '5.1rem', md: '6.2rem', lg:"6.9rem"}}
                                        height={{xs: '4.7rem', md: '5.7rem', lg:"6.4rem"}}
                                        mt={{xs: "2.9rem", md: "3.9rem", lg:"4rem"}}
                                        background='#D6F3E9'
                                        borderRadius={{xs: "0.7rem", md: "1.6rem", lg:"1rem"}}
                                        mx='auto'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                        <Warning/>
                                    </Flex>
                                    <Box
                                        fontSize={{xs: "1.3rem", md: "1.6rem", lg:"1.8rem"}}
                                        fontWeight="500"
                                        lineHeight={{xs: "1.9rem", md: "2.4rem", lg:"2.7rem"}}
                                        textAlign="center"
                                        mx='auto'
                                        color='#495057'
                                        mt={{xs: "1.2rem", md: "1.1rem", lg:"1.7rem"}}
                                        maxWidth={{xs: "11.2rem", md: "14.7rem", lg:"15.7rem"}}
                                    >
                                        {item}
                                    </Box>
                                </Box>
                            ))
                        }                        
                    </Box>
                </Box>
                        
                <Box
                    width={{ md: "5.1rem", lg:"6.47rem"}}
                    height={{ md: "5.1rem", lg:"6.47rem"}}
                    position='absolute'
                    background='#556EE6'
                    borderRadius='50%'
                    top={{ md: '6rem', lg:"5.1rem"}}
                    left={{ md: '3.8rem', lg:"6.3rem"}}
                    display={{xs: 'none', md: 'block'}}
                />

                <Box
                    width={{ md: "12.9rem", lg:"16.2rem"}}
                    height={{ md: "12.9rem", lg:"16.2rem"}}
                    position='absolute'
                    background='#44CDAB'
                    borderRadius='50%'
                    top={{ md: '16.7rem', lg:"18.6rem"}}
                    left={{ md: '-7.9rem', lg:"-7.4rem"}}
                    display={{xs: 'none', md: 'block'}}
                />
            </Box>                        
        </>
    )
}
