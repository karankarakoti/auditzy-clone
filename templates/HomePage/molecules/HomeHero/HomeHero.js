import React from "react";
import { Box, Text, Flex } from "atoms";
import { LandingForm, LandingCard } from "molecules";

export const HomeHero = () => {
    return (
        <>
            <Box
                height={{xs: '62.3rem', md: '60.7rem', lg:'82rem'}}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"                
                backgroundImage="url('/images/home_hero.png')"
            >     
                <Flex 
                    alignItems="center" 
                    flexDirection="column"
                    pt='10rem'
                >
                    <Text
                        pt={{xs: "3.7rem", md: '4.2rem', lg:"3.4rem"}}
                        as="h1"                
                        fontWeight="700"
                        lineHeight={{xs: "3rem", md: '4.8rem', lg:"6.3rem"}}
                        fontSize={{xs: "2rem", md: '3.2rem', lg:"4.2rem"}}                        
                        color="white"    
                        maxWidth={{xs: "35.7rem", md: '56rem', lg:"74rem"}}                        
                        ml="auto"
                        mr="auto"
                        textAlign="center"                                         
                    >
                        Audit, Analyse and know the health of any website.
                    </Text>
                    <Text
                        fontSize={{xs: "1.3rem", md: '1.3rem', lg:"1.4rem"}}
                        maxWidth={{xs: "37rem", md: '51.5rem', lg:"51rem"}}                    
                        textAlign="center"    
                        pt={{xs: "1rem", md: '1rem', lg:"1.4rem"}}
                        color='rgba(255, 255, 255, 0.5)'                          
                    >
                        Try it now and get insights and data that can be used to create a better user experience for website visitors.
                    </Text>                     
                    <LandingForm />            
                </Flex> 
                <Box   
                    position="absolute"         
                    width="2.7rem"
                    height="2.7rem"
                    borderRadius="50%"
                    zIndex="2"
                    background={'rgba(141, 198, 63, 1)'}
                    left="14.2rem" 
                    top="42rem"  
                    display={{xs: "none", md: 'none', lg:"block"}}         
                />                      
                <LandingCard/>
            </Box>            
        </>
    );
};
