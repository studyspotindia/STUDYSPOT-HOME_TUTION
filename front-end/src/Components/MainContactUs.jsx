import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdOutlinePhone,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import "./MainContactUs.css"
import { AtSignIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import axios from "axios"

const MainContactUs = () => {
  const toast = useToast()

  const [data,setData]=useState({
        name:"",
        email:"",
        phoneNo:"",
        message:""
  })

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setData({...data,[name]:value});

  }


  const handelSubmit = async (e) => {

    e.preventDefault();
  
    try {
      if (!data.name || !data.email || !data.phoneNo || !data.message) {
        toast({
          title: 'Error',
          description: "Please fill in all input fields.",
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: "top"
        });

        
      } else {
        const response = await axios.post("https://filthy-rose-shoe.cyclic.cloud/student/contactus", data);
  
        //console.log(response);
  
        toast({
          title: 'Form is submitting successfully',
          description: "Contact Details send successfully",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: "top"
        });
        setData({})
      }
    } catch (error) {
      console.error("Error submitting form:", error);
  
      toast({
        title: 'Error',
        description: "There was an error submitting the form. Please try again.",
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: "top"
      });
    }
  };
  


  





  return (
    <div style={{  height: "auto", width: "100%", margin: "auto", marginTop: "100px", padding: "10px" }}>
      {/* <SimpleGrid columns={{base:1,md:1,lg:2}} spacing={{base:5,md:5,lg:10}} >
            <Box className='div1' height="600px" border="1px solid black" >
              
             
            </Box>
            <Box height="600px" border="1px solid black">
              12
            </Box>

        </SimpleGrid> */}

      {/* centerContent */}
      <Container bg="#9DC4FB" maxW="full" mt={0} overflow="hidden" p="30px">
        <Flex >
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            //m={{ sm: 4, md: 16, lg: 10 }}

            className='mainDiv'
            w={{ base: "100%", md: "100%", lg: "75%" }}
            
            m="auto"
            p={{ base: 5, sm: 5, md: 3, lg: 10 }}
            h="auto"
          >
            <Box p={0}>
              <Wrap spacing={{ base: 20, sm: 3, md: "15px", lg: "25px" }}>
                <WrapItem  w={{ sm: "100%", md: "47%", lg: "48%" }}>
                  <Box w="100%" bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <form onSubmit={handelSubmit}>
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input 
                            type="text" 
                            size="md"  
                            name="name"
                            value={data.name}
                            onChange={handleInput}
                            isRequired
                             />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="email" size="md" 
                               name="email"
                              value={data.email}
                              onChange={handleInput}
                              isRequired
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Phone no</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlinePhone color="gray.800" />
                            </InputLeftElement>
                            <Input type="number" size="md" 
                             inputMode="numeric"
                             pattern="[0-9]{10}" // Allows only 10 digits
                             name="phoneNo"
                             value={data.phoneNo}
                             onChange={handleInput}
                             isRequired
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                            name="message"
                            value={data.message}
                            onChange={handleInput}
                            isRequired
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button type="submit" variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                      </form>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem  w={{ base: "100%", sm: "100%", md: "50%", lg: "48%" }}>
                  <Box w="100%">
                    <Heading ml="20px">Contact</Heading>
                    <Text ml="20px" mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <a href="tel:+91-8826611071" rel="noreferrer" target="_blank">
                          <Button
                            size="lg"
                            height="48px"
                            width={{ base: "200px", sm: "200px", md: "200px", lg: "200px" }}
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                            +91-8826611071
                          </Button>
                        </a>

                        <a href="mailto:studyspotindia@gmail.com" rel="noreferrer" target="_blank">
                          <Button
                            size="lg"
                            height="48px"
                            width={{ base: "295px", sm: "295px", md: "95%", lg: "295px" }}
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                            studyspotindia@gmail.com
                          </Button>
                        </a>


                        <a href="https://www.google.com/maps/place/STUDYSPOT+%5BHome+Tuition+Services%5D/@28.5864436,77.081902,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1bfecd203135:0x2e6f5526e52acb30!8m2!3d28.5864436!4d77.081902!16s%2Fg%2F11t1mm7fd6?entry=ttu"
                          rel="noreferrer" target="_blank">
                          <Button
                            size="lg"
                            height="48px"
                            width={{ base: "295px", sm: "295px", md: "95%", lg: "295px" }}
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                            Street Number 8,Raj Nagar I
                          </Button>

                        </a>


                        <a href="https://studyspotindia.com/" rel="noreferrer" target="_blank">
                          <Button
                            size="lg"
                            height="48px"
                            width={{ base: "280px", sm: "280px", md: "280px", lg: "280px" }}
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<AtSignIcon color="#1970F1" size="20px" />}>
                            www.studyspotindia.com
                          </Button>
                        </a>

                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px"  color="white"/>}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px"  color="white"/>}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}

                        icon={<BsDiscord size="28px"  color="white"/>}
                      />
                    </HStack>
                  </Box>
                </WrapItem>

              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>

    </div>
  )
}

export default MainContactUs