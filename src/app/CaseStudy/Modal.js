import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  title,
  id,
  challenge,
  proposal,
  benefits,
  modal
}) {
  const [open, setOpen] = React.useState(modal);
  const handleOpen = () => setOpen(true);
  const handleClose = () => !modal;

  return (
    <div >
      
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="my-auto h-screen flex"
      >
        <Box className="card_backdrop w-96 sm:w-80 mx-auto my-auto rounded-lg text-white  border-2 border-blue-600 p-2">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold w-52 bg-red-700">{title}</h1>
              <h3 className="text-lg font-semibold">Customer Challenges</h3>
              <p className="text-sm ">{challenge}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mt-2">Our Proposal</h3>
              <p className="text-sm line-clamp-6">{proposal}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mt-2">Customer Benefits</h3>
              <p className="text-sm line-clamp-6">{benefits}</p>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
