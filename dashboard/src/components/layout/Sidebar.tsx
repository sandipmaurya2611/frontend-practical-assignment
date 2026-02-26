import { Home, User, Users, FileText, UserPlus, PieChart, Settings, ChevronsLeft, ChevronRight, X } from 'lucide-react';

export const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const menuItems = [
        { name: 'Home', icon: <Home size={18} /> },
        { name: 'My Info', icon: <User size={18} />, hasSub: true },
        { name: 'People', icon: <Users size={18} />, active: true },
        { name: 'Team Management', icon: <Users size={18} />, hasSub: true },
        { name: 'Project Setup', icon: <FileText size={18} />, hasSub: true },
        { name: 'Hiring', icon: <UserPlus size={18} /> },
        { name: 'Report', icon: <PieChart size={18} /> },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm"
                    onClick={onClose}
                />
            )}

            <aside className={`fixed w-[280px] bg-[#3D3734] text-white flex-col left-4 top-4 bottom-4 z-50 rounded-[32px] overflow-hidden shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-[120%]'} lg:translate-x-0 flex`}>
                {/* Logo Area */}
                <div className="p-6 mb-2 flex items-center justify-between">
                    <h1 className="text-[28px] font-black tracking-tighter">CORE</h1>
                    <div className="flex items-center gap-3">
                        <button onClick={onClose} className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all">
                            <X size={18} />
                        </button>
                        <div className="cursor-pointer mt-1 text-gray-400 hover:text-white transition-colors hidden lg:block">
                            <ChevronsLeft size={20} />
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 mt-2 space-y-1">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className={`flex items-center justify-between px-4 py-3.5 rounded-2xl cursor-pointer transition-all ${item.active ? 'bg-white text-[#8A6A55] shadow-sm' : 'text-[#A69C97] hover:bg-[#4E4541] hover:text-white'
                                }`}
                        >
                            <div className="flex items-center gap-3.5">
                                {item.icon}
                                <span className={`text-[13px] ${item.active ? 'font-bold' : 'font-medium'}`}>{item.name}</span>
                            </div>
                            {item.hasSub && <ChevronRight size={16} className={item.active ? 'text-[#8A6A55]' : 'text-[#A69C97]'} />}
                        </div>
                    ))}
                </nav>

                {/* Settings Bottom */}
                <div className="p-4 mb-2 mt-auto">
                    <button className="flex items-center px-4 py-3.5 gap-3.5 w-full text-[#A69C97] hover:bg-[#4E4541] hover:text-white rounded-2xl border border-[#4E4541] transition-all">
                        <Settings size={18} />
                        <span className="text-[13px] font-medium">Settings</span>
                    </button>
                </div>
            </aside>
        </>
    );
};