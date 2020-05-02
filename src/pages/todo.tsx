import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { updateTodo } from '../store/todos';
import { Layout } from '../molecules/Layout/Layout';
import { Button } from '../atoms/Button/Button';

export const TodoPage = () => {
  const { id: todoId } = useParams<{ id: string }>();
  const todo = useSelector((state: RootState) => state.todos.items.find((item) => item.id === todoId));

  const dispatch = useDispatch();

  const { register, setValue, handleSubmit } = useForm<{ title: string }>({
    defaultValues: {
      title: todo?.title,
    },
  });

  const [isEditing, setEditing] = useState(false);

  const onTitleClick = useCallback(() => {
    if (!todo) return;
    setEditing(true);
  }, [setValue]);

  const onSubmit = useCallback(({ title }: { title: string }) => {
    if (!todo) return;
    dispatch(updateTodo({ ...todo, title }));
    setEditing(false);
  }, []);

  useEffect(() => {
    if (isEditing && todo) {
      setValue('title', todo.title);
    }
  }, [isEditing]);

  return todo ? (
    <Layout>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="title" type="text" ref={register({ required: true })} />
          <Button type="submit">SAVE</Button>
        </form>
      ) : (
        <h1 onClick={onTitleClick}>{todo.title}</h1>
      )}
    </Layout>
  ) : (
    <h1>404</h1>
  );
};
