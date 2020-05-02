import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RootState } from '../store';
import { fetchTodos, postTodo, updateTodo, Todo, deleteTodo } from '../store/todos';
import { TodoList } from '../molecules/TodoList/TodoList';
import { TodoListItem } from '../molecules/TodoList/TodoListItem/TodoListItem';
import { Layout } from '../molecules/Layout/Layout';
import { Button } from '../atoms/Button/Button';
import { TextInput } from '../atoms/TextInput/TextInput';
import { Form } from '../molecules/Form/Form';

const TodoForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<{ title: string }>();
  const onSubmit = useCallback(({ title }: { title: string }) => {
    dispatch(postTodo(title));
    reset();
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextInput name="title" ref={register({ required: true })} />
      <Button type="submit">ADD</Button>
    </Form>
  );
};

export const IndexPage = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state: RootState) => state.todos);

  const onCheck = useCallback(
    (todo: Todo) => {
      dispatch(updateTodo({ ...todo, done: !todo.done }));
    },
    [dispatch]
  );

  const onDelete = useCallback(
    (todo: Todo) => {
      dispatch(deleteTodo(todo));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchTodos());
    }
  }, [dispatch]);

  return (
    <Layout>
      <TodoForm />
      {loading ? (
        <p>loading...</p>
      ) : (
        <TodoList>
          {items.map((item) => (
            <TodoListItem todo={item} onCheck={onCheck} onDelete={onDelete} key={item.id} />
          ))}
        </TodoList>
      )}
    </Layout>
  );
};
