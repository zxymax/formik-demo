import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'


const initialValues = {
  username: '',
  email: '',
  channel: '',
  comments: '',
  address: ''
}

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string().required('Required')
})

  const onSubmit = (values) => {

  }


export default function NewYoutubeFormik () {

  
  return (
    <Formik
    initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <>
        <Form>
          <div>
          <label htmlFor="username">Username</label>
          <Field type="text" name="username" id="username" /> 
          <ErrorMessage name="username" component="p" /> 
          </div>

          <div>
          <label htmlFor="email">Username</label>
          <Field type="text" name="email" id="email" /> 
          <ErrorMessage name="email" component={TextError} /> 
          </div>

          <div>
          <label htmlFor="channel">Username</label>
          <Field type="text" name="channel" id="channel" /> 
          <ErrorMessage name="channel">
      {
        errorMsg => <div style={{color: 'red'}}>{errorMsg}</div>
      }
    </ErrorMessage>
          </div>

          <div>
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
          </div>

          <div>
          <label>Address</label>
          <Field name="address">
            {
              (props) => {
                const { field, form, meta } = props
                console.log(props)
                return(
                  <div>
                  <input id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                  </div>
                ) 
              }
            }
    </Field>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </>
    </Formik>
  )
}
