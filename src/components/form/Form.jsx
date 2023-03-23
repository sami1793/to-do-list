import {
    FormControl, Input, Box, FormErrorMessage, InputGroup, InputRightElement,
    Button, HStack, Select
} from '@chakra-ui/react'
import { useState } from 'react';
import { setLocalStorage } from '../../utils/localStorage';

export const Form = ({ taskInput, setTaskInput, taskList, setTaskList }) => {

    const addTask = (e) => {
        e.preventDefault();
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
    }

    const [filter, setFilter] = useState('todas');

    // const filterTask = (e) => {
    //     setFilter(e.target.value);
    //     console.log(filter);
    //     const copyTaskList = [...taskList]
    //     let newTaskList
    //     switch (filter) {
    //         case 'completadas':
    //             newTaskList = copyTaskList.filter((task) => task.done === true);
    //             setTaskList(newTaskList);
    //             break;
    //         case 'pendientes':
    //             newTaskList = copyTaskList.filter((task) => task.done === false);
    //             setTaskList(newTaskList);
    //             break;
    //         default:
    //             setTaskList(copyTaskList)

    //     }
    // }

    return (
        <Box maxW={400} bg='gray.200' p={3} mb={5}>
            <FormControl as='form' isInvalid>
                <HStack>
                    <Input type='text' placeholder='Ingrese nueva tarea' bg='white' focusBorderColor='red.200'
                        value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
                    <Button type='submit' bg='gray.700' color='white' _hover={{ bg: 'gray.100', color: 'pink.600' }}
                        onClick={addTask}>Agregar</Button>
                </HStack>
                <FormErrorMessage>El campo no puede estar vacío.</FormErrorMessage>
            </FormControl>

            <FormControl>
                <Select bg={'white'} value={filter}>
                    <option value='todas'>Todas</option>
                    <option value='completadas'>Completadas</option>
                    <option value='pendientes'>Pendientes</option>
                </Select>
            </FormControl>


        </Box>
    )
}
