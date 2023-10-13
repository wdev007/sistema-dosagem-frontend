import { Stack } from "@mui/material";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import FeedIcon from "@mui/icons-material/Feed";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableContainer from "@mui/material/TableContainer";

// interface IData {
//   id: string;
//   name: string;
//   description: string;
//   isActive: boolean;
//   data: number;
//   date: Date;
// }

interface IColumn {
  name: string;
  key: string;
}

interface IProps {
  data: any[];
  columns?: IColumn[];
  hasActions?: boolean;
  onClickDetail?: (row: any) => void;
  onClickDelete?: (row: any) => void;
  onClickEdit?: (row: any) => void;
}

const TableApp = ({
  data,
  columns,
  hasActions,
  onClickDetail,
  onClickEdit,
  onClickDelete,
}: IProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns?.map((column) => (
              <TableCell
                key={column.key}
                style={{ fontWeight: "bold" }}
                align="right"
              >
                {column.name}
              </TableCell>
            ))}
            {hasActions && (
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Ações
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns?.map((column) => (
                <TableCell key={column.key} align="right">
                  {row[column.key]}
                </TableCell>
              ))}
              {hasActions && (
                <TableCell align="right">
                  <Stack
                    flexDirection="row-reverse"
                    alignContent="space-between"
                  >
                    {onClickDelete && (
                      <DeleteIcon
                        cursor="pointer"
                        onClick={() => onClickDelete(row)}
                      />
                    )}
                    {onClickEdit && (
                      <EditIcon
                        cursor="pointer"
                        onClick={() => onClickEdit(row)}
                      />
                    )}
                    {onClickDetail && (
                      <FeedIcon
                        cursor="pointer"
                        onClick={() => onClickDetail(row)}
                      />
                    )}
                  </Stack>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableApp;
