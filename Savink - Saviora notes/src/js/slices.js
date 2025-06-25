import { createSlice, nanoid } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  notiis: [
    {
      id: "0000",
      title: "demotitle",
      value: "demotext",
      date: "00/00/00",
    },
  ],
};

export const notiislice = createSlice({
  name: "notiislice",
  initialState,
  reducers: {
    // Add a new paste note
    addnotii: (state, action) => {
      const { t, v, i } = action.payload;

      const newnotii = {
        title: t,
        value: v,
        id: i,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).replace(',', ''),
      };
      state.notiis.push(newnotii);

      const lnotiis = localStorage.getItem("localnotiis");
      if (lnotiis) {
        const parsedNotiiList = JSON.parse(lnotiis);
        parsedNotiiList.push(newnotii);
        localStorage.setItem("localnotiis", JSON.stringify(parsedNotiiList));
      } else {
        localStorage.setItem("localnotiis", JSON.stringify([newnotii]));
      }

      toast.success(`${newnotii.title} is added successfully`);
    },

    // Delete a note
    deletenotii: (state, action) => {
      const notiid = action.payload.id;
      state.notiis = state.notiis.filter((notii) => notii.id !== notiid);

      const lnotiis = localStorage.getItem("localnotiis");
      if (lnotiis) {
        const parsedNotiiList = JSON.parse(lnotiis);
        const updatedNotiiList = parsedNotiiList.filter(
          (notii) => notii.id !== notiid
        );
        localStorage.setItem("localnotiis", JSON.stringify(updatedNotiiList));
      }

      toast.success("Note deleted successfully");
    },

    // Update a note
    updatenotii: (state, action) => {
      const { t, v, i } = action.payload;

      const newnotii = {
        title: t,
        value: v,
        id: i,
        date: new Date("2025-06-23").toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).replace(',', ''),
      };

      const index = state.notiis.findIndex((notii) => notii.id === i);
      if (index !== -1) {
        state.notiis[index] = newnotii;
      }

      const lnotiis = localStorage.getItem("localnotiis");
      if (lnotiis) {
        const parsedNotiiList = JSON.parse(lnotiis);
        const updatedList = parsedNotiiList.map((notii) =>
          notii.id === i ? newnotii : notii
        );
        localStorage.setItem("localnotiis", JSON.stringify(updatedList));
      } else {
        localStorage.setItem("localnotiis", JSON.stringify([newnotii]));
      }

      toast.success("Updated successfully");
    },

    // Load notes from localStorage
    loadfromlocalstorage: (state) => {
      const local = localStorage.getItem("localnotiis");
      state.notiis = local ? JSON.parse(local) : [];
    },
  },
});

export default notiislice.reducer;
export const {
  addnotii,
  deletenotii,
  updatenotii,
  loadfromlocalstorage,
} = notiislice.actions;
