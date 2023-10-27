import React from 'react'
import { Center } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
    <Center bg='green' h='100px' color='white'>
    {greeting}
    </Center>
    </div> 
  )
}

export default ItemListContainer