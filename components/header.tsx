import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, User, MessageSquare, PhoneCall } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-10">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#343959]">LG U+</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-[#343959] hover:text-[#c0339e] font-medium">
                서비스
              </Link>
              <Link href="#" className="text-[#343959] hover:text-[#c0339e] font-medium">
                AX Insight
              </Link>
              <Link href="#" className="text-[#343959] hover:text-[#c0339e] font-medium">
                이벤트/혜택
              </Link>
              <Link href="#" className="text-[#343959] hover:text-[#c0339e] font-medium">
                마이페이지
              </Link>
              <Link href="#" className="text-[#343959] hover:text-[#c0339e] font-medium">
                고객지원
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="w-5 h-5 text-[#343959]" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="w-5 h-5 text-[#343959]" />
            </button>
            <button className="hidden md:block p-2 rounded-full bg-[#c0339e] text-white hover:bg-opacity-90">
              <PhoneCall className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
              <Menu className="w-5 h-5 text-[#343959]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
