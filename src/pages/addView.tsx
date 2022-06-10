import {
  Button,
  Fade,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import LabelRoundedIcon from "@material-ui/icons/LabelRounded";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hook";
import { addDate, setAddModal, setTagModal } from "../redux/reducers/wordle";
import { AddTagView } from "./addTag";
import "./addview.scss";

export function AddView({ saveTag }: any) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [addTagModal, setAddTagModal] = useState(false);
  const tags = useAppSelector((state) => state.visaChecker.tags);
  const dispatch = useAppDispatch();
  const [tag, setTag] = useState("");
  const open = useAppSelector((state) => state.visaChecker.addModal);
  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={() => dispatch(setAddModal(false))}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      closeAfterTransition={true}
    >
      <Fade
        timeout={{
          enter: 1000,
          // exit: 500,
        }}
        in={open}
      >
        <>
          <div className="modal">
            <div onClick={() => dispatch(setAddModal(false))} className="close">
              <CloseIcon />
            </div>
            <div className="date">
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
              />
            </div>
            <div className="date">
              <DatePicker
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
              />
            </div>
            <div>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tag}
                  onChange={(a: any) => setTag(a.target.value)}
                >
                  {tags.map((tag, index) => {
                    return (
                      <MenuItem key={index} value={index}>
                        {tag.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <IconButton onClick={() => dispatch(setTagModal(true))}>
                <LabelRoundedIcon />
              </IconButton>
            </div>
            <Button
              onClick={() => {
                dispatch(
                  addDate({
                    name: "huevo",
                    id: 0,
                    location: "Madrid",
                    startDate: startDate,
                    endDate: endDate,
                  })
                );
              }}
              variant="contained"
            >
              Add date
            </Button>
          </div>
          <AddTagView open={addTagModal} saveTag={saveTag} />
        </>
      </Fade>
    </Modal>
  );
}
