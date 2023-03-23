import { AddIcon } from '@chakra-ui/icons';
import {
    FormControl, Input, Box, FormErrorMessage, VStack, useToast,
    Button, HStack
} from '@chakra-ui/react'
import { useState } from 'react';

import { setLocalStorage } from '../../utils/localStorage';

export const Form = ({ taskInput, setTaskInput, taskList, setTaskList }) => {


    const [isInvalidInput, setIsInvalidInput] = useState(false);
    const toast = useToast()

    const verifySetInput = (e) => {
        if (e.target.value.length > 0) {
            setIsInvalidInput(false)
        }
        setTaskInput(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault();
        if (taskInput.length > 0) {
            const newTaskId = taskList[taskList.length - 1]['id'] + 1;
            const newObjTask = {
                id: newTaskId,
                title: taskInput,
                done: false
            }
            const newTaskList = [...taskList, newObjTask];

            setTaskList(newTaskList);
            setLocalStorage('taskListStorage', newTaskList);
            setTaskInput('');
            toast({
                title: 'Tarea creada.',
                description: "La tarea se agregó a la lista correctamente.",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        }
        else {
            setIsInvalidInput(true)
        }
    }





    return (
        <VStack maxW={400} bg='white' spacing={5} mb={5}>
            <FormControl as='form' isInvalid={isInvalidInput && true}>
                <HStack alignItems={'center'}>
                    <Input type='text' placeholder='Ingrese nueva tarea' bg='white' focusBorderColor='red.200'
                        value={taskInput} onChange={verifySetInput} />
                    
                    <Button leftIcon={<AddIcon />} colorScheme='gray' variant='solid'paddingInline={8} onClick={addTask}>
                        Agregar
                    </Button>

                </HStack>
                <FormErrorMessage>El campo no puede estar vacío.</FormErrorMessage>
            </FormControl>


        </VStack>
    )
}
