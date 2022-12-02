import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material'
import LightModeOutLinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutLinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsOutLinedIcon from '@mui/icons-material/LightModeOutlined'
import SettingsOutLinedIcon from '@mui/icons-material/LightModeOutlined'
import PersonOutLinedIcon from '@mui/icons-material/LightModeOutlined'
import SearchIcon from '@mui/icons-material/LightModeOutlined'

const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search BAR */}
      <Box
        sx={{
          display: 'flex',
          backgroundColor: colors.primary[400],
          borderRadius: '3px',
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <SearchIcon type="button" sx={{ p: 1 }} />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutLinedIcon />
          ) : (
            <LightModeOutLinedIcon />
          )}
          <LightModeOutLinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutLinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutLinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutLinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
