import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/slices/userSlice";

export default function FormDialog({ open, handleCloseModal }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { isLoading } = useSelector((state) => state.users);
  const { uid } = useSelector((state) => state.auth);

  const handleAddUser = () => {
    if(name && email) {
      dispatch(addUser({ name, email , uid }));
    }else{
      console.log("Please enter name and email");
    }
    handleCloseModal();
  };

  return (
    <Dialog open={open} onClose={handleCloseModal}>
      <DialogTitle sx={{ margin: "2px" }}>Add Contact</DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-number"
          label="Enter Name"
          type="text"
          sx={{ margin: "6px", width: "290px" }}
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>
      <DialogContent sx={{ padding: "0px 21px" }}>
        <TextField
          id="outlined-number"
          label="Enter Email"
          type="mail"
          sx={{ margin: "6px", width: "290px" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>Cancel</Button>
        <Button disabled={isLoading} onClick={handleAddUser}>
           {isLoading ? "Loading..." : "OK"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
