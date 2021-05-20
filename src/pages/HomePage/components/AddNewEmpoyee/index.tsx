import React, { memo, useState, useCallback } from 'react';
import styled from "styled-components";
import Button from "../../../../components/Button";
import { EmployessItemStatePayload } from "../../types";
import { useDispatch } from 'react-redux';
import {
  addNewEmployess,
} from '../../slice';

const AddNewEmpoyee = memo(() => {
  const dispatch = useDispatch();
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const addNew = useCallback((e) => {
    e.preventDefault();
    if (username && email && position) {
      const params:EmployessItemStatePayload = {
        username,
        email,
        position
      };
      dispatch(addNewEmployess(params));
      setName('');
      setEmail('');
      setPosition('');
    }
  }, [dispatch, username, email, position]);

  return (
    <FormAddNew
      onSubmit={addNew}
      >
      <div>
        <label>Username</label>
        <input
          placeholder="username"
          aria-label="Set username"
          value={username}
          onChange={(e) => setName(e.target.value)}
          />
      </div>
      <div>
        <label>email</label>
        <input
          placeholder="email"
          aria-label="Set email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>postion</label>
        <input
          placeholder="postion"
          aria-label="Set position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <Button disabled={!(username && email && position)}>Add</Button>
    </FormAddNew>
  )
});

const FormAddNew = styled.form`
  margin-top: 30px;

  label {
    width: 150px;
    width: 150px;
    text-transform: capitalize;
    display: inline-block;
  }
  input {
    height: 30px;
    margin-bottom: 10px;
    min-width: 200px;
  }
`

export default AddNewEmpoyee;