import { IconButton, Box, VStack, Text, HStack, Heading, Container, FormControl, Select, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Filter } from './components/form/Filter'
import { Form } from './components/form/Form'
import { TaskList } from './components/taskList/TaskList'
import { tasks } from './data/tasks'
import { getLocalStorage } from './utils/localStorage'


function App() {
  const inicialTasks = getLocalStorage('taskListStorage') || tasks;

  const [taskList, setTaskList] = useState(inicialTasks);
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('todas');

  return (
    <Box w='100vw' minH='100vh' p={4} bgGradient='linear(to-b, gray.700 5%, gray.700 90%)' >
      <Container className='App' maxW='md' p={10} pt={5} borderRadius='2xl' borderWidth={3} >
        <Heading as='h1' size='3xl' textAlign='center' color='whiteAlpha.900' mb={10} >
          <Text as='i' color='pink.400'>To Do </Text>
          <Text as='span'>List</Text>
        </Heading>
        <Box>
          <Form taskInput={taskInput} setTaskInput={setTaskInput}
            taskList={taskList} setTaskList={setTaskList} />
        </Box>
        <Box>
          <TaskList taskList={taskList} setTaskList={setTaskList} />
        </Box>
        <Filter filter={filter} setFilter={setFilter} setTaskList={setTaskList} />
      </Container>
      <Box as='footer' color='white' p={5} textAlign='right'>Design with 💛 by <Text as='i'>Sami</Text></Box>
    </Box>


  )
}

export default App
