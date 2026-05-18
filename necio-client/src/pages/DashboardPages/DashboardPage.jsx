import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { BarChart } from '@mui/x-charts/BarChart';
import { DataGrid } from '@mui/x-data-grid';
import { Gauge } from '@mui/x-charts/Gauge';
import { PieChart } from '@mui/x-charts/PieChart';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { portfolioCyan, portfolioNavy } from '../../theme/dashboardTheme';

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

const pieData = [
  { id: 0, value: 10, label: 'Series A', color: portfolioNavy },
  { id: 1, value: 15, label: 'Series B', color: portfolioCyan },
  { id: 2, value: 20, label: 'Series C', color: '#52525b' },
];

const avgAge = (
  rows.reduce((s, r) => s + (r.age || 0), 0) /
  rows.filter((r) => r.age !== null).length
).toFixed(1);

function SectionLabel({ children }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
      <Typography variant="subtitle2" sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
        {children}
      </Typography>
      <Divider sx={{ flex: 1, borderColor: 'divider', borderBottomWidth: 2 }} />
    </Stack>
  );
}

function StatCard({ label, value, sub, icon: Icon, accent }) {
  return (
    <Card sx={{ flex: 1, minWidth: 160 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="subtitle2" sx={{ mb: 1.25 }}>
              {label}
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, color: accent }}
            >
              {value}
            </Typography>
            {sub && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                {sub}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              p: 1.25,
              borderRadius: '12px',
              bgcolor: accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Icon sx={{ color: '#fff', fontSize: 22 }} />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

function CardHeader({ title, subtitle }) {
  return (
    <Box
      sx={{
        px: 2.5,
        py: 2,
        borderBottom: '2px solid',
        borderColor: 'text.primary',
        bgcolor: 'background.default',
      }}
    >
      <Typography variant="h6">{title}</Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default function DashboardPage() {
  return (
    <Box>
      <Stack spacing={0.5} sx={{ mb: 4 }}>
        <Typography variant="subtitle2">Admin / Dashboard</Typography>
        <Typography variant="h4" component="h1">
          Workspace overview
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '38rem', lineHeight: 1.75, mt: 0.5 }}>
          Key metrics, charts, and a directory snapshot—styled with the site&apos;s navy and cyan palette.
        </Typography>
      </Stack>

      <SectionLabel>Summary</SectionLabel>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <StatCard
          label="Total users"
          value={rows.length}
          sub="registered profiles"
          icon={PeopleIcon}
          accent={portfolioNavy}
        />
        <StatCard
          label="Average age"
          value={avgAge}
          sub="based on available data"
          icon={TrendingUpIcon}
          accent={portfolioCyan}
        />
      </Stack>

      <SectionLabel>Gauges</SectionLabel>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <Card sx={{ flex: 1, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 2 }}>Utilisation</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Gauge width={140} height={140} value={50} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              50 of 100
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 2 }}>Range 10–60</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Gauge width={140} height={140} value={42} valueMin={10} valueMax={60} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              42 of 60
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      <SectionLabel>Charts</SectionLabel>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <Card sx={{ flex: 1, overflow: 'hidden' }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Bar chart</Typography>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Quarterly sales</Typography>
            <BarChart
              series={[
                { data: [35, 44, 24, 34], label: 'Series 1', color: portfolioNavy },
                { data: [51, 6, 49, 30], label: 'Series 2', color: portfolioCyan },
              ]}
              height={260}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              margin={{ top: 28, bottom: 32 }}
            />
          </CardContent>
        </Card>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Pie chart</Typography>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Segment breakdown</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              <PieChart series={[{ data: pieData }]} width={360} height={220} />
            </Box>
          </CardContent>
        </Card>
      </Stack>

      <SectionLabel>Directory preview</SectionLabel>
      <Card sx={{ mb: 4, overflow: 'hidden' }}>
        <CardHeader
          title="Users overview"
          subtitle={`${rows.length} profiles · click any cell to edit`}
        />
        <Box sx={{ height: 380 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            experimentalFeatures={{ newEditingApi: true }}
            initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{ border: 'none', borderRadius: 0 }}
          />
        </Box>
      </Card>

      <SectionLabel>Location</SectionLabel>
      <Card sx={{ overflow: 'hidden' }}>
        <CardHeader
          title="National University – Manila"
          subtitle="551 F. Jhocson St, Sampaloc, Manila, 1008 Metro Manila"
        />
        <Box sx={{ height: 400 }}>
          <MapContainer
            center={[14.604253, 120.994314]}
            zoom={14}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[14.604253, 120.994314]}>
              <Popup>National University – Manila</Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Card>
    </Box>
  );
}
