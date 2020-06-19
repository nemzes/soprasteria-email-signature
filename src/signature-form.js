import React from "react";

const SignatureForm = ({ data, onChange }) => {
  const handleChange = (ev) =>
    onChange({ key: ev.target.name, value: ev.target.value });

  return (
    <form>
      <label>
        <span>firstName</span>
        <input name="firstName" onChange={handleChange} value={data.firstName} />
      </label>
      <label>
        <span>surname</span>
        <input name="surname" onChange={handleChange} value={data.surname} />
      </label>
      <label>
        <span>title</span>
        <input name="title" onChange={handleChange} value={data.title} />
      </label>
      <label>
        <span>address1</span>
        <input name="address1" onChange={handleChange} value={data.address1} />
      </label>
      <label>
        <span>address2</span>
        <input name="address2" onChange={handleChange} value={data.address2} />
      </label>
      <label>
        <span>address3</span>
        <input name="address3" onChange={handleChange} value={data.address3} />
      </label>
      <label>
        <span>postcode</span>
        <input name="postcode" onChange={handleChange} value={data.postcode} />
      </label>
      <label>
        <span>city</span>
        <input name="city" onChange={handleChange} value={data.city} />
      </label>
      <label>
        <span>phoneCode</span>
        <input name="phoneCode" onChange={handleChange} value={data.phoneCode} />
      </label>
      <label>
        <span>phoneNumber</span>
        <input name="phoneNumber" onChange={handleChange} value={data.phoneNumber} />
      </label>
      <label>
        <span>mobileCode</span>
        <input name="mobileCode" onChange={handleChange} value={data.mobileCode} />
      </label>
      <label>
        <span>mobileNumber</span>
        <input name="mobileNumber" onChange={handleChange} value={data.mobileNumber} />
      </label>
      <label>
        <span>email</span>
        <input name="email" onChange={handleChange} value={data.email} />
      </label>
      <label>
        <span>url</span>
        <input name="url" onChange={handleChange} value={data.url} />
      </label>
    </form>
  );
};

export default SignatureForm;
