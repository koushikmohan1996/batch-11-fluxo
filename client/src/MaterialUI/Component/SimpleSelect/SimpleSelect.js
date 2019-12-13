import React from 'react';
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '../../Import/Import';

let minWidth = 300;
const SimpleSelect = (props) => {
  console.log(minWidth);
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: minWidth,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const itemList = props.itemList;
  const menuList = itemList.map((i) => {
    return (
      <MenuItem key={i.value} value={i.value}>
        {i.displayValue}
      </MenuItem>
    );
  });
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel ref={inputLabel} id='demo-simple-select-outlined-label'>
        {props.labelText}
      </InputLabel>
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        value={age}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {menuList}
      </Select>
    </FormControl>
  );
};

export default SimpleSelect;