import React from 'react';

function SignInForm({
  onSignIn
}) {
  return (
    <form
      onSubmit={ (event) => {
        // Prevent old school form submission
        event.preventDefault()
        const form = event.target
        const elements = form.elements //key-value system using the name attributes
        const email = elements.email.value
        const password = elements.password.value
        onSignIn({ email, password })
      } }
    >
      <label
      className='mb-2'
      >
        {'Email: '}
        <input 
          type='email'
          name='email'
        />
        </label>
      <label
        className='mb-2'
      >
        {'Password: '}
        <input 
          type='password'
          name='password'
        />
        </label>
        <button>
          Sign in
          </button>
      </form>
  )
}

export default SignInForm