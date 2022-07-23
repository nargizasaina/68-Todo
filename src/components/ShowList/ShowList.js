import Button from "@mui/material/Button";
import './ShowList.css';

const ShowList = ({task, onDelete}) => {
    return (
        <div className="Task">
            <p><b>Task: </b> {task}</p>
            <Button type="button" onClick={onDelete} variant="contained" color="error">
                Delete
            </Button>
        </div>
    );
};

export default ShowList;