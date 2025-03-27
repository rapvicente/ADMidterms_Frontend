// import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lumina Insurance",
  description: "Review your policy claims with Lumina Insurance",
  generator: "v0.dev",
}

export default function ReviewPolicyClaims() {
  const policyData = [
    { type: "Retirement (Premium)", date: "February 2, 2025", status: "Pending Review" },
    { type: "Education (Basic)", date: "February 2, 2025", status: "Pending Review" },
    { type: "Health (Premium)", date: "February 2, 2025", status: "Pending Review" },
    { type: "Auto (Standard)", date: "February 2, 2025", status: "Pending Review" },
    { type: "Auto (Premium)", date: "February 2, 2025", status: "Pending Review" },
    { type: "Retirement (Premium)", date: "February 2, 2025", status: "Pending Review" },
    { type: "Education (Basic)", date: "February 2, 2025", status: "Pending Review" },
    { type: "Health (Premium)", date: "February 2, 2025", status: "Pending Review" },
    { type: "Auto (Standard)", date: "February 2, 2025", status: "Pending Review" },
    { type: "Auto (Premium)", date: "February 2, 2025", status: "Pending Review" },
  ]

  return (
    <div className="text-black mt-30 min-h-screen flex flex-col">
         <header className="fixed top-0 left-0 right-0 shadow-md bg-white z-50">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <img src="/images/lumina.png" alt="Lumina Logo" width="80" height="80" />
          </div>
          <div className="flex space-x-2">
            <button className="bg-[#FFC840] text-black py-1 px-2 rounded-lg text-[12px] font-montserrat font-bold">About Lumina</button>
            <button className="bg-[#FFC840] text-black py-1 px-2 rounded-lg text-[12px] font-montserrat font-bold">Policies</button>
            <button className="bg-[#FFC840] text-black py-1 px-2 rounded-lg text-[12px] font-montserrat font-bold">Claim and Services</button>
            <button className="bg-[#FFC840] text-black py-1 px-2 rounded-lg text-[12px] font-montserrat font-bold">Review Policy Requests</button>
            <button className="bg-[#FFC840] text-black py-1 px-2 rounded-lg text-[12px] font-montserrat font-bold">Review Claims</button>
            <button className="bg-[#FFC840] text-black py-1 px-2 rounded-lg text-[12px] font-montserrat font-bold flex items-center space-x-2">
              <span>MY PROFILE</span>
              <button className="bg-white text-black py-1 px-2 rounded-full text-[12px] font-montserrat font-bold flex items-center space-x-1">
                <span>Logout</span>
              </button>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-6">Review Policy Claims</h1>

        <div className="border border-[#FFC840] rounded-lg p-6 max-w-4xl mx-auto mb-6">
          {policyData.map((policy, index) => (
            <div key={index} className="flex items-center mb-4 gap-4">
              <button className="bg-[#FFC840] px-4 py-1 rounded-full text-black font-medium min-w-[80px] text-center">
                Review
              </button>
              <div className="flex-grow">
                <span className="font-medium">{policy.type}</span>
                <span className="mx-2">•</span>
                <span className="text-sm">Date: {policy.date}</span>
              </div>
              <div className="text-sm">Status: {policy.status}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#FFC840] px-6 py-2 rounded-full text-black font-medium">View More</button>
        </div>
      </main>
      <footer className="bg-[#FFC840] text-black py-4 mt-10">
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
  )
}

