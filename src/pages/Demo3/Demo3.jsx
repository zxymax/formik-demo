import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
  username: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  special: {
    fb: '',
    tw: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
}

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string().required('Required')
})

  const onSubmit = (values) => {
    console.log(values)
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


          <div>
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="special.fb" />
          </div>

          <div>
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" id="twitter" name="special.tw" />
          </div>


          <div>
          <label htmlFor="primaryPhone">primaryPhone</label>
          <Field type="text" id="primaryPhone" name="phoneNumbers[0]" />
          </div>
          <div>
          <label htmlFor="secondaryPhone">secondaryPhone</label>
          <Field type="text" id="secondaryPhone" name="phoneNumbers[1]" />
          </div>

          <div>
          <label>List of phone numbers</label>
          <FieldArray name="phNumbers">
              {
                (fieldArrayProps) => {
                  console.log('fieldArrayProps', fieldArrayProps)
                  const { push, remove, form} = fieldArrayProps
                  const { values } = form
                  const { phNumbers } = values
                  return (
                    <div>
                      {
                        phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field type="text" name={`phNumbers[${index}]`} />
                            
                            {
                              index > 0 && <button type="button" onClick={() => remove(index)}> - </button>
                            }
                            <button type="button" onClick={() => push('')}> + </button>
                          </div>
                        ))
                      }
                    </div>
                  ) 
                }
              }
          </FieldArray>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </>
    </Formik>
  )
}
