import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function BookingModal(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleModalDelete() {
    props.handleDelete(props.bookingId);
    setIsOpen(false);
  }
  return (
    <div>
      <button
        className="mr-2 mt-2 rounded-sm  bg-[#fd973e] px-2  py-1 text-[0.93rem] font-medium text-white hover:bg-[#fca254]"
        onClick={openModal}
      >
        View
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex items-center">
          <div>
            <div className="h-[180px] w-[180px]">
              <img className="h-full w-full  rounded-sm" src={props.dogimg} />
            </div>
          </div>

          <div className="ml-8 opacity-70">
            <div className="flex mb-1 items-baseline">
              <p className="text-lg font-semibold">{props.dogname} </p>
              <p className="text-[0.92rem] ml-1">{props.age}</p>
            </div>
            <p className="mb-1 text-[0.92rem]">{props.size}</p>
            <p className="mb-1 text-[0.92rem]">{props.service}</p>
            <p className="mb-1 text-[0.92rem]">{props.frequency}</p>
            <p className="mb-1 text-[0.92rem]">{props.time}</p>
            <div className="mb-1 flex text-[0.92rem]">
              <p className="mr-2">{props.startdate}</p>
              <p>{props.enddate}</p>
            </div>
            <p className="mb-1 text-[0.92rem]">{props.address}</p>
            <div className="flex">
              <button
                className="mr-2 mt-2 rounded-sm  bg-[#fd973e] px-2  py-1 text-[0.93rem] font-medium text-white hover:bg-[#fca254]"
                onClick={closeModal}
              >
                close
              </button>
              <button
                className="mr-2 mt-2 rounded-sm  bg-[#fd973e] px-2  py-1 text-[0.93rem] font-medium text-white hover:bg-[#fca254]"
                onClick={handleModalDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BookingModal;
