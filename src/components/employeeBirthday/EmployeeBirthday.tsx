import React from 'react';
import { IEmployee } from '../../interfaces';
import { months } from '../../data.js';
import { useAppSelector } from '../../app/hooks';
import { sortEmployees } from '../../sortEmployees';
import './EmployeeBirthday.css';

function EmployeeBirthday(props: { employees: IEmployee[] }) {
  const birthdayList = useAppSelector((state) => state.employeeBirthday);
  const currentMonth = new Date().getMonth();

  return (
    <div className="employees__birthday">
      <h2 className="employees__title">Employees birthday</h2>
      <ul className="employees__month-list">
        {birthdayList.length ? (
          months.map((month, index) => (
            <li className="employees__month-item" key={index}>
              <h3 className="employees__month">{months[(index + currentMonth) % months.length]}</h3>
              <ul>
                {props.employees
                  ?.filter((employee) => birthdayList.some((id) => id === employee.id))
                  .filter((employee) => new Date(employee.dob).getMonth() === (index + currentMonth) % months.length)
                  .length ? (
                  props.employees
                    ?.filter((employee) => birthdayList.some((id) => id === employee.id))
                    .filter((employee) => new Date(employee.dob).getMonth() === (index + currentMonth) % months.length)
                    .sort((a, b) => sortEmployees(a, b))
                    .map((employee) => (
                      <li className="employees__date" key={employee.id}>
                        {`${employee.lastName} ${employee.firstName} - ${new Date(employee.dob).getDate()} `}
                        {months[new Date(employee.dob).getMonth()]}, {new Date(employee.dob).getFullYear()} year
                      </li>
                    ))
                ) : (
                  <li className="employees__empty">"No Employees"</li>
                )}
              </ul>
            </li>
          ))
        ) : (
          <p className="employees__empty">Employees List is empty</p>
        )}
      </ul>
    </div>
  );
}
export default EmployeeBirthday;
