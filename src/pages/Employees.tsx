import react, { useEffect, useState } from 'react';
import Employee from '../components/employee/Employee';
import './Employees.css';

function Employees() {
  interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
  }
  const [employees, setEmployee] = useState<IEmployee[]>();
  useEffect(() => {
    fetch(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw new Error(data.message);
        }
        console.log(data);
        setEmployee(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  return (
    <div className="employees">
      <div className="employees__all">
        <h2 className="employees__title">Employees</h2>
        <ul className="employees__list">
          {employees &&
            alphabet.map((char, index) => (
              <li className="employees__item" key={index}>
                <div>
                  <h3 className="employees__letter">{char}</h3>
                  {employees.filter((employee) => employee.firstName[0] === char).length ? (
                    employees
                      .filter((employee) => employee.firstName[0] === char)
                      .map((employee) => <Employee employee={employee} />)
                  ) : (
                    <p className="employees__empty">"No Employees"</p>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="employees__birthday">
        <h2>Employees birthday</h2>
        <ul></ul>
      </div>
    </div>
  );
}

export default Employees;
