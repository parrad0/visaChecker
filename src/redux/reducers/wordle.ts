import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";
import { DataSet, Tag } from "../../models/model";

export interface InitialState {
  dataset: DataSet[];
  tags: Tag[];
  view: number;
  addModal: boolean;
  addTagModal: boolean;
}

const initialState: InitialState = {
  dataset: [
    {
      id: 0,
      name: "Google I/O",
      location: "San Francisco, CA",
      startDate: new Date(2022, 4, 28),
      endDate: new Date(2022, 4, 29),
      color: "blue",
    },
    {
      id: 1,
      name: "Microsoft Convergence",
      location: "New Orleans, LA",
      startDate: new Date(2022, 5, 16),
      endDate: new Date(2022, 5, 19),
      color: "green",
    },
  ],
  tags: [],
  view: 1,
  addModal: false,
  addTagModal: false,
};
// FLAT REDUCER
export const reducer = createSlice({
  name: "visaChecker",
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<Tag>) => {
      return produce(state, (draftstate: InitialState) => {
        draftstate.tags.push(action.payload);
      });
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      return produce(state, (draftstate: InitialState) => {
        draftstate.tags.filter((tag) => tag.name !== action.payload);
      });
    },
    addDate: (state, action: PayloadAction<DataSet>) => {
      return produce(state, (draftstate: InitialState) => {
        draftstate.dataset.push(action.payload);
      });
    },
    setView: (state, action: PayloadAction<number>) => {
      return produce(state, (draftstate: InitialState) => {
        draftstate.view = action.payload;
        draftstate.addModal = false;
      });
    },
    setTagModal: (state, action: PayloadAction<boolean>) => {
      return produce(state, (draftstate: InitialState) => {
        draftstate.addTagModal = action.payload;
      });
    },
    setAddModal: (state, action: PayloadAction<boolean>) => {
      return produce(state, (draftstate: InitialState) => {
        draftstate.addModal = action.payload;
      });
    },
  },
});

export const { addTag, addDate, setAddModal, setView, setTagModal } =
  reducer.actions;
