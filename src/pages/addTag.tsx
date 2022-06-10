import { Button, Modal, Slide, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import { CirclePicker } from "react-color";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks/hook";
import { addTag, setTagModal } from "../redux/reducers/wordle";
import "./addview.scss";

export function AddTagView({ saveTag, saveDate, children }: any) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const open = useAppSelector((state) => state.visaChecker.addTagModal);
  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={() => dispatch(setTagModal(false))}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      closeAfterTransition
    >
      <Slide in={open} direction="up">
        <div className="modal">
          <div onClick={() => dispatch(setTagModal(false))} className="close">
            <CloseIcon />
          </div>
          <div className="date">
            <form noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Name"
                value={name}
                onChange={(a: any) => setName(a.target.value)}
              />
            </form>
          </div>
          <div className="date">
            <form noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Description"
                value={description}
                onChange={(a: any) => setDescription(a.target.value)}
              />
            </form>
          </div>
          <div className="date">
            <CirclePicker
              color={color}
              onChangeComplete={(a: any) => setColor(a.hex)}
            />
          </div>
          <Button
            variant="contained"
            onClick={() =>
              dispatch(
                addTag({
                  name: name,
                  description: description,
                  color: color,
                })
              )
            }
          >
            Add Tag
          </Button>
        </div>
      </Slide>
    </Modal>
  );
}
