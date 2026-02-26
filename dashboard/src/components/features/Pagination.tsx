import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Pagination = () => {
    return (
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-start gap-10 text-sm text-gray-500 border-t border-gray-100 pt-6 px-4">
            {/* Rows Selection */}
            <div className="flex items-center gap-3">
                <span className="font-medium text-black">Rows per page:</span>
                <div className="relative">
                    <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-1.5 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-50 font-bold text-gray-700">
                        <option>10</option>
                        <option selected>100</option>
                        <option>500</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <ChevronLeft size={14} className="-rotate-90" />
                    </div>
                </div>
            </div>

            {/* Page Info & Nav */}
            <div className="flex items-center gap-8 font-semibold">
                <span className="text-black italic">1-100 of 500</span>
                <div className="flex gap-4">
                    <button className="p-1 text-gray-300 hover:text-black transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="p-1 text-gray-700 hover:text-black transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};