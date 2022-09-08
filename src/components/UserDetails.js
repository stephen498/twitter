import React from 'react';

const UserDetails=({nextStep,handleChange,values})=>{
    const Continue=e=>{
        e.preventDefault();
        nextStep();
    }
    return (
      <div component="main" maxWidth="xs">
        <div>
          <div component="h1" variant="h5">
            Sign up
          </div>
          <form>
            <div>
              <div>
                <textarea
                  label="Email Address"
                  placeholder="Email Address"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                  autoComplete="email"
                  fullWidth
                />
              </div>
              <br />
              <div>
                <textarea
                  label="Username"
                  placeholder="Username"
                  onChange={handleChange("username")}
                  defaultValue={values.username}
                  autoComplete="username"
                  fullWidth
                />
              </div>
              <div>
                <textarea
                  label="Password"
                  placeholder="Password"
                  onChange={handleChange("password")}
                  defaultValue={values.password}
                  autoComplete="password"
                  fullWidth
                  type='password'
                />
              </div>
              
                <button onClick={Continue} type="submit" fullWidth
                variant='contained'>Next
                </button>
              
            </div>
          </form>
        </div>
      </div>
    );
}
export default UserDetails;