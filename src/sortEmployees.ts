import { IEmployee } from './interfaces';
export function sortEmployees(a: IEmployee, b: IEmployee) {
  let x = a.firstName.toLowerCase();
  let y = b.firstName.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
}
