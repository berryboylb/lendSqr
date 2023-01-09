import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";

type Profile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
};

type Guarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
};

type Socials = {
  facebook: string;
  instagram: string;
  twitter: string;
};

type Education = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
};

export type User = {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: Profile;
  guarantor: Guarantor | Guarantor[];
  accountBalance: string;
  accountNumber: string;
  socials: Socials;
  education: Education;
  id: string;
};

type InitialState = {
  loading: boolean;
  users: User[] | null;
  singleUser: User | null;
  error: string | null;
};

const initialState: InitialState = {
  loading: true,
  users: null,
  singleUser: null,
  error: null,
};

export const getUsers = createAsyncThunk("user/getUsers", async (values) => {
  try {
    const res = await axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
    toast.success("Success");
    return res.data;
  } catch (err: any) {
    if (err) toast.error(err.message);
    if (err.response.data) {
      err.response.data.message.map((err: string) => toast.error(err));
      return err.response.data.message;
    }
  }
});


export const getSingleUser = createAsyncThunk("user/getSingleUser", async (id:number) => {
  try {
    const res = await axios.get(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id} `
    );
    toast.success("Success");
    return res.data;
  } catch (err: any) {
    if (err) toast.error(err.message);
    if (err.response.data) {
      err.response.data.message.map((err: string) => toast.error(err));
      return err.response.data.message;
    }
  }
});

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      }
    );
    builder.addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload.message || "Something went wrong";
    });
    builder.addCase(getSingleUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getSingleUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.singleUser = action.payload;
      }
    );
    builder.addCase(
      getSingleUser.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message || "Something went wrong";
      }
    );
  },
});

const UserReducer = UsersSlice.reducer;

export default UserReducer;
