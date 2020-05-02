import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { wait } from '../utils/wait';

const API = 'http://192.168.232.166:3000/todos';

export const fetchTodos = createAsyncThunk<Todo[]>('todos/fetchTodos', async () => {
  const response = await axios.get(API);
  // For loading confirmation.
  await wait(3000);
  return response.data;
});

export const postTodo = createAsyncThunk<Todo, string>('todos/postTodo', async (title) => {
  const todo: Todo = {
    title,
    id: uuid(),
    done: false,
  };
  await axios.post(API, todo);
  return todo;
});

export const updateTodo = createAsyncThunk<Todo, Todo>('todos/updateTodo', async (todo: Todo) => {
  await axios.put(`${API}/${todo.id}`, todo);
  return todo;
});

export const deleteTodo = createAsyncThunk<Todo, Todo>('todos/deleteTodo', async (todo: Todo) => {
  await axios.delete(`${API}/${todo.id}`);
  return todo;
});

export type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export type TodoState = {
  items: Todo[];
  loading: boolean;
  error: Error | null;
};

const initialState: TodoState = {
  items: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      return { ...state, loading: true };
    }),
      builder.addCase(fetchTodos.fulfilled, (state, action) => {
        return { ...state, loading: false, items: action.payload };
      }),
      builder.addCase(fetchTodos.rejected, (state) => {
        return { ...state, loading: false };
      });
    builder.addCase(postTodo.fulfilled, (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      return { ...state, items: state.items.filter((item) => item.id !== action.payload.id) };
    });
  },
});

export const todosReducer = todosSlice.reducer;
