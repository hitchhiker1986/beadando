import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import Button from '@mui/material/Button';
export default function ActionButton({handleClick}) {

    return (
        
        <Button variant='contained' sx={{borderRadius: "50%", width: 50, height: 50, minWidth: 0}} onClick={handleClick}>
            <PlayCircleFilledOutlinedIcon sx={{color: "#fff"}}/>
        </Button>
        
       );
}