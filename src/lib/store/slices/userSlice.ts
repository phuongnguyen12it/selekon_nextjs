import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import listUsersState from '@/mocks/users/listUsersState.json'

// Define interface for user state
interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

interface UserState {
    currentUser: User | null;
    isLoggedIn: boolean;
    users: User[];
    loading: boolean;
}

const initialState : UserState = {
    currentUser: null,
    isLoggedIn: false,
    users: listUsersState,
    loading: false,
}

// Create slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Login action
        login: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.isLoggedIn = false;
        },

        // User management
        addUser: (state, action: PayloadAction<Omit<User, 'id'>>) => {
            const newUser: User = {
                ...action.payload,
                id: Date.now().toString(),
            };
            state.users.push(newUser);
        },
        updateUser: (state, action: PayloadAction<{id: string, updates: Partial<User>}>) => {
            const { id, updates } = action.payload;
            const userIndex = state.users.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                state.users[userIndex] = { ...state.users[userIndex], ...updates };
            }
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },

        //loading state
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
});

// Export actions and reducer
export const {
    login,
    logout,
    addUser,
    updateUser,
    deleteUser,
    setLoading,
} = userSlice.actions;

export default userSlice.reducer;