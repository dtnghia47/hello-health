/**
 *
 * Count
 *
 */
import React, { memo, useState, useCallback } from 'react';
import styled from 'styled-components';
import Layout from "../../components/Layout"
import Button from "../../components/Button";

interface Props {}

export default function CountPage() {
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
            <ButtonStyled onClick={resetNumber}>
              Reset
            </ButtonStyled>
            <ButtonStyled onClick={increaseNumber}>
              Increase
            </ButtonStyled>
          </div>
        </CountWrapper>
      </Layout>
    </>
  );
};

const Number = styled.div`
  font-size: 40px;
  color: #24a9a7;

`;

const CountWrapper = styled.div`
  text-align: center;
`;
  
const ButtonStyled = styled(Button)`
  margin: 20px;
`;
