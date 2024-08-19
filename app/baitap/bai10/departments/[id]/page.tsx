// pages/departments/[id]/index.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import { departments, employees } from '../../data';

export default function DepartmentDetail() {
  const router = useRouter();
  const { id } = router.query;

  const department = departments.find(dept => dept.id === parseInt(id));
  const departmentEmployees = employees.filter(emp => emp.departmentId === parseInt(id));

  if (!department) {
    return <div>Department not found</div>;
  }

  return (
    <div>
      <h1>Department Detail: {department.name}</h1>
      <h2>Employees</h2>
      <ul>
        {departmentEmployees.map(emp => (
          <li key={emp.id}>
            <Link href={`/departments/${department.id}/employees/${emp.id}`}>
              {emp.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
