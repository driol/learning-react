import React, { useCallback } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../../store/todos';
import { Checkbox } from '../../../atoms/Checkbox/Checkbox';
import { Button } from '../../../atoms/Button/Button';
import { Link } from 'react-router-dom';

type Props = {
  todo: Todo;
  onCheck: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>;

const Component: React.FC<Props> = ({ todo, onCheck, onDelete, ...props }) => {
  const onCheckChange = useCallback(() => {
    onCheck(todo);
  }, [todo, onCheck]);

  const onDeleteClick = useCallback(() => {
    onDelete(todo);
  }, [todo, onDelete]);

  return (
    <li {...props}>
      <Checkbox className="checkbox" id={todo.id} defaultChecked={todo.done} onChange={onCheckChange}>
        <span className={clsx('title', { done: todo.done })}>{todo.title}</span>
      </Checkbox>
      <Button className="delete" onClick={onDeleteClick}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <Link className="edit" to={`/todos/${todo.id}`}>
        <Button className="editButton">
          <FontAwesomeIcon icon={faPen} />
        </Button>
      </Link>
    </li>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  padding: 8px 16px;

  &:hover {
    background-color: hsl(0, 0%, 80%);
  }

  .checkbox {
    width: calc(100% - 88px);
    flex-grow: 1;
  }

  .title.done {
    text-decoration: line-through;
  }

  .delete {
    margin-left: 16px;
  }

  .edit {
    margin-left: 8px;
  }

  button {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 50%;
  }
`;

export const TodoListItem = StyledComponent;
