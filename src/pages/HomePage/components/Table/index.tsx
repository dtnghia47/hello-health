import React, { memo } from 'react';
import styled from "styled-components";
import { EmployessItemState } from '../../types';

interface Props {
  data: Array<EmployessItemState>,
}

const Table = memo(({
  data,
}: Props) => {
  return (
    <TableWrapper>
      <TableTD>
        <Col>Name</Col>
        <Col>Email</Col>
        <Col>Position</Col>
      </TableTD>
      <Content>
        {
          data.map((item: any) => <Row key={item.id}>
            <Col>{item.username}</Col>
            <Col>{item.email}</Col>
            <Col>{item.position}</Col>
          </Row>)
        }
      </Content>
    </TableWrapper>
  )
});

const TableWrapper = styled.div`
  min-height: 250px;
`;
const Content = styled.div`
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
  padding: 10px;
`;

export default Table;