import { Box, Button, Flex, Text } from 'atoms';
import Link from 'next/link'
import CloseMenu from 'public/assets/icons/CloseMenu';
import MemoDownArrow from 'public/assets/icons/DownArrow';
import { Logo } from 'public/assets/icons/Logo';
import MenuIcon from 'public/assets/icons/MenuIcon';
import React, { useEffect, useState } from 'react'

const navbar = [
  {
    id: "0",
    name: "Home",
    url: "/",
    children: [],
  },
  {
    id: "1",
    name: "Features",
    url: "#",
    children: [
      {
        id: "1.1",
        name: "Site Auditing",
        url: "#",
      },
      {
        id: "1.2",
        name: "Competitor Analysis",
        url: "#",
      },
      {
        id: "1.3",
        name: "Site Monitoring",
        url: "#",
      },
    ],
  },
  {
    id: "2",
    name: "Pricing",
    url: "/",
    children: [],
  },
  {
    id: "3",
    name: "Resources",
    url: "#",
    children: [
      {
        id: "3.1",
        name: "Site Auditing",
        url: "#",
      },
      {
        id: "3.2",
        name: "Competitor Analysis",
        url: "#",
      },
      {
        id: "3.3",
        name: "Site Monitoring",
        url: "#",
      },
    ],
  },
  {
    id: "4",
    name: "Contact Us",
    url: "/",
    children: [],
  },    
]

export const Header = () => {

  const [menu, setMenu] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [ mobileMenu, setMobileMenu] = useState(false);
  const [ scroll, setScroll ] = useState(false);  

  const handleScroll = () => {        
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  })  

  return (
    <Box
      position='fixed'
      height={'8rem'}
      transition='all 0.6s ease 0s'
      width='100%'
      zIndex='5'
      background={scroll ? '#fff' : 'transparent'}
      boxShadow={scroll ? '0px 1px 50px rgba(0, 0, 0, 0.25)' : 'none'}
    >
      <Box
        maxWidth={'112rem'}
        mx='auto'        
        alignItems='center'
        justifyContent='space-between'  
        display={{xs: 'none', lg: 'flex'}}            
      >
        <Flex
          alignItems='center'
          justifyContent='center'          
        >
          <Box pt='1.5rem'>
            <Link href='/'>
              <Logo
                fill={scroll ? '#000' : '#fff'}
              />              
            </Link>
          </Box>
          <Flex
            ml={'5rem'}
          >
            {
              navbar.map((item, index) => (
                <Box 
                  mt='2.2rem' mr='3.2rem' key={index}
                  onMouseOver={() => {
                    setIsHovered(true);
                    setMenu(item.id);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setMenu("");
                  }}
                  cursor='pointer'
                >
                  <Link href={item.url} key={index}>
                    <Flex
                      flexDirection='column'
                    >
                      <Flex
                        alignItems='center'
                        justifyContent='center'
                      >
                        <Box
                          fontSize={'1.3rem'}
                          fontWeight={'600'}
                          color={scroll ? '#000' : '#fff'}
                          lineHeight={'1.9rem'}
                        >
                          {item.name}
                        </Box>                      
                        {item.children.length > 0 && (
                          <Box
                            width={'0.9rem'}
                            height={'0.5rem'}
                            ml={'0.3rem'}
                            mt={menu !== item.id && '-1rem'}
                            mb={menu === item.id && '-1rem'}
                            transform={menu === item.id && isHovered ? 'rotate(180deg)' : 'rotate(0deg)'}
                          >
                            <MemoDownArrow
                              width={'0.9rem'}
                              height={'0.5rem'}
                              fill={scroll ? '#000' : '#fff'}
                            />                            
                          </Box>
                        )}                                            
                      </Flex>
                      {item.children.length > 0 && menu===item.id && (
                          <Box
                            position='absolute'
                            width={'21.3rem'}
                            backgroundColor={'#fff'}                            
                            top='3rem'
                            borderRadius={'0.3rem'}
                            boxShadow={'0px 1px 50px rgba(0, 0, 0, 0.25)'}
                          >
                            {
                              item.children.map((child, index) => (
                                <Link href='#'>
                                  <Box>
                                    <Text
                                      key={index}
                                      mt='1.6rem'
                                      ml='3.1rem'
                                      mb='1.3rem'
                                      fontSize={'1.3rem'}
                                      fontWeight={'500'}
                                      color={'#39A5E9'}
                                      lineHeight={'2.2rem'}
                                    >
                                      {child.name}
                                    </Text>
                                    {
                                      item.children.length > index + 1 &&                                     
                                        <Box
                                          border='1px solid rgba(0, 0, 0, 0.1)'
                                          width={'21.3rem'}
                                          height={'0'}
                                        />
                                    }
                                  </Box>
                                </Link>
                              ))
                            }
                          </Box>
                      )}
                    </Flex>
                  </Link>                  
                </Box>
              ))
            }
          </Flex>
        </Flex>

        <Box
          width={'15.1rem'}
          height={'4.2rem'}  
          mt='2.2rem'           
        >
            <Button
              variant='default'
              borderRadius={'0.6rem'}
              bg={scroll ? '#25C088' :'#39A5E9'}
              height={'100%'}
              width={'100%'}
              border='none'
            >
              <Text
                fontSize={'1.6rem'}
                fontWeight={'400'}
                lineHeight={'2.4rem'}
                color={'#fff'}
              >
                Get Started
              </Text>
            </Button>
        </Box>
      </Box>
      
      <Box>
        <Box
          maxWidth={{xs: '36.2rem', md:'64rem'}}
          mx='auto'                
          alignItems='center'
          justifyContent='space-between'  
          display={{xs: 'flex', lg: 'none'}}   
          pb='1rem'           
        >
          <Flex 
            alignItems='center'
            justifyContent='space-between'
            width='100%'
          >
            <Box pt='1.5rem'>
              <Link href='/'>
                <Logo
                  width={'12rem'}
                  fill={scroll ? '#000' : '#fff'}
                />              
              </Link>
            </Box>
            <Box pt='1.5rem' cursor='pointer' onClick={()=> setMobileMenu(!mobileMenu)}>
              {
                !mobileMenu ?                   
                  <MenuIcon fill={scroll ? '#000' : '#fff'} />                  
                : <CloseMenu fill={scroll ? '#000' : '#fff'} />}                            
            </Box>
          </Flex>        
        </Box>
        <Box
          height={{ xs: '70rem', md: '90rem'}}
          width='100%'
          transition='all 0.6s ease 0s'
          background='#2647A4'
          zIndex='5'
          display={mobileMenu ? 'block' : 'none'}
        >
          <Flex
            flexDirection='column'
            pt={{xs: '1.7rem', md: '1.8rem'}}
          >
            {
              navbar.map((item, index) => (
                <Box>
                  <Flex
                    mx={{xs: '2.6rem', md: '5.6rem'}}
                    mb='1.3rem'
                    border='2px solid #304EBB'
                    borderRadius='0.4rem'
                    background='rgba(60, 87, 183, 0.2)'
                    alignItems='center'
                    justifyContent='space-between'
                    key={index}
                    onClick={() => {
                      setIsHovered(!isHovered);
                      setMenu(menu === item.id ? '' : item.id);
                    }}
                  >
                    <Text
                      fontSize={{xs: '2rem', md: '2.2rem'}}
                      fontWeight={'600'}
                      color='#fff'
                      pl='2.7rem'
                      py='1.7rem'
                    >
                      {item.name}
                    </Text>
                    {
                      item.children.length > 0 && (                  
                        <Box 
                          mr='2.8rem'
                          transform={menu === item.id && isHovered ? 'rotate(180deg)' : 'rotate(0deg)'}
                        >
                          <MemoDownArrow
                            width={'2.1rem'}
                            height={'1.2rem'}
                            fill={'#fff'}
                          />   
                        </Box> 
                    )}        
                  </Flex>
                  {
                    item.children.length > 0 && menu===item.id &&
                      <Flex mt={{xs: '1.3rem', md: '1.6rem'}} flexDirection='column'>
                        {item.children.map((child, index)=>(
                          <Box                            
                            background= 'rgba(60, 87, 183, 0.2)'
                            border= '2px solid #304EBB'
                            ml={{xs: '5.3rem', md: '9.6rem'}}
                            mr={{xs: '2.6rem', md: '5.6rem'}}
                            mb={{xs: '0.9rem', md: '1.3rem'}}
                            fontSize= {{xs: '1.6rem', md: '1.8rem'}}
                            fontWeight= '500'
                            lineHeight= {{xs: '2.4rem', md: '2.7rem'}}
                            text-align= 'left'
                            color='white'
                            py='1.1rem'
                            pl='2rem'
                            key={index}
                          >
                            {child.name}
                          </Box>
                        ))}     
                      </Flex>                                  
                  }
                </Box>
              ))
            }            
          </Flex>  
          <Box
            width={{xs: '36.2rem', md: '65rem'}}
            height='6.5rem'
            mx={{xs: '2.6rem', md: '5.6rem'}}
          >
            <Button
              background= '#39A5E9'
              border= '1px solid #39A5E9'
              borderRadius='0.4rem'
              variant='default'
              width='100%'
              height='100%'
            >
              <Text
                fontSize={{xs: '2rem', md: '2.2rem'}}
                lineHeight={{xs: '3rem', md: '3.3rem'}}
                fontWeight={'400'}
              >
                Get Started
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}