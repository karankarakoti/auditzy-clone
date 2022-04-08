import { Box, Button, Text } from 'atoms'
import React from 'react'

export const SiteMonitoringHero = () => {
    return (
        <>
            <Box
                height={{xs: '52.6rem', md: '52.5rem', lg:'59.1rem'}}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"                
                backgroundImage="url('/images/site-monitoring-hero-bg.png')"
            >
                <Box
                    maxWidth={{xs: "31.6rem", md: '64.2rem', lg:"94.6rem"}}                    
                    mx="auto"
                    pt={{xs: "14.6rem", md: '15rem', lg:"19.9rem"}}
                    fontSize={{xs: "2.5rem", md: '3.2rem', lg:"4rem"}}
                    fontWeight="600"
                    lineHeight={{xs: "3.7rem", md: '4.8rem', lg:"6rem"}}
                    color="white"
                    textAlign="center"
                    display={{xs: "none", md: 'none', lg:"block"}}
                >
                    Monitor Website Changes <br /> to stay ahead in your business
                </Box>
                <Box
                    maxWidth={{xs: "31.6rem", md: '64.2rem', lg:"94.6rem"}}                    
                    mx="auto"
                    pt={{xs: "14.6rem", md: '15rem', lg:"19.9rem"}}
                    fontSize={{xs: "2.5rem", md: '3.2rem', lg:"4rem"}}
                    fontWeight="600"
                    lineHeight={{xs: "3.7rem", md: '4.8rem', lg:"6rem"}}
                    color="white"
                    textAlign="center"
                    display={{xs: "block", lg:"none"}}
                >
                    Monitor Website Changes to stay ahead in your business
                </Box>

                <Box
                    maxWidth={{xs: "27.9rem", md: '55.3rem', lg:"47.8rem"}}
                    mx="auto"
                    pt={{xs: "1.9rem", md: '2.8rem', lg:"4.9rem"}}
                    fontSize={"1.4rem"}
                    fontWeight="500"
                    lineHeight={"2.2rem"}
                    color="rgba(255, 255, 255, 0.8)"
                    textAlign="center"
                >
                    If your website is the primary point of your business then with Auditzy, you can easiliy understand your website’s performance.
                </Box>

                <Box
                    width={"17.5rem"}
                    mx="auto"
                    height={{xs: '3.6rem', lg:"4.2rem"}}
                    mt={{xs: "4.7rem", md: '8.3rem', lg:"5.2rem"}}
                >
                    <Button
                        bg='#3443C8'
                        boxShadow="0px 6px 30px rgba(0, 0, 0, 0.2)"
                        variant='default'
                        width='100%'
                        height='100%'
                        border='none'
                        borderRadius={{xs: "0.8rem", md: "0.4rem"}}
                    >
                        <Text
                            fontSize={{xs: '1.3rem', lg:"1.6rem"}}
                            color='#fff'
                            fontWeight="500"
                        >
                            Start Auditing
                        </Text>
                    </Button>
                </Box>
            </Box>
        </>
    )
}