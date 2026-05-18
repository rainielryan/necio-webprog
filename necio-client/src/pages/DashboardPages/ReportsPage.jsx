import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { portfolioCyan, portfolioNavy } from '../../theme/dashboardTheme';

const pieSlices = [
  { id: 0, value: 10, label: 'Series A', color: portfolioNavy },
  { id: 1, value: 15, label: 'Series B', color: portfolioCyan },
  { id: 2, value: 20, label: 'Series C', color: '#52525b' },
];

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

export default function ReportsPage() {
  return (
    <Box>
      <Stack spacing={0.5} sx={{ mb: 4 }}>
        <Typography variant="subtitle2">Portfolio / Reports</Typography>
        <Typography variant="h4" component="h1">
          Analytics &amp; charts
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '38rem', lineHeight: 1.75, mt: 0.5 }}>
          Visualizations styled with the site&apos;s palette—navy fills, cyan highlights, and zinc surfaces.
        </Typography>
      </Stack>

      <SectionLabel>Gauges</SectionLabel>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <Card sx={{ flex: 1, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 2 }}>Utilisation snapshot</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Gauge width={160} height={160} value={50} />
            </Box>
            <Typography variant="h5" sx={{ mt: 1.5, fontWeight: 800, color: portfolioNavy }}>
              50%
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
              of 100
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 2 }}>Range band 10–60</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Gauge width={160} height={160} value={42} valueMin={10} valueMax={60} />
            </Box>
            <Typography variant="h5" sx={{ mt: 1.5, fontWeight: 800, color: portfolioCyan }}>
              42
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
              of 60
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      <SectionLabel>Charts</SectionLabel>
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2} sx={{ mb: 3 }}>
        <Card sx={{ flex: 1, overflow: 'hidden' }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Bar chart</Typography>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Quarterly comparison</Typography>
            <BarChart
              series={[
                { data: [35, 44, 24, 34], label: 'Series 1', color: portfolioNavy },
                { data: [51, 36, 49, 30], label: 'Series 2', color: portfolioCyan },
              ]}
              height={260}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              margin={{ top: 28, bottom: 32 }}
            />
          </CardContent>
        </Card>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Line chart</Typography>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Weekly trend</Typography>
            <LineChart
              height={260}
              series={[
                {
                  data: [12, 18, 15, 22, 27, 24, 30],
                  label: 'Traffic',
                  color: portfolioNavy,
                  area: true,
                  showMark: true,
                },
              ]}
              xAxis={[{
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                scaleType: 'point',
              }]}
              margin={{ top: 28, bottom: 32 }}
            />
          </CardContent>
        </Card>
      </Stack>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Pie chart</Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>Distribution</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <PieChart series={[{ data: pieSlices }]} width={400} height={220} />
          </Box>
        </CardContent>
      </Card>

      <SectionLabel>Location</SectionLabel>
      <Card sx={{ overflow: 'hidden' }}>
        <CardHeader
          title="National University – Manila"
          subtitle="551 F. Jhocson St, Sampaloc, Manila, 1008 Metro Manila"
        />
        <Box sx={{ height: 420 }}>
          <MapContainer
            center={[14.604253, 120.994314]}
            zoom={14}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom
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
