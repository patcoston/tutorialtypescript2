import { Box, useTheme } from '@mui/material'
import Header from '../../components/Header'
import GeoChart from '../../components/GeoChart'
import { tokens } from '../../theme'

const Geo = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Header title="Geo" subtitle="Simple Geo Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4"
      >
        <GeoChart />
      </Box>
    </Box>
  )
}

export default Geo
