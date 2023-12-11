import React from 'react'
import { Modal,Header,Image,Button } from 'semantic-ui-react'

function BookingModal(props) {
  return (
    <Modal onClose={()=>props.setOpen(false)} onOpen={()=>props.setOpen(true)} open={props.open} >
        <Modal.Header>Booking Detail</Modal.Header>
        <Modal.Content image>
            <Image size="medium" src={props.dogImg} wrapped />
            <Modal.Description>
                <Header>{props.dogname}</Header>
                <p>{props.service}</p>
                <p>{props.age}</p>
                <p>{props.time}</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <button onClick={()=>props.setOpen(false)}>
                Cancel
            </button>
            <button onClick={()=>props.handleDelete(props.bookingid)}>
                Delete
            </button>
        </Modal.Actions>
    </Modal>
  )
}

export default BookingModal