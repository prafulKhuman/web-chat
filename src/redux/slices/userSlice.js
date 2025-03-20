import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../../firebaseConfig";
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
import { serverTimestamp } from "firebase/database";

// Async thunk for adding a user
export const addUser = createAsyncThunk(
  "users/addUser",
  async ({ name, email, uid }, { rejectWithValue }) => {
    try {
		console.log("success");
      const docRef = await addDoc(collection(firestore, "users"), {
        name,
        email,
		    uid,
        createdAt: new Date(),
      });
      return { id: docRef.id, name, email,uid };
    } catch (error) {
		console.log("error",error);
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "users"));
      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateOnlineStatus = createAsyncThunk(
  "users/updateOnlineStatus",
  async ({ uid, isOnline }, { rejectWithValue }) => {
    try {
      const userRef = doc(firestore, "users", uid);
      await updateDoc(userRef, {
        isOnline,
        lastSeen: serverTimestamp(),
      });
      return { uid, isOnline };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
    isHeaderOpen: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add User
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
