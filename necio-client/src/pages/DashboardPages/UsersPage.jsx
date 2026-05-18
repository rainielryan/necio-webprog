import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { portfolioNavy } from '../../theme/dashboardTheme';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 90, editable: true },
  {
    field: 'fullName',
    headerName: 'Full name',
    sortable: false,
    flex: 1,
    minWidth: 140,
    valueGetter: (value, row) =>
      `${row.firstName || ''} ${row.lastName || ''}`.trim(),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function UsersPage() {
  return (
    <Box>
      <Stack spacing={0.5} sx={{ mb: 4 }}>
        <Typography variant="subtitle2">Portfolio / Users</Typography>
        <Typography variant="h4" component="h1">
          User directory
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '38rem', lineHeight: 1.75, mt: 0.5 }}>
          Sample profiles shown in a fully styled data grid—click any editable cell to update values inline.
        </Typography>
      </Stack>

      <Card sx={{ overflow: 'hidden' }}>
        <Box
          sx={{
            px: 2.5,
            py: 2,
            borderBottom: '2px solid',
            borderColor: 'text.primary',
            bgcolor: 'background.default',
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5} flexWrap="wrap">
            <Typography variant="h6" sx={{ flex: 1 }}>
              All users
            </Typography>
            <Chip
              label={`${rows.length} profiles`}
              size="small"
              sx={{
                fontWeight: 700,
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                bgcolor: portfolioNavy,
                color: '#fff',
                height: 24,
              }}
            />
            <Chip
              label="Editable"
              size="small"
              variant="outlined"
              sx={{
                fontWeight: 600,
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                borderColor: 'text.primary',
                height: 24,
              }}
            />
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            First name, last name, and age columns support inline editing
          </Typography>
        </Box>
        <Box sx={{ height: 520 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            experimentalFeatures={{ newEditingApi: true }}
            checkboxSelection
            disableRowSelectionOnClick
            pageSizeOptions={[5, 10, rows.length]}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            sx={{ border: 'none', borderRadius: 0 }}
          />
        </Box>
      </Card>
    </Box>
  );
}
