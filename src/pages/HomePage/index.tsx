import React, { useCallback, useEffect, useState } from 'react';
import Layout from "../../components/Layout";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import Button from "../../components/Button";

import {
  selectData,
  getDataEmployess,
  addNewEmployess,
  incrementPage, decrementPage,
  selectMaxPage,
  selectCurentPage 
} from './slice';

export default function HomePage() {
  const dataShow: any = useSelector(selectData);
  const maxPage: any = useSelector(selectMaxPage);
  const page: any = useSelector(selectCurentPage);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  useEffect(() => {
    dispatch(getDataEmployess());
  }, []);

  const addNew = useCallback(() => {
    // TODO: add validate later
    if (name && email && position) {
      dispatch(addNewEmployess());
    }
  }, [dispatch,name, email, position]);

  const nextPage = useCallback(() => {
      dispatch(incrementPage());
  }, [dispatch]);

  const prevPage = useCallback(() => {
    dispatch(decrementPage());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <h1>
          Home page
        </h1>
        <p>I will update UI home page later</p>
        <HomePageWrapper>
          <Content>
            <TableTD>
              <Col>Name</Col>
              <Col>Email</Col>
              <Col>Position</Col>
            </TableTD>
            {
              dataShow.map((item: any) => <Row key={item.id}>
                <Col>{item.username}</Col>
                <Col>{item.email}</Col>
                <Col>{item.position}</Col>
              </Row>)
            }
          </Content>
          <BlockAction>
            <Button disabled={page === 0} onClick={prevPage}>Prev</Button>
            <Button disabled={page === (maxPage-1)} onClick={nextPage}>Next</Button>
          </BlockAction>

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


// TODO: move color to common

const HomePageWrapper = styled.div`
`;

const Content = styled.div`
  min-height: 150px;
`

const TableTD  = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  & + & {
    border-top: 1px solid #CCCCCC;
  }
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

const BlockAction = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 10px auto;
`