import { blue, grey } from '@mui/material/colors';
import Button from '@mui/material/Button';


// valores de la propiedad filter:  Todas , Activas o Completadas
// valores de la propiedad active: todas, activas, completadas
export const FilterButton = ({action, active = 'todas', filter = 'Todas'}) => {
  return (
    <Button 
      variant="text"
      size="small"
      // style={{color: active.toLowerCase().includes(filter.toLowerCase()) ? blue[300]: blue[700]}}
      style={{color: active.toLowerCase().includes(filter.toLowerCase()) ? blue[300]: grey[500]}}
      onClick={action}
    >  
      {filter}
    </Button>
  )
}






