import React from 'react';
import {Formik, Form, Field} from 'formik';
import { Container, Button, Typography } from '@mui/material';
import * as Yup from 'yup';
import {URL} from '../../config';


const Create = props => {

    const validation = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too short')
          .max(50, 'Too long')
          .required('Required'),
        image: Yup.string()
            .matches(URL, "Not url")
            .required("Required"),
        count: Yup.number()
            .min(1, "Can't be zero or opposite")
      });

    const submit = async (values, {setSubmitting, resetForm}) => {
        await props.addProductThunk(values);
        resetForm({});
        setSubmitting(false);
        props.history.push('/');
    }

    return (
        <Container>
            <Formik onSubmit={submit}
                initialValues={{name: "", image: "", count: "", width: "", height: "", weight: ""}}
                validationSchema={validation}
                >
                {({errors, touched}) => (
                    <Form>
                        <div>
                            Name
                            <Field type="text" name="name" />
                            {
                                errors.name && touched.name
                                ? <Typography variant="body1" color="error">{errors.name}</Typography>
                                : null
                            }
                        </div>
                        <div>
                            Image Url
                            <Field type="text" name="image" />
                            {
                                errors.image && touched.image
                                ? <Typography variant="body1" color="error">{errors.image}</Typography>
                                : null
                            }
                        </div>
                        <div>
                            Count
                            <Field type="number" name="count" />
                            {
                                errors.count && touched.count
                                ? <Typography variant="body1" color="error">{errors.count}</Typography>
                                : null
                            }
                        </div>
                        <div>
                            Width
                            <Field type="number" name="width" />
                        </div>
                        <div>
                            Height
                            <Field type="number" name="height" />
                        </div>
                        <div>
                            Weight
                            <Field type="number" name="weight" />
                        </div>
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default Create;