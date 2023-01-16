import { 
  Center,
  Input,
  Box,
} from '@chakra-ui/react'

import { MainButton } from './Button';
import { login } from '../services/login';

interface ICard {
  id: number,
  title: string,
}

export const Card = ({ title }: ICard) => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h2>{title}</h2>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <MainButton name='Login' event={login}/>
      </Center>
    </Box>
  </Box>
  )
}