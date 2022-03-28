//import { useFormik } from 'formik'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './style.css'
import * as Yup from 'yup'


  const initialValues = {
      username: '',
      email: '',
      channel: ''
  }

  const onSubmit = (values) => {
    console.log('form data',values)
  }


  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
  })


/*

  const validate = (values) => {
      let errors = {}
      
      if (!values.username) {
        errors.username = 'Required'
      }

      if (!values.email) {
        errors.email = 'Required'
      } else if (! /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)) {
        errors.email = 'Invalid email format'
      }

      if (!values.channel) {
        errors.channel = 'Required'
      }

    return errors
  }

*/





const YoutubeFormik =() =>  {


  

  /*
  const formik = useFormik({
    initialValues,
    onSubmit,
 //   validate
    validationSchema
  })
  */

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
    {/*<Form onSubmit={formik.handleSubmit}>*/}

    <>

      <h3>Youtube Formik</h3>
      <Form>
      <div>
      <label htmlFor="username">Username</label>
    {/*<input type="text" id="username" name="username" {...formik.getFieldProps('username')} />*/}
      <Field type="text" id="username" name="username" />
      {/*formik.touched.username && formik.errors.username?<p className="error">{formik.errors.username}</p>:null */}
      <ErrorMessage name="username" />
      </div>
      <div>
      <label htmlFor="email">Email</label>
    {/*<input type="email" id="email" name="email" {...formik.getFieldProps('email')} />*/}
      <Field type="email" id="email" name="email"  />
      {/*formik.touched.email && formik.errors.email?<p className="error">{formik.errors.email}</p>:null */}
      <ErrorMessage name="email" />
      </div>

      <div>
      <label htmlFor="channel">Channel</label>
    {/*<input type="channel" id="channel" name="channel" {...formik.getFieldProps('channel')} />*/}
      <Field type="channel" id="channel" name="channel" />
      {/* formik.touched.channel && formik.errors.channel?<p className="error">{formik.errors.channel}</p>:null */}
      <ErrorMessage name="channel" />
    </div>

      <button type="submit">Submit</button>
    </Form>
    </>
    </Formik>
  )
}

export default YoutubeFormik

