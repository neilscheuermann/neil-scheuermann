import React, { Fragment } from "react"
import styled from "styled-components"

const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`

const TR = styled.tr`
  :nth-child(even) {
    background-color: #dddddd;
  }
`

const TH = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`
const TD = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`

const TableTemplate = () => (
  <Fragment>
    <h2>TABLE</h2>
    <Table>
      <TR>
        <TH>Shortcuts</TH>
        <TH>Description</TH>
      </TR>

      <TR>
        <TD>Alfreds Futterkiste</TD>
        <TD>Maria Anders</TD>
      </TR>
      <TR>
        <TD>Alfreds Futterkiste</TD>
        <TD>Maria Anders</TD>
      </TR>
      <TR>
        <TD>Alfreds Futterkiste</TD>
        <TD>Maria Anders</TD>
      </TR>
    </Table>
  </Fragment>
)

export default TableTemplate
