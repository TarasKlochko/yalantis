import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { IEmployee } from '../../interfaces';
import { addEmployeeBirthday, removeEmployeeBirthday } from '../employeeBirthday/employeeBithday.slice';
import './Employee.css';

function Employee(props: { employee: IEmployee }) {
  const [option, setOption] = useState('false');
  const birthdayList = useAppSelector((state) => state.employeeBirthday);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (birthdayList.length) {
      birthdayList.forEach((id: string) => {
        if (id === props.employee.id) {
          setOption('true');
        }
      });
    }
  });

  useEffect(() => {
    localStorage.setItem('birthdayList', JSON.stringify(birthdayList));
  }, [birthdayList]);

  function handleOption(event: React.FormEvent<HTMLInputElement>) {
    let optionValue = event.currentTarget.value;
    setOption(optionValue);
    if (optionValue === 'true') {
      dispatch(addEmployeeBirthday(props.employee.id));
    } else {
      dispatch(removeEmployeeBirthday(props.employee.id));
    }
  }

  return (
    <div className="employee">
      <h4 className={option === 'true' ? 'employee__name employee__name_active' : 'employee__name'}>
        {props.employee.firstName} {props.employee.lastName}
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
