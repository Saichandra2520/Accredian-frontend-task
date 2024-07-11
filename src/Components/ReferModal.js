import React, { useState } from 'react';
import { Button, Modal, TextField, Box, Typography, Popover } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  name: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobileNumber:  Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10).max(10).required('Full name is required'),
  courseInterested: Yup.string().required('Course interested in is required'),
  referalId: Yup.string().required('Referal ID is required'),
});



const ReferModal = ({handleClose, open}) => {

  const API_URL = 'https://accredian-backend-task-sxsl.onrender.com/api';
  const submitReferral = async (referralData) => {
    try {
      const response = await axios.post(`${API_URL}/referrals`, referralData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('An error occurred');
    }
  };
  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobileNumber: '',
      courseInterested: '',
      referalId:'',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await submitReferral(values);
        console.log('Referral submitted successfully:', response);

      } catch (error) {
        window.alert('You already referred this person ')
        console.error('Error submitting referral:', error);
      }
    },
  });


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #1A73E8',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
  };

  

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box component="form" onSubmit={formik.handleSubmit} sx={style} >
        <Typography variant="h6" sx={{ alignContent:'self', margin:'auto'}} >Refer & Earn</Typography>
          <TextField
            name="name"
            label="Full Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ margin:'1rem 1rem'}}
          />
          <TextField
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ margin:'1rem 1rem'}}
          />
          <TextField
            name="mobileNumber"
            label="Mobile Number"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
            helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
            sx={{ margin:'1rem 1rem'}}
          />
          <TextField
            name="courseInterested"
            label="Course Interested In"
            value={formik.values.courseInterested}
            onChange={formik.handleChange}
            error={formik.touched.courseInterested && Boolean(formik.errors.courseInterested)}
            helperText={formik.touched.courseInterested && formik.errors.courseInterested}
            sx={{ margin:'1rem 1rem'}}
          />
          <TextField
            name="referalId"
            label="Referal ID"
            value={formik.values.referalId}
            onChange={formik.handleChange}
            error={formik.touched.referalId && Boolean(formik.errors.referalId)}
            helperText={formik.touched.referalId && formik.errors.referalId}
            sx={{ margin:'1rem 1rem'}}
          />
          <Button type="submit" style = {{ backgroundColor: '#1A73E8', color:'white', margin:'1rem 1rem' }} >Refer Now</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ReferModal;
