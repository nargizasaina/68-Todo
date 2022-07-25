import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import './AddTaskForm.css';

const AddTaskForm = ({show, onSubmit, onChange, loading}) => {
    return show ?
        (<form className="Form" onSubmit={onSubmit}>
            <TextField
                label="Enter a task"
                multiline
                maxRows={4}
                onChange={onChange}
            />
            <LoadingButton
                type="submit"
                size="small"
                color="success"
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
            >
                Save
            </LoadingButton>
        </form>) : null;
};

export default AddTaskForm;