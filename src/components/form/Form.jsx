import { FormControl, Input, Box, FormErrorMessage, InputGroup, InputRightElement, Button, HStack } from '@chakra-ui/react'
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

    return (
        <Box maxW={400} bg='gray.200' p={3} mb={5}>
            <FormControl as='form'>
                <HStack>
                    <Input type='text' placeholder='Ingrese nueva tarea' bg='white' focusBorderColor='red.200'
                        value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
                    <Button type='submit' bg='gray.700' color='white' _hover={{ bg: 'gray.100', color: 'pink.600' }}
                        onClick={addTask}>Agregar</Button>
                </HStack>
                <FormErrorMessage>El campo no puede estar vacío.</FormErrorMessage>
            </FormControl>
        </Box>
    )
}
