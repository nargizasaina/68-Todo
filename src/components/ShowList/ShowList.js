import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import './ShowList.css';

const ShowList = ({task, onDelete}) => {
    return (
        <div className="Task">
            <p><b>Task: </b> {task}</p>
            <Button type="button" onClick={onDelete} variant="contained" color="error" startIcon={<DeleteIcon />}>
                Delete
            </Button>
        </div>
    );
};

export default ShowList;