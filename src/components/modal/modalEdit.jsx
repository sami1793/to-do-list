// export const modalEdit = () => {
    
//     const { isOpen, onOpen, onClose } = useDisclosure()

//     const initialRef = React.useRef(null)
//     const finalRef = React.useRef(null)

//     return (
//         <>
//             <Button onClick={onOpen}>Editar</Button>
//             <Button ml={4} ref={finalRef}>
//                 I'll receive focus on close
//             </Button>

//             <Modal
//                 initialFocusRef={initialRef}
//                 finalFocusRef={finalRef}
//                 isOpen={isOpen}
//                 onClose={onClose}
//             >
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>Editar Tarea</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody pb={6}>
//                         <FormControl>
//                             <Input ref={initialRef} placeholder='Tarea' />
//                         </FormControl>

//                     </ModalBody>

//                     <ModalFooter>
//                         <Button colorScheme='blue' mr={3} >
//                             Save
//                         </Button>
//                         <Button ref={finalRef} onClick={onClose}>Cancel</Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     )
  
// }
