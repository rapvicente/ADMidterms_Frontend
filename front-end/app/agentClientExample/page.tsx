"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Page: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
      <header className="fixed top-0 left-0 right-0 shadow-md bg-white z-50">
        <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
            <Link href="/agentHomepage">
              <img src="/images/lumina.png" alt="Lumina Logo" width="80" height="80" />
            </Link>
          </div>
          <div className="flex space-x-2">
            <button className="bg-[#FFC840] text-black py-1 px-2 rounded-lg text-[12px] font-montserrat font-bold">About Lumina</button>
            <button className="bg-[#FFC840] text-black py-1 px-2 rounded-lg text-[12px] font-montserrat font-bold">Policies</button>
            <button className="bg-[#FFC840] text-black py-1 px-2 rounded-lg text-[12px] font-montserrat font-bold">Claims and Services</button>
            <button className="bg-[#FFC840] text-black py-1 px-2 rounded-lg text-[12px] font-montserrat font-bold"><Link href="/agentApplicationForm">Create Application Form</Link></button>
            <button className="bg-[#FFC840] text-black py-1 px-2 rounded-lg text-[12px] font-montserrat font-bold flex items-center space-x-2">
            <span><Link href="/agentHomepage">HOMEPAGE</Link></span>
              <button className="bg-white text-black py-1 px-2 rounded-full text-[12px] font-montserrat font-bold flex items-center space-x-1">
                <span><Link href="/">Logout</Link></span>
              </button>
            </button>
          </div>
        </div>
      </header>
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="absolute top-[130px] left-1/2 transform -translate-x-1/2 w-[900px] h-[200px] border-1 border-[#FFC840] bg-[#FFFFFF] rounded-3xl mb-1">
          <div className="shadow-2xl absolute left w-[200px] h-[200px] bg-[#FFFFFF] border-1 border-black rounded-3xl">
            <img src="/images/lumina.png" alt="Lumina Logo" className="absolute top-1/2 left-1/2 w-[50%] h-[50%] transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="absolute left-[230px] top-[10px]">
            {/* Username */}
            <div className="text-[24px] font-semibold text-black font-montserrat">
              Althea Irish Manalo
            </div>
            {/* Name */}
            <div className="text-[15px] font-normal text-black font-montserrat mt-2">
              Policies Owned: 5
            </div>
            {/* Birthdate */}
            <div className="text-[15px] font-normal text-black font-montserrat mt-2">
              Birthdate: August 1, 2345
            </div>
            {/* Age */}
            <div className="text-[15px] font-normal text-black font-montserrat mt-2">
              Agent Name: Dave Mercado
            </div>
          </div>
          <div className="absolute right-[20px] top-[55px]">
            {/* Email */}
            <div className="text-[15px] font-normal text-black font-montserrat">
              Email: manalo2221641@mkt.ceu.edu.ph
            </div>
            {/* Phone Number */}
            <div className="text-[15px] font-normal text-black font-montserrat mt-2">
              Phone Number: 0912 3456 789
            </div>
          </div>
        </div>
        
        {/* My Policies */}
        <div className="absolute top-[42vh] left-1/2 transform -translate-x-1/2 w-[900px] text-[12px] h-[30px] flex items-center justify-start text-black font-montserrat font-bold">
          <span className="px-3 py-1 rounded-2xl border-2 border-[#FFC840] ml-3 text-left shadow-lg">Policies Owned</span>
        </div>
         <div className="absolute top-[430px] left-1/2 transform -translate-x-1/2 w-[900px] h-[260px] bg-[#FFC840] rounded-3xl mt-1 mb-1">
          <div className="absolute left-[20px] top-[10px] flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <div className="hover:bg-[#FFC840] hover:text-[#FFFFFF] w-[90px] text-[12px] font-montserrat h-[35px] flex items-center justify-center bg-[#FFFFFF] border-1 text-black font-bold rounded-2xl">
                <span className="text-center"><Link href="/clientPolicyExample">View</Link></span>
              </div>
              <div className="text-[14px] font-montserrat font-bold text-black">
                Retirement (Premium) •
              </div>
              <div className="text-[14px] font-normal font-montserrat text-black">
                Insured Name: Ralph Benedict Vicente
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hover:bg-[#FFC840] hover:text-[#FFFFFF] hover:border-[FFFFFF] w-[90px] text-[12px] h-[35px] font-montserrat flex items-center justify-center bg-[#FFFFFF] border-1 border-black text-black font-bold rounded-2xl">
                <span className="text-center"><Link href="/clientPolicyExample">View</Link></span>
              </div>
              <div className="text-[14px] font-bold font-montserrat text-black">
                Education (Basic)  •
              </div>
              <div className="text-[14px] font-normal font-montserrat text-black">
                Insured Name: Ethan Araneta
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hover:bg-[#FFC840] hover:text-[#FFFFFF] hover:border-[FFFFFF] w-[90px] text-[12px] h-[35px] font-montserrat flex items-center justify-center bg-[#FFFFFF] border-1 border-black text-black font-bold rounded-2xl">
                <span className="text-center"><Link href="/clientPolicyExample">View</Link></span>
              </div>
              <div className="text-[14px] font-bold font-montserrat text-black">
                Health (Premium)  •
              </div>
              <div className="text-[14px] font-normal font-montserrat text-black">
                Insured Name: Althea Irish Manalo
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hover:bg-[#FFC840] hover:text-[#FFFFFF] hover:border-[FFFFFF] w-[90px] text-[12px] h-[35px] font-montserrat flex items-center justify-center bg-[#FFFFFF] border-1 border-black text-black font-bold rounded-2xl">
                <span className="text-center"><Link href="/clientPolicyExample">View</Link></span>
              </div>
              <div className="text-[14px] font-bold font-montserrat text-black">
                Auto (Standard)  •
              </div>
              <div className="text-[14px] font-normal font-montserrat text-black">
                Insured Name: Leamei Quiñanola
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hover:bg-[#FFC840] hover:text-[#FFFFFF] hover:border-[FFFFFF] w-[90px] text-[12px] h-[35px] font-montserrat flex items-center justify-center bg-[#FFFFFF] border-1 border-black text-black font-bold rounded-2xl">
                <span className="text-center"><Link href="/clientPolicyExample">View</Link></span>
              </div>
              <div className="text-[14px] font-bold font-montserrat text-black">
                Auto (Premium)  •
              </div>
              <div className="text-[14px] font-normal font-montserrat text-black">
                Insured Name: Justin Dennis Sauquillo
              </div>
            </div>
        </div>
        {/* Status */}
        <div className="absolute right-5 mt-4">
            <div className="text-[14px] font-normal text-black font-montserrat">
            Status: Active
            </div>
            <div className="text-[14px] font-normal text-black font-montserrat mt-8">
            Status: Active
            </div>
            <div className="text-[14px] font-normal text-black font-montserrat mt-8">
            Status: Active
            </div>
            <div className="text-[14px] font-normal text-black font-montserrat mt-8">
            Status: Under Review
            </div>
            <div className="text-[14px] font-normal text-black font-montserrat mt-8">
            Status: Under Review
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#FFC840] text-black py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col items-start">
            <div className="flex space-x-2">
            <p className="font-montserrat text-xs">Copyright © 2025 Lumina Insurances. All rights reserved.</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex justify-center items-center space-x-2 mt-1">
              <a href="#" className="font-montserrat text-xs">Our Team</a>
              <a href="#" className="font-montserrat text-xs">Contact Us</a>
              <a href="#" className="font-montserrat text-xs">Terms and Conditions</a>
            </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 mt-2">
            <img src="/images/Facebook.png" alt="Facebook" className="h-4 w-4" />
            <img src="/images/LinkedIn.png" alt="LinkedIn" className="h-4 w-4" />
            <img src="/images/Instagram.png" alt="Instagram" className="h-4 w-4" />
            <img src="/images/X.png" alt="X" className="h-4 w-4" />
            </div>
            <div className="flex items-center mt-1">
              <img src="/images/mail.png" alt="Email" className="h-3 w-3 mr-1" />
              <p className="font-montserrat text-xs">lumina.insurances@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;