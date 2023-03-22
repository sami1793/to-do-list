import { FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, Button, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage';

export const Form = ({taskInput, setTaskInput, taskList, setTaskList}) => {

    const addTask = () =>{
        const newTaskId = taskList[taskList.length-1]['id']+1;
        const newObjTask = {
            id: newTaskId,
            title: taskInput,
            done: false
        }
        const newTaskList = [...taskList,newObjTask];

        setTaskList(newTaskList);
        setLocalStorage('taskListStorage',newTaskList);
        setTaskInput('');
    }

    return (
        <FormControl mb={5}>
            <HStack>
                <Input type='text' placeholder='Ingrese nueva tarea' bg='white' focusBorderColor='red.200' 
                value={taskInput} onChange={(e)=>setTaskInput(e.target.value)}/>
                <Button bg='gray.700' color='white' _hover={{bg:'gray.100', color:'pink.600'}}
                onClick={addTask}>Agregar</Button>
            </HStack>
            <FormErrorMessage>El campo no puede estar vacío.</FormErrorMessage>
        </FormControl>
    )
}
