import React, { useCallback, useEffect, useState } from 'react';
import Layout from "../../components/Layout";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import Button from "../../components/Button";

import {
  selectData,
  getDataEmployess,
  addNewEmployess,
} from './slice';

export default function HomePage() {
  const data: any = useSelector(selectData);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  useEffect(() => {
    // debugger
    dispatch(getDataEmployess());
  }, []);

  const addNew = useCallback(() => {
    // TODO: add validate later
    if (name && email && position) {
      dispatch(addNewEmployess());
    }
  }, [dispatch,name, email, position]);
  
  console.log('HomePage', data);
  return (
    <>
      <Layout>
        <h1>
          home page
        </h1>
        <HomePageWrapper>
          <Row>
            <Col>Name</Col>
            <Col>Email</Col>
            <Col>Position</Col>
          </Row>
          {
            data && data.slice(0, 5).map((item: any) => <Row key={item.id}>
              <Col>{item.username}</Col>
              <Col>{item.email}</Col>
              <Col>{item.position}</Col>
            </Row>)
          }

          <BlockAddNew>
            <div>
              <label>name</label>
              <input
                placeholder="name"
                aria-label="Set name amount"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
              <label>email</label>
              <input
                placeholder="email"
                aria-label="Set email amount"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>postion</label>
              <input
                placeholder="postion"
                aria-label="Set position amount"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <Button disabled={!(name && email && position)} onClick={addNew}>Add</Button>
          </BlockAddNew>
        </HomePageWrapper>
      </Layout>
    </>
  );
}


const HomePageWrapper = styled.div`
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  width: 33.33%;
`;

const BlockAddNew = styled.div`
  margin-top: 30px;

  label {
    width: 150px;
    width: 150px;
    text-transform: capitalize;
    display: inline-block;
    marign-bottom: 10px;
  }
  input {
    height: 30px;
  }
`