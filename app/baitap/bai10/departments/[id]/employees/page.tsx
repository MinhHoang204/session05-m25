import { useRouter } from 'next/router';
import { employees } from '../../../data';

export default function EmployeeDetail() {
  const router = useRouter();
  const { employeeId } = router.query;

  const employee = employees.find(emp => emp.id === parseInt(employeeId));

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
      <h1>Employee Detail: {employee.name}</h1>
      <p>Id: {employee.id}</p>
      <p>Department Id: {employee.departmentId}</p>
    </div>
  );
}  