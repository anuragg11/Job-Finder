import React from 'react'
import InputField from '../components/InputField'

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>

      <div>
        <label className="sidebar-label-container text-gray-700">
          <input type="radio" name="test" value="" onChange={handleChange} />
          <span className="checkmark"></span>All
        </label>

        <InputField handleChange={handleChange} value="Bangalore" title="Bangalore" name="test" />
        <InputField handleChange={handleChange} value="Mumbai" title="Mumbai" name="test" />
        <InputField handleChange={handleChange} value="Gurgaon" title="Gurgaon" name="test" />
        <InputField handleChange={handleChange} value="Jaipur" title="Jaipur" name="test" />
        <InputField handleChange={handleChange} value="Pune" title="Pune" name="test" />
        <InputField handleChange={handleChange} value="Chennai" title="Chennai" name="test" />
        <InputField handleChange={handleChange} value="Hyderabad" title="Hyderabad" name="test" />
      </div>
    </div>
  )
}

export default Location