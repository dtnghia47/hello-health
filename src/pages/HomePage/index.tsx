import React, { useCallback, useEffect, useState, memo, useMemo } from 'react';
import Layout from "../../components/Layout";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import Button from "../../components/Button";
import Table from "./components/Table";
import AddNewEmpoyee from "./components/AddNewEmpoyee";

import {
  selectData,
  getDataEmployess,
  incrementPage, decrementPage,
  selectFilter,
} from './slice';

export const HomePage = memo(() => {
  const data = useSelector(selectData);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataEmployess(filter));
  }, [dispatch, filter]);

  const nextPage = useCallback(() => {
    dispatch(incrementPage());
  }, [dispatch, filter]);

  const prevPage = useCallback(() => {
    dispatch(decrementPage());
  }, [dispatch, filter]);

  const emloyess = useMemo(() => data, [data]);
  return (
    <>
      <Layout>
        <h1>
          Home page
        </h1>
        <HomePageWrapper>
          <Table data={emloyess} />
          <BlockAction>
            <Button disabled={filter.page <= 1} onClick={() => prevPage && prevPage()}>Prev</Button>
            <Button disabled={filter.limit > data.length} onClick={() => nextPage && nextPage()}>Next</Button>
          </BlockAction>
          <AddNewEmpoyee />
        </HomePageWrapper>
      </Layout>
    </>
  );
});


// TODO: move color to common

const HomePageWrapper = styled.div`
`;

const BlockAction = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 10px auto;
`