import React, { useEffect, useState } from 'react';
import './Employee.css';

interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
}
function Employee(props: { employee: IEmployee }) {
  const [option, setOption] = useState('false');
  // useEffect(() => {
  //   setOption(props.optionValue);
  // }, [props.optionValue]);

  function handleOption(event: React.FormEvent<HTMLInputElement>) {
    setOption(event.currentTarget.value);
  }

  return (
    <div className="employee">
      <h4 className={option === 'true' ? 'employee__name employee__name_active' : 'employee__name'}>
        {props.employee.firstName}
        {props.employee.lastName}
      </h4>
      <div className="employee__options">
        <label className="employee__options-label">
          <input
            className="employee__options-input"
            type="radio"
            value="false"
            checked={option === 'false'}
            onChange={handleOption}
          />
          <span className="checkmark"></span>
          not active
        </label>
        <label className="employee__options-label">
          <input
            className="employee__options-input"
            type="radio"
            value="true"
            checked={option === 'true'}
            onChange={handleOption}
          />
          <span className="checkmark"></span>
          active
        </label>
      </div>
    </div>
  );
}

export default Employee;
