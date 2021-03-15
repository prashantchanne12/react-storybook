import React from 'react';
import { Button, ChakraProvider } from '@chakra-ui/react';

export default {
    title: 'Chakra/Button',
    component: Button,
    decorators: [story => <ChakraProvider>{story()}</ChakraProvider>]
}

export const Success = () => <Button colorScheme='green'>Success</Button>
export const Danger = () => <Button colorScheme='red'>Danger</Button>