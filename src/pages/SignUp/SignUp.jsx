import React from 'react'

function SignUp() {
  return (
    <div>

      <div className='grid grid-col-2'>
        <div className='border-2 p-4'>
          <h2>Sign Up</h2>
          <form>
            <div className='mb-4'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name' required />
            </div>
            <div className='mb-4'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div className='mb-4'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' required />
            </div>
            <div>
              <button type='submit'>Sign Up</button>
            </div>
          </form>
        </div>
<div className='logo'>

</div>
        </div>

      </div>



    </div>
  )
}

export default SignUp