import { Center, Heading } from '@chakra-ui/react'

export const Header  = () => {
  return(

      <Heading 
      as='h1' 
      size='3xl' 
      noOfLines={1}
      backgroundColor='#000000' 
      color=' #FFFFFF'>
        <Center>
          Dio Bank
        </Center>
      </Heading>
  )
}
