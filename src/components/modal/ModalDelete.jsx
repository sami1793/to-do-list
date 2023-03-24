// import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from "@chakra-ui/react"

// export const ModalDelete = (isOpen, cancelRef, onClose, deleteTask, task) => {
//   return (
//     <AlertDialog
//                     isOpen={isOpen}
//                     leastDestructiveRef={cancelRef}
//                     onClose={onClose}
//                 >
//                     <AlertDialogOverlay>
//                         <AlertDialogContent>
//                             <AlertDialogHeader fontSize='lg' fontWeight='bold'>
//                                 Eliminar tarea
//                             </AlertDialogHeader>

//                             <AlertDialogBody>
//                                 ¿Está seguro de eliminar la tarea? No podra revertirlo luego.
//                             </AlertDialogBody>

//                             <AlertDialogFooter>
//                                 <Button ref={cancelRef} onClick={onClose}>
//                                     Cancelar
//                                 </Button>
//                                 <Button colorScheme='red' onClick={() => deleteTask(task.id)} ml={3}>
//                                     Eliminar
//                                 </Button>
//                             </AlertDialogFooter>
//                         </AlertDialogContent>
//                     </AlertDialogOverlay>
//                 </AlertDialog>
//   )
// }
