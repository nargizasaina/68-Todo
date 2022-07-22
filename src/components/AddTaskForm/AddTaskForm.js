import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './AddTaskForm.css';

const AddTaskForm = ({show, onSubmit, onChange}) => {
    return show ?
        (<form className="Form" onSubmit={onSubmit}>
            <TextField
                label="Enter a task"
                multiline
                maxRows={4}
                onChange={onChange}
            />
            <Button type="submit" variant="contained" color="success">Save</Button>
        </form>) : null;
};

export default AddTaskForm;