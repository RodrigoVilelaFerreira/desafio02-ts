import { 
  Button
} from '@chakra-ui/react'



interface IButton {
  name: string,
  event: () => void
}

export const MainButton = ({ event, name }: IButton) => {
  return(
    <Button onClick={event} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
      {name}
    </Button>
  )
}
