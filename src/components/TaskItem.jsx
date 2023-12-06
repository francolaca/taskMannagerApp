
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { blue, grey } from '@mui/material/colors';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';


export const TaskItem = ({taskListKey, completeTaskKey, deleteTaskKey}) => {

  const {id, nombre, completada} = taskListKey;   // Desestructuramos

  const [completadaHook, setCompletadaHook] = useState(completada);

  const handleCheckBoxChange = () => {
    setCompletadaHook(!completadaHook);
    completeTaskKey(id);
  }; 

  const handleButtonClick = () => {
    deleteTaskKey(id);
  };

  return (
    <div>

      {/* Utilizamos el componente Grid de Material Ui para implementar la funcionalidad flexbox de css (similar a bootstrap). */}
      <Grid container alignItems="center" justifyContent="space-between" py={1} sx={{ border: '0.5px solid #5A5A5A'}}>

        <Grid container alignItems="center" spacing={1}>

          <Grid>
            {/* Reemplazamos un input de tipo checkbox de HTML por un componente Checkbox de Material Ui. */}
            <Checkbox
              color="secondary"
              checked={completadaHook}
              onChange={handleCheckBoxChange}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{
                color: grey[50],
                '&.Mui-checked': {
                  color: blue[300],
                },
              }}
            />
          </Grid>

          <Grid>
            {/* Reemplazamos un elemento p de HTML por un componente Typography de Material Ui. */}
            {/* En material UI el color primario del tema predeterminado es el azul. Lo importamos. 
            Para hacer juego con los íconos utilizamos el tono oscuro (Defaul Theme -> primary (Blue) -> shade (dark) => blue[700]) */}
            <Typography
              variant="body1"
              color={grey[50]}
              style={{
                textDecorationLine: completadaHook ? 'line-through' : 'none',
                textDecorationColor: blue[300],
                textDecorationThickness: '3px',
              }}
            >
              {nombre}
            </Typography>
          </Grid>

        </Grid>

        <Grid>
          {/* Reemplazamos un button de HTML por un componente IconButton de Material Ui. */}
          <IconButton aria-label="delete" color = "primary" onClick = {handleButtonClick}>
            <DeleteIcon />
          </IconButton>
        </Grid>

      </Grid>

    </div>

  );
};