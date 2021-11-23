import react, { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import Employee from '../../components/employee/Employee';
import './Employees.css';

function Employees() {
  interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
  }
  const [employees, setEmployee] = useState<IEmployee[]>();
  const birthdayList = useAppSelector((state) => state.employeeBirthday);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

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
                      .sort((a, b) => {
                        let x = a.firstName.toLowerCase();
                        let y = b.firstName.toLowerCase();
                        if (x < y) {
                          return -1;
                        }
                        if (x > y) {
                          return 1;
                        }
                        return 0;
                      })
                      .map((employee) => <Employee employee={employee} />)
                  ) : (
                    <p className="employees__empty employees__empty_all">"No Employees"</p>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="employees__birthday">
        <h2 className="employees__title">Employees birthday</h2>
        <ul className="employees__month-list">
          {birthdayList.length ? (
            months.map((month, index) => (
              <li className="employees__month-item" key={index}>
                <h3 className="employees__month">{months[(index + 10) % 12]}</h3>
                <ul>
                  {employees
                    ?.filter((employee) => birthdayList.some((id) => id === employee.id))
                    .filter((employee) => new Date(employee.dob).getMonth() === (index + 10) % 12).length ? (
                    employees
                      ?.filter((employee) => birthdayList.some((id) => id === employee.id))
                      .filter((employee) => new Date(employee.dob).getMonth() === (index + 10) % 12)
                      .sort((a, b) => {
                        let x = a.lastName.toLowerCase();
                        let y = b.lastName.toLowerCase();
                        if (x < y) {
                          return -1;
                        }
                        if (x > y) {
                          return 1;
                        }
                        return 0;
                      })
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
    </div>
  );
}

export default Employees;
