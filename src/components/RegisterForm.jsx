import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { RegsiterFormSchemas } from '../RegisterFormSchemas'
function RegisterForm() {

    const submit = (value ,action )=>{
        setTimeout(()=>{
            action.resetForm()
        },2000)
    }
    const {handleChange,handleSubmit,values,errors} = useFormik({
        
        initialValues: {
          email: '',
          age:'',
          password:'',
            confirmpassword:'',
            term:'', },
validationSchema : RegsiterFormSchemas,
onSubmit : submit

    })
  return (
    <div className='form-parent'>
        <form onSubmit={handleSubmit} action="#">
            <div className='input-child'> 
                <label htmlFor={"email"}>Email:</label>
                <input type="text"  id='email'
                 value={values.email} 
                 placeholder='Bir Email daxil edin'
                 onChange={handleChange} />
                {errors.email && <p className='input-errors'>{errors.email}</p>}
            </div>
            <div className='input-child'>
                <label htmlFor={"age"}>Yas:</label>
                <input type="number"  id='age'
                 value={values.age} 
                 placeholder='Bir yas daxil edin'
                 onChange={handleChange} />
                 {errors.age && <p className='input-errors'>{errors.age}</p>}
            </div>
            <div className='input-child'>
                <label htmlFor={"password"}>Kod:</label>
                <input type="password"  id='password'
                 value={values.password} 
                 placeholder='Bir Kod daxil edin'
                 onChange={handleChange} />
                 {errors.password && <p className='input-errors'>{errors.password}</p>}
            </div>
            <div className='input-child'>
                <label htmlFor={"confirmpassword"}>Tekrar kod:</label>
                <input type="password"  id='confirmpassword'
                 value={values.confirmpassword} 
                 placeholder='Kodu tekrar daxil edin'
                 onChange={handleChange} />
                 {errors.confirmpassword && <p className='input-errors'>{errors.confirmpassword}</p>}
            </div>
            <div>
            <div className='input-last-child'>
                <input type="checkbox"  id='term'
                 value={values.confirmpasswor} 
                 onChange={handleChange} />
                 <label htmlFor={"term"}>Sertleri bebul etdiyizivi tesdiq edin</label>
            </div>
            {errors.term && <p className='input-errors'>{errors.term}</p>}
            </div>
            <button type='submit' className='input-save'>Kaydet</button>
            
            
        </form>
      
    </div>
  )
}

export default RegisterForm
