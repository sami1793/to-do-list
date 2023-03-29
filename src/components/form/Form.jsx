import { AddIcon } from '@chakra-ui/icons';
import {
    FormControl, Input, Box, FormErrorMessage, useToast, Button, HStack} from '@chakra-ui/react'
import { useState } from 'react';
import { primaryColor } from '../../utils/colors';

import { setLocalStorage } from '../../utils/localStorage';

export const Form = ({ taskInput, setTaskInput, taskList, setTaskList }) => {


    const [isInvalidInput, setIsInvalidInput] = useState(false);
    const toast = useToast();

    const verifySetInput = (e) => {
        if (e.target.value.length > 0) {
            setIsInvalidInput(false)
        }
        setTaskInput(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault();
        if (taskInput.length > 0) {
            let newTaskId;
            taskList.length==0?newTaskId=1:
            newTaskId = taskList[taskList.length - 1]['id'] + 1;
            
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
            <FormControl as='form' isInvalid={isInvalidInput && true} w='100%' mb={5}>
                <HStack justify='center' spacing={2} gap={2} flexWrap={{base:'wrap', sm:'nowrap'}}>
                    
                    <Input type='text' placeholder='Ingrese nueva tarea' bg='white' 
                        value={taskInput} onChange={verifySetInput} flexGrow='1'/>
                    
                    
                    <Button leftIcon={<AddIcon />} type='submit'   color={'white'} bg={primaryColor} _hover={{ bg: 'pink.600' }} 
                    paddingInline={5} flexGrow='1' onClick={addTask}>
                        Agregar
                    </Button>
                    
                </HStack>
                <FormErrorMessage>El campo no puede estar vacío.</FormErrorMessage>
            </FormControl>

    )
}
