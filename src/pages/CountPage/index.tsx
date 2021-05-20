/**
 *
 * Count
 *
 */
import React, { useState, useCallback, memo } from 'react';
import styled from 'styled-components';
import Layout from "../../components/Layout"
import Button from "../../components/Button";

export const CountPage = memo(() => {
  const [number, setNumber] = useState(0);
  const resetNumber = useCallback(() => {
    setNumber(0);
  }, []);

  const increaseNumber = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  return (
    <>
      <Layout>
        <h1>Count Page</h1>
        <CountWrapper>
          <Number>
            {number}
          </Number>
          <div>
            <Button disabled={number === 0} margin="20px" onClick={resetNumber}>
              Reset
            </Button>
            <Button margin="20px" onClick={increaseNumber}>
              Increase
            </Button>
          </div>
        </CountWrapper>
      </Layout>
    </>
  );
});

const Number = styled.div`
  font-size: 100px;
  color: #24a9a7;
  margin-bottom: 50px;
`;

const CountWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
`;