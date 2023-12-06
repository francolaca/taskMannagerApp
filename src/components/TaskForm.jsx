
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { blue, grey } from '@mui/material/colors';

import { useState } from "react";



export const TaskForm = ({addTaskKey}) => {

  const [nombreHook, setNombreHook] = useState('');

  const handleTask = (event) => {
    if (event.key.toLowerCase()==='enter') {
      addTaskKey(nombreHook);
      setNombreHook('');
    };
  };

  return (

    <div>

      {/* Reemplazamos un h4 de HTML por un componente Typography de Material Ui. */}
      <Typography variant="h4" my={3} color={grey[50]}>
        TASK MANAGER APP
      </Typography>

      {/* Reemplazamos un input de tipo texto de HTML por un componente TextField de Material Ui. */}
      <Box my={2}>
        <TextField 
          fullWidth 
          id="outlined-basic" 
          label="Nueva Tarea" 
          variant="outlined" 
          autoComplete="off"  
          noValidate 
          InputProps={{ 
            style: { color: grey[50] }  // Color del texto
              // Color del borde cuando no está en foco
          }} 
          // OutlinedInput= {{ borderColor: grey[50] }}
          // InputProps={{ 
          //   style: { color: grey[50], borderColor: grey[50] },
          // }} 
          InputLabelProps={{ 
            style: { color: grey[50] }  // Color de la etiqueta cuando no está en foco
          }}
          value={nombreHook} 
          onChange={event => setNombreHook(event.target.value)} 
          onKeyDown={event=> handleTask(event)}/>
      </Box>

    </div>
  );
};