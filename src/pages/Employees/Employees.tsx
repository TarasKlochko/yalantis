import React, { useEffect, useState } from 'react';
import Employee from '../../components/employee/Employee';
import EmployeeBirthday from '../../components/employeeBirthday/EmployeeBirthday';
import { sortEmployees } from '../../sortEmployees';
import { alphabet } from '../../data';
import { IEmployee } from '../../interfaces';
import Loading from '../../components/loading/Loading';
import './Employees.css';

function Employees() {
  const [employees, setEmployee] = useState<IEmployee[]>();

  useEffect(() => {
    fetch(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {employees ? (
        <div className="employees">
          <div className="employees__all">
            <h2 className="employees__title">Employees</h2>
            <ul className="employees__list">
              {employees &&
                alphabet.map((letter, index) => (
                  <li className="employees__item" key={index}>
                    <div>
                      <h3 className="employees__letter">{letter}</h3>
                      {employees.filter((employee) => employee.firstName[0] === letter).length ? (
                        employees
                          .filter((employee) => employee.firstName[0] === letter)
                          .sort((a, b) => sortEmployees(a, b))
                          .map((employee) => <Employee key={employee.id} employee={employee} />)
                      ) : (
                        <p className="employees__empty employees__empty_all">"No Employees"</p>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <EmployeeBirthday employees={employees} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Employees;
