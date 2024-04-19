import { Table } from "@mantine/core";
import { processFlavData } from "../procDataFunc";
import { processGammaData } from "../procDataFunc";
import { calculate } from "../procDataFunc";

function TableData({ isGamma }) {
  const data = isGamma
    ? calculate(processGammaData())
    : calculate(processFlavData());
  console.log(data);
  const preHeader = isGamma ? "Gamma" : "Flavanoid";
  return (
    <Table withColumnBorders withRowBorders withTableBorder>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>MEASURE</Table.Th>
          {/* to incorporate dynamic data of multiple classes */}
          {data.mean.map((el, idx) => (
            <Table.Th key={idx}>Class {idx + 1}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th>{preHeader} Mean</Table.Th>
          {data.mean.map((item) => (
            <Table.Td key={item}>{item}</Table.Td>
          ))}
        </Table.Tr>
        <Table.Tr>
          <Table.Th>{preHeader} Median</Table.Th>
          {data.median.map((item) => (
            <Table.Td key={item}>{item}</Table.Td>
          ))}
        </Table.Tr>
        <Table.Tr>
          <Table.Th>{preHeader} Mode</Table.Th>
          {data.mode.map((item) => (
            <Table.Td key={item}>{item}</Table.Td>
          ))}
        </Table.Tr>
      </Table.Tbody>
      <Table.Caption>
        {isGamma ? "GAMMA TABLE" : "FLAVANOIDS TABLE"}
      </Table.Caption>
    </Table>
  );
}

export default TableData;
