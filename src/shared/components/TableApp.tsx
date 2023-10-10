import { Stack } from '@mui/material';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import FeedIcon from '@mui/icons-material/Feed';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


interface IData {
  id: string,
  name: string,
  description: string,
  isActive: boolean,
  data: number,
  date: Date,
}

interface IProps {
  data: IData[]
  onClickRow: (row: IData) => void;
}

const TableApp = ({ data, onClickRow }: IProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Nome</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Descrição</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Status</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Periodo de coleta</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">Data</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="right">
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
             <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell align="right">{row.name}</TableCell>
             <TableCell align="right">{row.description}</TableCell>
             <TableCell align="right">{row.isActive ? 'Ativo' : 'Inativo'}</TableCell>
             <TableCell align="right">{row.data}</TableCell>
             <TableCell align="right">{String(row.date)}</TableCell>
             <TableCell align="right">
                <Stack flexDirection="row-reverse" alignContent="space-between" >
                  <DeleteIcon cursor="pointer" onClick={() => console.log('delete')} />
                  <EditIcon cursor="pointer" onClick={() => console.log('edit')} />
                  <FeedIcon cursor="pointer" onClick={() => console.log('feed')} />
                </Stack>
             </TableCell>
           </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableApp;