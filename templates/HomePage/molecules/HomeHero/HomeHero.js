import React from "react";
import { Box, Text, Flex } from "atoms";
import { LandingForm, LandingCard } from "../../../../molecules";

export const HomeHero = () => {
    return (
        <>
            <Box
                height={{xs: '62.3rem', md:'82rem'}}
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
                        pt={{xs: "3.7rem", md:"3.4rem"}}
                        as="h1"                
                        fontWeight="700"
                        lineHeight={{xs: "3rem", md:"6.3rem"}}
                        fontSize={{xs: "2rem", md:"4.2rem"}}                        
                        color="white"    
                        maxWidth={{xs: "35.7rem", md:"74rem"}}                        
                        ml="auto"
                        mr="auto"
                        textAlign="center"                                         
                    >
                        Audit, Analyse and know the health of any website.
                    </Text>
                    <Text
                        fontSize={{xs: "1.3rem", md:"1.4rem"}}
                        maxWidth={{xs: "37rem", md:"51rem"}}                    
                        textAlign="center"    
                        pt={{xs: "1rem", md:"1.8rem"}}
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
                    display={{xs: "none", md:"block"}}         
                />                      
                <LandingCard/>
            </Box>            
        </>
    );
};
