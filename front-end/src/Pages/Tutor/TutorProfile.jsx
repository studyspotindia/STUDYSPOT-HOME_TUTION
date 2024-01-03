import { Box, Tab, TabList, Tabs, TabPanel, TabPanels, TabIndicator, Text, Avatar, Button, SimpleGrid, Skeleton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import SidebarComponent from '../Auth/SidebarComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleStudent } from '../../Redux/Auth/Auth.action';



const TutorProfile = () => {
    // const location = useLocation();
    //  console.log(location)
    const dispatch = useDispatch()
    const [isSmall, setIsSmall] = useState(false);
    const [data, setData] = useState([])
    const { userType, user_id } = useParams();

    const auth = useSelector((state) => state.auth)
    //console.log(auth,"In profile")
    //console.log(data)
    //console.log(userType, user_id)
    //console.log(auth.isLoading)



    return (
        <Box h="100%" w="100%" m="auto" mt="80px" display={"flex"} >

            <Box width={isSmall ? "100px" : "16%"} className='left'>
                <SidebarComponent isSmall={isSmall} setIsSmall={setIsSmall} userType={userType} user_id={user_id} />
            </Box>
            <Box height={'auto'} width={isSmall ? "93.5%" : "84%"}  className='right' overflow="auto"
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                <Box ml={{ base: "20px", md: "25px", lg: "50px" }} h="auto"    >
                    <Box mt="30px" h="50px">
                        <Text fontSize={"30px"} fontFamily={"sans-serif"} fontWeight={"600"}>  My Profile</Text>

                    </Box>

                    <Box mt="30px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;" h={{ base: "120px", md: "150px", lg: "150px" }} w={{ base: "100%", md: "95%", lg: "95%" }} borderRadius={"10px"} display={"flex"} >
                        <Box ml={{ base: "5px", md: "10px", lg: "40px" }} w={{ base: "35%", md: "25%", lg: "12%" }} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                            <Avatar size={{ base: "lg", md: "xl", lg: "xl" }} name={auth.student.profile} src={auth.student.profile} />{' '}

                        </Box>
                        <Box w="88%" >
                            {auth.isLoading === true ? <Skeleton height='30px' mt={{ base: "30px", md: "37px", lg: "35px" }} w={{ base: "80%", md: "80%", lg: "30%" }} />
                                : <Text fontSize={{ base: "19px", md: "20px", lg: "22px" }} fontFamily={"unset"} mt={{ base: "30px", md: "37px", lg: "35px" }} fontWeight={"bold"}>{auth.student.name}</Text>

                            }

                            {auth.isLoading === true ? <Skeleton height='30px' mt={{ base: "2px", md: "5px", lg: "5px" }} w={{ base: "80%", md: "80%", lg: "30%" }} />
                                : <Text noOfLines={1} fontSize={{ base: "17px", md: "18px", lg: "18px" }} fontFamily={"sans-serif"} mt={{ base: "2px", md: "5px", lg: "5px" }}>{auth.student.email}</Text>

                            }
                           


                        </Box>



                    </Box>

                    <Box h={{ base: "130px", md: "162px", lg: "150px" }} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;" w={{ base: "100%", md: "95%", lg: "95%" }} mt="30px" padding={"10px"} borderRadius={'10px'}>
                        <Box display="flex" justifyContent={"space-between"}>
                            <Text ml={{ base: "5px", md: "10px", lg: "40px" }} fontSize={{ base: "20px", md: "24px", lg: "24px" }} fontFamily={"sans-serif"} fontWeight={"600"}>About </Text>
                            <Button size={{ base: "sm", md: "sm", lg: "md" }} bg='#FFD60A'>Edit</Button>

                        </Box>

                        {auth.isLoading===true ?   <Skeleton height='50px' mt={{ base: "5px", md: "10px", lg: "20px" }}/> 
                            : <Text noOfLines={4} mt={{ base: "5px", md: "10px", lg: "20px" }} ml={{ base: "5px", md: "10px", lg: "40px" }} fontFamily={"sans-serif"} fontSize={{ base: "12px", md: "14px", lg: "16px" }}>{auth.student.about}</Text>

                            }



                    </Box>

                    <Box h={{ base: "auto", md: "auto", lg: "auto" }} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;" borderRadius={'10px'} w={{ base: "100%", md: "95%", lg: "95%" }} mt="30px" padding={"10px"}>
                        <Box display="flex" justifyContent={"space-between"}>
                            <Text ml={{ base: "5px", md: "10px", lg: "40px" }} fontSize={{ base: "20px", md: "24px", lg: "24px" }} fontFamily={"sans-serif"} fontWeight={"600"}>Personal Details </Text>
                            <Button size={{ base: "sm", md: "sm", lg: "md" }} bg='#FFD60A' >Edit</Button>
                        </Box>
                        <Box w={{ base: "95%", md: "90%", lg: "80%" }} mt='30px' >

                            <SimpleGrid columns={{ base: "1", md: "2", lg: "2" }} ml={{ base: "5px", md: "10px", lg: "40px" }}>
                                <Box h='80px' >
                                    <Text mt='4px' fontSize={{ base: "18px", md: "17px", lg: "18px" }} fontFamily={"inherit"} fontWeight={"bold"}>Name</Text>
                                    
                                    {auth.isLoading===true ?   <Skeleton height='30px'  w={{ base: "80%", md: "80%", lg: "50%" }} /> 
                            :  <Text mt="5px" fontSize={{ base: "15px", md: "15px", lg: "16px" }} fontFamily={"inherit"} >{auth.student.name}</Text>

                            }


                                </Box>
                                <Box h='80px' >
                                    <Text mt='4px' fontSize={{ base: "18px", md: "17px", lg: "18px" }} fontFamily={"inherit"} fontWeight={"bold"}>Email</Text>
                                    {auth.isLoading===true ?   <Skeleton height='30px'   w={{ base: "80%", md: "80%", lg: "50%" }}  /> 
                            :  <Text mt="5px" fontSize={{ base: "15px", md: "15px", lg: "16px" }} fontFamily={"inherit"} >{auth.student.email}</Text>

                            }


                                </Box>
                                <Box h='80px' >
                                    <Text mt='4px' fontSize={{ base: "18px", md: "17px", lg: "18px" }} fontFamily={"inherit"} fontWeight={"bold"}>Phone Number</Text>

                                    {auth.isLoading===true ?   <Skeleton  height='30px'  w={{ base: "80%", md: "80%", lg: "50%" }}  /> 
                            :  <Text mt="5px" fontSize={{ base: "15px", md: "15px", lg: "16px" }} fontFamily={"inherit"} >{auth.student.phone}</Text>

                            }


                                </Box>
                                <Box h='80px' >
                                    <Text mt='4px' fontSize={{ base: "18px", md: "17px", lg: "18px" }} fontFamily={"inherit"} fontWeight={"bold"}>Gender</Text>

                                    {auth.isLoading===true ?   <Skeleton   height='30px'  w={{ base: "80%", md: "80%", lg: "50%" }}  /> 
                            :                                    <Text mt="5px" fontSize={{ base: "15px", md: "15px", lg: "16px" }} fontFamily={"inherit"} >{auth.student.gender}</Text>

                            }


                                </Box>
                                <Box h='80px' >
                                    <Text mt='4px' fontSize={{ base: "18px", md: "17px", lg: "18px" }} fontFamily={"inherit"} fontWeight={"bold"}>Qualification</Text>

                                    {auth.isLoading===true ?   <Skeleton height='30px'  w={{ base: "80%", md: "80%", lg: "50%" }}  /> 
                            :                                    <Text mt="5px" fontSize={{ base: "15px", md: "15px", lg: "16px" }} fontFamily={"inherit"} >{userType === "student" ? auth.student.subject : auth.student.highereducation}</Text>

                            }


                                </Box>
                                <Box h='80px' >
                                    <Text mt='4px' fontSize={{ base: "18px", md: "17px", lg: "18px" }} fontFamily={"inherit"} fontWeight={"bold"}>Experience</Text>

                                    {auth.isLoading===true ?   <Skeleton height='30px'  w={{ base: "80%", md: "80%", lg: "50%" }} /> 
                            :    <Text mt="5px" fontSize={{ base: "15px", md: "15px", lg: "16px" }} fontFamily={"inherit"} >{userType === "student" ? auth.student.classname : auth.student.experience}</Text>

                            }


                                </Box>



                            </SimpleGrid>



                        </Box>

                    </Box>

                    <Box h="50px" w="100%">

                    </Box>

                </Box>


            </Box>





        </Box>
    )
}

export default TutorProfile