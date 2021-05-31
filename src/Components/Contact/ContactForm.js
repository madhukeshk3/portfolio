import { Box, Grid, makeStyles, TextField, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { myData } from '../../data';

const initialState = {
  fullName: '',
  email: '',
  message: '',
};

const useStyle = makeStyles({
  form: {
    height: '380px',
  },
  formLabel: {
    width: '100%',
    height: 'auto',
    margin: '5px 10px 10px 0',
    padding: '5px 0 5px 0',
  },
});
function ContactForm() {
  const [errMessage, setErrMessage] = useState(initialState);
  const [values, setValues] = useState(initialState);
  const [Error, setError] = useState(true);
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    message: false,
  });

  const classes = useStyle();

  const validate = () => {
    const newError = { fullName: '', email: '', message: '' };
    if (touched.fullName && values.fullName.trimStart() == '') {
      newError.fullName = 'name is required';
    } else if (touched.fullName && !(values.fullName.trimStart() == '')) {
      newError.fullName = '';
    }

    console.log(values.email.trim() == '');
    if (touched.email && values.email.trimStart() == '') {
      newError.email = 'email is required';
    } else if (
      touched.email &&
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        values.email
      )
    ) {
      newError.email = 'Invalid Email';
    } else if (
      touched.email &&
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        values.email
      )
    ) {
      newError.email = '';
    }

    if (touched.message && values.message.trimStart() == '') {
      newError.message = 'message is required';
    } else if (touched.message && !(values.message.trimStart() == '')) {
      newError.message = '';
    }

    setErrMessage(newError);
    if (
      Object.values(newError).every((x) => x == '') &&
      Object.values(touched).every((x) => x == true)
    ) {
      return false;
    }
    return true;
  };

  const touch = (e) => {
    const { name, value } = e.target;

    setTouched((prevState) => {
      return {
        ...touched,
        [name]: true,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(values);

    const data = values;
    const resp = await axios.post(`${myData.deployedApp_url}sendmail`, data);

    // alert(resp);

    setValues(initialState);
    setErrMessage(initialState);
    setError(false);
    setTouched({ fullName: false, email: false, message: false });
  };
  useEffect(() => {
    const response = validate();
    setError(response);
  }, [values, touched]);

  return (
    <>
      <Box clone order={{ xs: 2, sm: 2, md: 2, lg: 1 }}>
        <Grid
          item
          sm={12}
          md={7}
          style={{ marginBottom: '20px', paddingBottom: '10px' }}
        >
          <form onSubmit={handleSubmit}>
            <div className={classes.form}>
              <div className={classes.formLabel}>
                <TextField
                  autoComplete="off"
                  required
                  style={{ width: '90%' }}
                  variant="outlined"
                  size="small"
                  label="Full Name"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={touch}
                  error={errMessage?.fullName == '' ? false : true}
                  helperText={errMessage.fullName}
                />
              </div>

              <div className={classes.formLabel}>
                <TextField
                  required
                  autoComplete="off"
                  style={{ width: '90%' }}
                  variant="outlined"
                  size="small"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={touch}
                  error={errMessage?.email == '' ? false : true}
                  helperText={errMessage.email}
                />
              </div>

              <div className={classes.formLabel}>
                <TextField
                  required
                  autoComplete="off"
                  multiline="true"
                  rows="11"
                  rowsMax="11"
                  size="small"
                  style={{ width: '90%' }}
                  variant="outlined"
                  label="Message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={touch}
                  error={errMessage.message == '' ? false : true}
                  helperText={errMessage.message}
                />
              </div>

              <div>
                <Button
                  disabled={Error ? true : false}
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Grid>
      </Box>
    </>
  );
}

export default ContactForm;
