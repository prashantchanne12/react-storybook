import React from 'react';
import { Button, ButtonGroup } from "@chakra-ui/react"

export default {
    title: 'Chakra/Button',
    component: Button,
}

export const Success = () => <Button colorScheme="green">Button</Button>
export const Danger = () => <Button colorScheme="red">Button</Button>