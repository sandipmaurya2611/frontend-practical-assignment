import { useEffect, useState } from 'react';
import { Clock, FileText, Inbox, Menu } from 'lucide-react';

export const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="bg-white p-4 flex justify-between items-center px-4 sm:px-6 md:px-8 rounded-[32px] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 text-[#3D3734] hover:bg-gray-50 rounded-xl lg:hidden transition-colors"
                >
                    <Menu size={24} />
                </button>
                <h2 className="text-lg sm:text-xl font-bold">People</h2>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
                {/* Timezone Indicator */}
                <div className="hidden lg:block border border-gray-100 px-5 py-2.5 rounded-full text-sm font-bold text-gray-700">
                    MST
                </div>

                {/* Time Pill */}
                <div className="hidden md:flex items-center gap-5 border border-gray-100 pl-5 pr-1 py-1 rounded-full">
                    <div className="flex items-center gap-3">
                        <Clock size={20} className="text-[#4A4441]" />
                        <span className="font-bold text-lg md:text-xl text-[#3D3734]">
                            {time.toLocaleTimeString('en-GB', { hour12: false })}
                        </span>
                    </div>
                    <button className="bg-gray-50 p-3 rounded-full text-[#4A4441] hover:bg-gray-100 transition-colors">
                        <FileText size={20} />
                    </button>
                </div>

                {/* Inbox Notification */}
                <button className="relative border border-gray-100 p-3 md:p-4 rounded-full text-[#4A4441] hover:bg-gray-50 transition-colors">
                    <Inbox size={20} className="md:w-[22px] md:h-[22px]" />
                    <span className="absolute top-2.5 right-2.5 md:top-3.5 md:right-3.5 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></span>
                </button>

                {/* User Profile */}
                <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
                    className="w-10 h-10 md:w-13 md:h-13 rounded-full object-cover border border-gray-100 shadow-sm"
                    alt="admin"
                />
            </div>
        </header>
    );
};