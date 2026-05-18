import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function ReportsPage() {
  return (
    <Box>
      <Stack spacing={0.5} sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          Reports
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Charts, gauges, and map for data visualization.
        </Typography>
      </Stack>

      <Typography variant="h6" sx={{ mb: 1 }}>
        Gauges
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Snapshot
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Gauge width={120} height={120} value={50} />
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Range 10–60
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Gauge width={120} height={120} value={42} valueMin={10} valueMax={60} />
            </Box>
          </CardContent>
        </Card>
      </Stack>

      <Typography variant="h6" sx={{ mb: 1 }}>
        Charts
      </Typography>
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2} sx={{ mb: 3 }}>
        <Card sx={{ flex: 1, minHeight: 320 }}>
          <CardContent sx={{ '& .MuiBarChart-root': { width: '100%' } }}>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Quarterly (bar)
            </Typography>
            <BarChart
              series={[
                { data: [35, 44, 24, 34], label: 'Series 1' },
                { data: [51, 36, 49, 30], label: 'Series 2' },
              ]}
              height={260}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarters' }]}
              margin={{ top: 24, bottom: 32 }}
            />
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minHeight: 320 }}>
          <CardContent>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Trend (line)
            </Typography>
            <LineChart
              height={260}
              series={[{ data: [12, 18, 15, 22, 27, 24, 30], label: 'Series' }]}
              xAxis={[{ data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], scaleType: 'point' }]}
              margin={{ top: 24, bottom: 32 }}
            />
          </CardContent>
        </Card>
      </Stack>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            Distribution (pie)
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'series A' },
                    { id: 1, value: 15, label: 'series B' },
                    { id: 2, value: 20, label: 'series C' },
                  ],
                },
              ]}
              width={400}
              height={220}
            />
          </Box>
        </CardContent>
      </Card>

      <Typography variant="h6" sx={{ mb: 1 }}>
        Location map
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ height: 420, width: '100%', borderRadius: 1, overflow: 'hidden' }}>
            <MapContainer
              center={[14.604253, 120.994314]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[14.604253, 120.994314]}>
                <Popup>
                  National University - Manila <br />
                  551 F Jhocson St, Sampaloc, Manila, 1008 Metro Manila
                </Popup>
              </Marker>
            </MapContainer>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
