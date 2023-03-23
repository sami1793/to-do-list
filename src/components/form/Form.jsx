import {
    FormControl, Input, Box, FormErrorMessage, VStack, useToast,
    Button, HStack, Select
} from '@chakra-ui/react'
import { useState } from 'react';

import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

export const Form = ({ taskInput, setTaskInput, taskList, setTaskList }) => {

    const [filter, setFilter] = useState('todas');
    const [isInvalidInput, setIsInvalidInput] = useState(false);
    const toast = useToast()

    const verifySetInput = (e) =>{
        if(e.target.value.length>0){
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
                duration: 3000,
                isClosable: true,
              })
        }
        else{
            setIsInvalidInput(true)
        }
    }



    const filterTask = (e) => {
        setFilter(e.target.value);
        const copyTaskList = getLocalStorage('taskListStorage')
        let newTaskList
        switch (e.target.value) {
            case 'completadas':
                newTaskList = copyTaskList.filter((task) => task.done === true);
                setTaskList(newTaskList);
                break;
            case 'pendientes':
                newTaskList = copyTaskList.filter((task) => task.done === false);
                setTaskList(newTaskList);
                break;
            default:
                setTaskList(copyTaskList)
                break;
        }
    }

    return (
        <VStack maxW={400} bg='white' spacing={5} mb={5}>
            <FormControl as='form' isInvalid={isInvalidInput&&true}>
                <HStack>
                    <Input type='text' placeholder='Ingrese nueva tarea' bg='white' focusBorderColor='red.200'
                        value={taskInput} onChange={verifySetInput} />
                    <Button type='submit' bg='gray.700' color='white' _hover={{ bg: 'gray.100', color: 'pink.600' }}
                        onClick={addTask}>Agregar</Button>
                </HStack>
                <FormErrorMessage>El campo no puede estar vacío.</FormErrorMessage>
            </FormControl>

            <FormControl>
                <Select bg={'white'} value={filter} onChange={filterTask}>
                    <option value='todas'>Todas</option>
                    <option value='completadas'>Completadas</option>
                    <option value='pendientes'>Pendientes</option>
                </Select>
            </FormControl>
        </VStack>
    )
}
