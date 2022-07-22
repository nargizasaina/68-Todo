import Button from "@mui/material/Button";
import './ShowList.css';

const ShowList = ({task}) => {
    return (
        <div className="Task">
            <p><b>Task: </b> {task}</p>
            <Button variant="contained" color="error">
                Delete
            </Button>
        </div>
    );
};

export default ShowList;