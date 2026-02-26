import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { EmployeeCard } from './components/features/EmployeeCard';
import { mockEmployees } from './Data/mockData';
import { EmployeeTable } from './components/features/EmployeeTable';
import { LayoutGrid, Search, Plus, Download, Filter, Rows, Network } from 'lucide-react';
import { Pagination } from './components/features/Pagination';

function App() {
  const [view, setView] = useState<'grid' | 'list' | 'hierarchy'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredData = mockEmployees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#F8F9FB] overflow-x-hidden">
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <main className="flex-1 lg:pl-[312px] px-4 lg:px-6 pt-4 flex flex-col gap-4 min-w-0">
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />

        <div className="flex-1 pb-4">
          <div className="bg-white rounded-[32px] border border-gray-100 flex flex-col min-h-full shadow-sm">
            {/* Filters Area */}
            <div className="p-4 sm:p-6 lg:p-8 flex flex-col xl:flex-row gap-4 justify-between items-center">
              <div className="relative w-full xl:w-96">
                <Search className="absolute left-4 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by Employee Name or Number"
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-orange-50 outline-none placeholder:text-gray-300"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 mt-2 xl:mt-0 w-full xl:w-auto">
                {/* Download & Filter */}
                <button className="p-3 border border-gray-100 bg-white rounded-2xl text-gray-500 hover:bg-gray-50 transition-all">
                  <Download size={20} />
                </button>
                <button className="p-3 border border-gray-100 bg-white rounded-2xl text-gray-500 hover:bg-gray-50 transition-all">
                  <Filter size={20} />
                </button>

                {/* Add Button */}
                <button className="bg-[#3D3734] text-white p-3 rounded-2xl hover:opacity-90 transition-all mx-2">
                  <Plus size={24} />
                </button>

                {/* View Switcher */}
                <div className="bg-white border border-gray-100 p-1.5 rounded-[20px] flex gap-1">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-2.5 rounded-xl transition-all ${view === 'grid' ? 'bg-[#3D3734] text-white' : 'text-gray-400 hover:bg-gray-50'}`}
                  >
                    <LayoutGrid size={20} />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-2.5 rounded-xl transition-all ${view === 'list' ? 'bg-[#3D3734] text-white' : 'text-gray-400 hover:bg-gray-50'}`}
                  >
                    <Rows size={20} />
                  </button>
                  <button
                    onClick={() => setView('hierarchy')}
                    className={`p-2.5 rounded-xl transition-all ${view === 'hierarchy' ? 'bg-[#3D3734] text-white' : 'text-gray-400 hover:bg-gray-50'}`}
                  >
                    <Network size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="px-4 sm:px-6 lg:px-8 pb-8 overflow-y-auto">
              {view === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
                  {filteredData.map(emp => <EmployeeCard key={emp.id} employee={emp} />)}
                </div>
              ) : (
                <div className="pb-8">
                  <EmployeeTable employees={filteredData} />
                </div>
              )}
              <Pagination />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;