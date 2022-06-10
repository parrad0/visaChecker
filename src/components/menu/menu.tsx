import React from "react";
import "./menu.scss";
import TodayIcon from "@material-ui/icons/Today";
import LabelRoundedIcon from "@material-ui/icons/LabelRounded";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { IconButton } from "@material-ui/core";
import { useAppSelector } from "../../redux/hooks/hook";
import { useDispatch } from "react-redux";
import { setAddModal, setView } from "../../redux/reducers/wordle";

export function Menu() {
  const view = useAppSelector((state) => state.visaChecker.view);
  const addModal = useAppSelector((state) => state.visaChecker.addModal);
  const dispatch = useDispatch();
  return (
    <div className="wrap">
      <div className="menu">
        <IconButton onClick={() => dispatch(setView(1))}>
          <TodayIcon style={{ color: view === 1 ? "white" : "black" }} />
        </IconButton>
        <IconButton
          style={{
            color: "black",
          }}
          onClick={() => {
            dispatch(setAddModal(true));
          }}
        >
          <AddCircleRoundedIcon />
        </IconButton>
        <IconButton
          style={{ color: view === 2 ? "white" : "black" }}
          onClick={() => dispatch(setView(2))}
        >
          <LabelRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}
