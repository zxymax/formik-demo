import { useFormik } from 'formik'
import './style.css'
import * as Yup from 'yup'


  const initialValues = {
      username: '',
      email: '',
      channel: ''
  }

  const onSubmit = (values) => {

  }

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


  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
  })





function YoutubeFormik() {



  const formik = useFormik({
    initialValues,
    onSubmit,
 //   validate
    validationSchema
  })

  return (
    <>
      <h3>Youtube Formik</h3>
      <form onSubmit={formik.handleSubmit}>
      <div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} />
      {formik.touched.username && formik.errors.username?<p className="error">{formik.errors.username}</p>:null}
      </div>
      <div>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.email} />
      {formik.touched.email && formik.errors.email?<p className="error">{formik.errors.email}</p>:null}
    </div>

      <div>
      <label htmlFor="channel">Channel</label>
      <input type="channel" id="channel" name="channel" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.channel} />
      {formik.touched.channel && formik.errors.channel?<p className="error">{formik.errors.channel}</p>:null}
    </div>

      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default YoutubeFormik

