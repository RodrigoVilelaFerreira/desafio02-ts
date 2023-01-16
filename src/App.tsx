import { 
  ChakraProvider,
} from '@chakra-ui/react'

import { Header } from './components/Header/Header';
import { Card } from './components/Card'

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card id={1} title='Faça o login' />
    </ChakraProvider>
  );
}

export default App;
