
import { FilterButton } from "./FilterButton"
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { blue, grey } from '@mui/material/colors';


export const TaskFilterBar = ({activeFilterKey, totalKey, showAllTasksKey, showActiveTasksKey, showCompletedTasksKey, clearCompleteKey}) => {
  return (
    <Grid container alignItems="center" justifyContent="space-between" py={1}>

      {/* Reemplazamos un p de HTML por un componente Typography de Material Ui. */}
      <Grid>
        <Typography variant="body2" color={grey[50]}>
          Total: {totalKey} tareas
        </Typography>
      </Grid>

       {/* Reemplazamos un div de HTML por un componente Stack de Material Ui. */}
      <Grid>
        <Stack spacing={1} direction="row">
          <FilterButton action = {() => showAllTasksKey()} active = {activeFilterKey} filter='Todas'/>
          <FilterButton action = {() => showActiveTasksKey()} active = {activeFilterKey} filter='Activas'/>
          <FilterButton action = {() => showCompletedTasksKey()} active = {activeFilterKey} filter ='Completadas'/>
        </Stack>
      </Grid>

       {/* Reemplazamos un button de HTML por un componente IconButton de Material Ui. */}
      <Grid>
        <IconButton aria-label="delete" size="large" color="primary" onClick={clearCompleteKey} title="Eliminar tareas completadas">
          <DeleteForeverIcon />
        </IconButton>
      </Grid>

    </Grid>
  )
}




