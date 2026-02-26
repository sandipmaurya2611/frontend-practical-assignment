import type { Employee } from '../../types';

export const EmployeeCard = ({ employee }: { employee: Employee }) => {
    return (
        <div className="bg-white rounded-[32px] p-8 flex flex-col items-center border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative">
            {/* Profile Image & Badge Icon */}
            <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-[6px] border-gray-50 group-hover:border-orange-50 transition-colors">
                    <img src={employee.image} alt={employee.name} className="w-full h-full object-cover" />
                </div>
                {/* Department Icon Badge (Matches Figma "Symbol on the image") */}
                <div className="absolute bottom-1 right-1 bg-[#3E3531] text-white p-2 rounded-xl shadow-lg border-2 border-white text-xs">
                    {employee.deptIcon}
                </div>
            </div>

            {/* Employee Info */}
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-1">{employee.name}</h3>
            <p className="text-[#888] font-semibold text-xs uppercase tracking-widest mb-4">
                {employee.role}
            </p>

            {/* Status Dots */}
            <div className="flex gap-1.5 mt-auto">
                {employee.statusColors.map((color, i) => (
                    <div key={i} className={`w-2.5 h-2.5 rounded-full ${color}`} />
                ))}
            </div>
        </div>
    );
};