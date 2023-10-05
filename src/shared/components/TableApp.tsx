import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  id: number,
  name: string,
  description: number,
  isActive: boolean,
  data: number,
  date: Date,
) {
  return { id, name, description, isActive, data, date };
}

// rows with sensor data
const rows = [
  createData(1, 'Sensor 1', 159, true, 6.0, new Date()),
  createData(2, 'Sensor 2', 237, true, 9.0, new Date()),
  createData(3, 'Sensor 3', 262, false, 16.0, new Date()),
]

export default function TableApp() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Dados</TableCell>
            <TableCell align="right">Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{String(row.isActive)}</TableCell>
              <TableCell align="right">{row.data}</TableCell>
              <TableCell align="right">{String(row.date)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}