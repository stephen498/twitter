import React from "react";

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
   const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
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
                label="First Name"
                placeholder="First Name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
              />
            </div>
            <br />
            <div>
              <textarea
                label="Last Name"
                placeholder="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
              />
            </div>
            <div>
              <textarea
                label="Country of Residence"
                placeholder="Country of Residence"
                onChange={handleChange("country")}
                defaultValue={values.country}
                autoComplete="country"
                fullWidth
              />
            </div>
            <div>
              <textarea
                label="Level of Education"
                placeholder="Level of Education"
                onChange={handleChange("levelOfEducation")}
                defaultValue={values.levelOfEducation}
                autoComplete="Level of Education"
                fullWidth
              />
            </div>

            <button
              onClick={Continue}
              type="submit"
              fullWidth
              variant="contained"
            >
              Previous
            </button>
            <button
              onClick={Continue}
              type="submit"
              fullWidth
              variant="contained"
            >
             Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PersonalDetails;
