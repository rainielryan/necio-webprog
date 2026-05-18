import { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PictureAsPdf from '@mui/icons-material/PictureAsPdf';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { PieChart } from '@mui/x-charts/PieChart';
import { DataGrid } from '@mui/x-data-grid';
import { portfolioCyan, portfolioNavy } from '../../theme/dashboardTheme';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
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

const categoryPieData = [
  { id: 0, value: 14, label: 'Sales', color: portfolioNavy },
  { id: 1, value: 10, label: 'Users', color: portfolioCyan },
  { id: 2, value: 8, label: 'Inventory', color: '#52525b' },
  { id: 3, value: 6, label: 'Finance', color: '#a1a1aa' },
];

export default function ReportsPage() {
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank', 'width=1200,height=900');
    if (!printWindow) return;

    const headMarkup = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
      .map((node) => node.outerHTML)
      .join('');

    const exportedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    printWindow.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
${headMarkup}
<style>
  @page { size: A4; margin: 16mm; }
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: #1f2937;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .report-shell { padding: 0; box-sizing: border-box; max-width: 100%; }
  .report-header {
    border-bottom: 1px solid #d1d5db;
    padding-bottom: 12px;
    margin-bottom: 20px;
  }
  .report-header h1 { font-size: 1.5rem; margin: 0 0 8px; color: #111827; font-weight: 700; }
  .report-header .sub { margin: 0 0 4px; font-size: 0.95rem; color: #6b7280; line-height: 1.5; max-width: 52rem; }
  .report-header .meta { margin: 8px 0 0; font-size: 0.85rem; color: #9ca3af; }
  .report-content { overflow: visible; }
  .report-content * { box-sizing: border-box; }
  .report-content svg { max-width: 100%; height: auto; }
</style>
</head>
<body>
<div class="report-shell">
  <header class="report-header">
    <h1>Reports Summary</h1>
    <p class="sub">Analytics overview showing generated reports, category breakdown, and current completion performance.</p>
    <p class="meta">Prepared on ${exportedAt}</p>
  </header>
  <section class="report-content">${printContent.outerHTML}</section>
</div>
</body>
</html>
`);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Box>
      <Stack spacing={2} sx={{ mb: 3 }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Reports
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '48rem' }}>
            Report analytics overview showing generated reports, category breakdown, and current completion performance.
          </Typography>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} flexWrap="wrap">
          <Button variant="contained" color="primary">
            Generate
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<PictureAsPdf />}
            onClick={handlePrint}
          >
            Print PDF
          </Button>
          <Button variant="outlined" color="secondary">
            Filter
          </Button>
        </Stack>
      </Stack>

      <Stack ref={printRef} spacing={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly report output
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              This chart compares how many reports were generated and how many were completed across the last four months.
            </Typography>
            <BarChart
              series={[
                { data: [10, 24, 20, 27], label: 'Generated', color: portfolioNavy },
                { data: [12, 19, 17, 23], label: 'Completed', color: portfolioCyan },
              ]}
              height={300}
              xAxis={[{ data: ['January', 'February', 'March', 'April'], scaleType: 'band' }]}
              margin={{ left: 48, right: 24, top: 16, bottom: 32 }}
            />
          </CardContent>
        </Card>

        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3}>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Report category share
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                This chart shows the distribution of report requests by category for the current reporting period.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <PieChart series={[{ data: categoryPieData }]} width={200} height={220} />
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Completion rate
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                The gauge highlights the current percentage of reports completed on time based on the latest reporting cycle.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Gauge width={100} height={100} value={73} />
              </Box>
            </CardContent>
          </Card>
        </Stack>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent reports
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Directory-style sample data (editable rows where enabled).
            </Typography>
            <Box sx={{ height: 420, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                experimentalFeatures={{ newEditingApi: true }}
                initialState={{
                  pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
