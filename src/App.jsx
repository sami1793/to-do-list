import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { IconButton, Box, VStack, Text, HStack, StackDivider, Spacer, Heading, Container, FormControl, Select, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Filter } from './components/form/Filter'
import { Form } from './components/form/Form'
import { TaskList } from './components/taskList/TaskList'
import { tasks } from './data/tasks'
import { getLocalStorage } from './utils/localStorage'

const colorFuerte = 'orange.800'

// bgGradient='radial(red.50, red.200)'

function App() {
  const inicialTasks = getLocalStorage('taskListStorage') || tasks;

  const [taskList, setTaskList] = useState(inicialTasks);
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('todas');


  return (
    <Box bgGradient='linear(to-r,gray.700,gray.900)' w='100vw' minH='100vh' p={4}>
      <Container className='App' maxW='md' p={10} pt={5} borderRadius='2xl' spacing={4} borderWidth={3} bg='white' borderColor='red.400'>
        <Heading as='h1' size='3xl' textAlign='center' color='red.400' mb={10} >To Do List</Heading>
        <Box>
          <Form taskInput={taskInput} setTaskInput={setTaskInput}
            taskList={taskList} setTaskList={setTaskList} />
        </Box>
        <Box>
          <TaskList taskList={taskList} setTaskList={setTaskList} />
        </Box>
        <Filter filter={filter} setFilter={setFilter} setTaskList={setTaskList}/>
      </Container>
    </Box>


  )
}

export default App
