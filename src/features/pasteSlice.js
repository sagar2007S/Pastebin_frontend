import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

//-------------------------------- All Pastes --------------------------------------------------------------------------------------------
export const getAllPastes = createAsyncThunk(
  "user/pastes",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/v2/pastes/user/all-pastes",
        {
          withCredentials: true,
        },
      );
      return res.data.data;
    } catch (error) {
      return rejectWithValue(null);
    }
  },
);

//------------------------------------------------Add Paste----------------------------------------------------------------------------------

export const createNewPaste = createAsyncThunk(
  "user/addPaste",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v2/pastes/user/create-paste",
        credentials,
        {
          withCredentials: true,
        },
      );
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

//------------------------------------------------getPasteById----------------------------------------------------------------------------------

export const getPasteById = createAsyncThunk(
  "paste/fetchById",
  async (pasteId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v2/pastes/user/paste/${pasteId}`,
        {
          withCredentials: true,
        },
      );
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
//--------------------------------------------------------------DeletePaste--------------------------------------------------------------

export const deletePaste = createAsyncThunk(
  "paste/deletePaste",
  async (pasteId, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/v2/pastes/user/paste/${pasteId}`,
        {
          withCredentials: true,
        },
      );
      return pasteId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

//---------------------------------------------Upadate Paste------------------------------------------------------------------------

// export const updatePaste = createAsyncThunk(
//   "paste/updatePaste",
//   async (pasteId, paste, { rejectWithValue }) => {
//     try {
//       const res = await axios.put(
//         `http://localhost:4000/api/v2/pastes/user/paste/updatePaste/${pasteId}`, paste,
//         {
//           withCredentials: true,
//         },
//       );
//       return pasteId;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   },
// );


export const updatePaste = createAsyncThunk(
  "paste/updatePaste",
  async ({ pasteId, paste }, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/v2/pastes/user/paste/updatePaste/${pasteId}`,
        paste, // 👈 actual data (title, value)
        {
          withCredentials: true, // 👈 config (cookies)
        }
      );

      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


// const initialState = {
//  pastes:localStorage.getItem("pastes")
//  ? JSON.parse(localStorage.getItem("pastes")) : []
// }

export const pasteSlice = createSlice({
  name: "paste",
  initialState: {
    pastes: [],
    loading: false,
    currentPaste: null,
    isAuthenticate: false,
    deletedPaste: null,
    error: null,
  },
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Created Sucessfully");
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste Updated");
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },

    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      console.log(pasteId);

      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index >= 0) {
        state.pastes.splice(index, 1);

        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Deleted");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      //pending state
      .addCase(getAllPastes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPastes.fulfilled, (state, action) => {
        state.loading = false;
        state.pastes = action.payload;
        state.isAuthenticate = true;
      })
      .addCase(getAllPastes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //create paste

      .addCase(createNewPaste.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewPaste.fulfilled, (state, action) => {
        state.loading = false;
        state.pastes = action.payload.paste;
        state.isAuthenticate = true;
      })
      .addCase(createNewPaste.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //get pastebyId
      .addCase(getPasteById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPasteById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPaste = action.payload;
        state.isAuthenticate = true;
      })
      .addCase(getPasteById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //deletePaste

      .addCase(deletePaste.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePaste.fulfilled, (state, action) => {
        state.loading = false;
        state.pastes = state.pastes.filter(
          (paste) => paste._id !== action.payload,
        );
        state.isAuthenticate = true;
      })
      .addCase(deletePaste.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //UpdatePaste

      .addCase(updatePaste.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePaste.fulfilled, (state, action) => {
         state.loading = false;
        const updatedPaste = action.payload;
        const index = state.pastes.findIndex(
          (paste) => paste._id === updatedPaste._id,
        );
        if (index !== -1) {
          state.pastes[index] = updatedPaste;
        }
        state.isAuthenticate = true;
        toast.success("Paste Updated Successfully");
      })
      .addCase(updatePaste.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetAllPastes, updateToPaste, addToPaste, removeFromPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
