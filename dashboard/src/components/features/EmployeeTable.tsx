import type { Employee } from '../../types';

export const EmployeeTable = ({ employees }: { employees: Employee[] }) => (
    <div className="bg-white rounded-[32px] overflow-x-auto border border-gray-100 shadow-sm">
        <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-400 uppercase text-[10px] tracking-widest font-bold">
                <tr>
                    <th className="p-6">Employee</th>
                    <th className="p-6">Role</th>
                    <th className="p-6">Department</th>
                    <th className="p-6">Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
                {employees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 flex items-center gap-3">
                            <img src={emp.image} className="w-10 h-10 rounded-full" alt="" />
                            <span className="font-bold text-gray-800">{emp.name}</span>
                        </td>
                        <td className="p-4 text-gray-500 font-medium">{emp.role}</td>
                        <td className="p-4">{emp.deptIcon}</td>
                        <td className="p-4">
                            <div className="flex gap-1">
                                {emp.statusColors.map((c, i) => <div key={i} className={`w-2 h-2 rounded-full ${c}`} />)}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);