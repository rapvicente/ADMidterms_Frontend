"use client";

import React, { useState, FormEvent, useEffect } from "react";

const ClaimSubmission: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    policyNumber: "",
    dateOfBirth: "",
    phoneNumber: "",
    relationshipToPolicyholder: "",
    eventDate: "",
    eventLocation: "",
    eventDescription: "",
    amountClaimed: "",
    policyType: [] as string[],
    requiredDocuments: [] as string[],
    claimantName: "",
    signature: "",
    signatureDate: "",
    userId: ""
  });
  
  useEffect(() => {
    // First try to get user ID from localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      console.log('Setting user ID from localStorage:', parsedData.userId);
      setFormData(prev => ({ ...prev, userId: parsedData.userId }));
    } else {
      // If no user data in localStorage, use test user ID
      const testUserId = '1'; // Replace with actual user ID
      console.log('Setting test user ID:', testUserId);
      setFormData(prev => ({ ...prev, userId: testUserId }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { placeholder, value, type } = e.target;
    
    // Map placeholders to state keys
    const inputMappings: { [key: string]: string } = {
      "Full Name": "fullName",
      "Policy Number": "policyNumber",
      "Date of Birth": "dateOfBirth", 
      "Phone Number": "phoneNumber",
      "Relationship to Policyholder": "relationshipToPolicyholder",
      "Date of Event (e.g. hospitalization, vehicle incident, retirement, etc.)": "eventDate",
      "Location of Event (if applicable)": "eventLocation",
      "Brief Description of Event or Reason for Claim": "eventDescription",
      "Total Amount Being Claimed": "amountClaimed",
      "Claimant Name": "claimantName",
      "Signature": "signature"
    };

    const stateKey = inputMappings[placeholder] || placeholder.toLowerCase().replace(/\s/g, '');
    
    setFormData(prev => ({
      ...prev,
      [stateKey]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : value
    }));
  };

  const handlePolicyTypeChange = (type: string) => {
    setFormData(prev => {
      const currentTypes = prev.policyType;
      const newTypes = currentTypes.includes(type)
        ? currentTypes.filter(t => t !== type)
        : [...currentTypes, type];
      
      return {
        ...prev,
        policyType: newTypes
      };
    });
  };

  const handleDocumentSelect = (document: string) => {
    setFormData(prev => {
      const currentDocs = prev.requiredDocuments;
      const newDocs = currentDocs.includes(document)
        ? currentDocs.filter(doc => doc !== document)
        : [...currentDocs, document];
      
      return {
        ...prev,
        requiredDocuments: newDocs
      };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.policyNumber || !formData.dateOfBirth || 
        !formData.phoneNumber || !formData.relationshipToPolicyholder || 
        !formData.eventDescription || !formData.userId) {
      console.log('Missing required fields:', {
        fullName: !!formData.fullName,
        policyNumber: !!formData.policyNumber,
        dateOfBirth: !!formData.dateOfBirth,
        phoneNumber: !!formData.phoneNumber,
        relationshipToPolicyholder: !!formData.relationshipToPolicyholder,
        eventDescription: !!formData.eventDescription,
        userId: !!formData.userId
      });
      alert("Please fill in all required fields");
      return;
    }

    console.log('Form data before submission:', formData);
  
    // Ensure numeric conversions and proper formatting
    const payload = {
      claimant_name: formData.claimantName || formData.fullName,
      policy_id: Number(formData.policyNumber),
      amount_claimed: Number(formData.amountClaimed || 0),
      claimant_dob: formData.dateOfBirth,
      claimant_phone: formData.phoneNumber,
      claimant_relationship: formData.relationshipToPolicyholder,
      event_date: formData.eventDate || new Date().toISOString().split("T")[0],
      event_location: formData.eventLocation || "Not Specified",
      event_description: formData.eventDescription,
      policy_type: formData.policyType.length > 0 
        ? formData.policyType[0]
        : "Education",
      required_documents: JSON.stringify(formData.requiredDocuments || []),
      claimant_signature: formData.signature || formData.fullName,
      signature_date: formData.signatureDate || new Date().toISOString().split("T")[0],
      status: "Unclaimed",
      user_id: formData.userId
    };

    console.log('Payload before submission:', payload);

    try {
      const response = await fetch("http://localhost:4000/claims", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("Full Error Response:", errorData);
        throw new Error(errorData?.error || `HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      alert(`Claim submitted successfully! Claim ID: ${responseData.claim_id}`);
    } catch (error) {
      console.error("Submission error:", error);
      alert(`Submission failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F8F8F8] p-6">
      {/* Main Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-4">
        {/* Back Button */}
        <div className="w-full flex justify-end">
          <a
            href="/"
            className="bg-[#FFC840] px-4 py-2 text-black font-bold rounded-lg shadow-md"
          >
            Back
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/images/lumina.png" alt="Lumina Logo" className="h-45" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-black text-center mb-4">
          Policy Claim Submission Form
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="bg-[#FFC840] p-6 rounded-lg shadow-md">
            {/* Form Sections Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Claimant Information */}
              <div>
                <h3 className="text-black font-bold mb-2">Claimant Information</h3>
                <div className="grid gap-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="input bg-white border border-black-100 rounded-lg px-3 py-2 text-black"
                  />
                  <input
                    type="number"
                    placeholder="Policy Number"
                    value={formData.policyNumber}
                    onChange={handleInputChange}
                    className="input bg-white border border-black-100 rounded-lg px-3 py-2 text-black"
                  />
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="input bg-white border border-black-100 rounded-lg px-3 py-2 text-black"
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="input bg-white border border-black-100 rounded-lg px-3 py-2 text-black"
                  />
                  <input
                    type="text"
                    placeholder="Relationship to Policyholder"
                    value={formData.relationshipToPolicyholder}
                    onChange={handleInputChange}
                    className="input bg-white border border-black-100 rounded-lg px-3 py-2 text-black"
                  />
                </div>
              </div>

              {/* Claim Details */}
              <div>
                <h3 className="text-black font-bold mb-2">Claim Details</h3>
                <div className="grid gap-2">
                  <input
                    type="date"
                    placeholder="Date of Event (e.g. hospitalization, vehicle incident, retirement, etc.)"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="input bg-white border black-100 rounded-lg px-3 py-2 text-black"
                  />
                  <input
                    type="text"
                    placeholder="Location of Event (if applicable)"
                    value={formData.eventLocation}
                    onChange={handleInputChange}
                    className="input bg-white border black-100 rounded-lg px-3 py-2 text-black"
                  />
                  <input
                    type="text"
                    placeholder="Brief Description of Event or Reason for Claim"
                    value={formData.eventDescription}
                    onChange={handleInputChange}
                    className="input bg-white border black-100 rounded-lg px-3 py-2 text-black"
                  />
                  <input
                    type="text"
                    placeholder="Total Amount Being Claimed"
                    value={formData.amountClaimed}
                    onChange={handleInputChange}
                    className="input bg-white border black-100 rounded-lg px-3 py-2 text-black"
                  />
                </div>
              </div>
            </div>

            {/* Policy Type */}
            <div className="mt-6">
              <h3 className="text-black font-bold mb-2">Policy Type:</h3>
              <div className="flex space-x-2 text-black">
                {["Retirement Claim", "Education Claim", "Health Claim", "Auto Claim"].map(
                  (type, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        checked={formData.policyType.includes(type)}
                        onChange={() => handlePolicyTypeChange(type)}
                      />
                      <span>{type}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Supporting Documents & Declaration in Two-Column Layout */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              {/* Required Supporting Documents */}
              <div>
                <h3 className="text-black font-bold mb-2">Required Supporting Documents</h3>
                <div className="grid grid-cols-1 gap-1 text-black">
                  {[
                    "Valid Government ID",
                    "Copy of Policy Contract",
                    "Official Receipts / Billing Statements",
                    "Medical or Hospital Records",
                    "Police Report / Incident Report",
                    "Certificate of Retirement / Age Verification",
                    "School Registration / Proof of Enrollment",
                    "Others_______________________",
                  ].map((doc, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input 
                        type="checkbox"
                        checked={formData.requiredDocuments.includes(doc)}
                        onChange={() => handleDocumentSelect(doc)}
                      />
                      <span>{doc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Declaration & Signature */}
              <div className="bg-white p-4 h-55 mt-1 rounded-lg shadow-md">
                <h3 className="text-black font-bold mb-2">Declaration & Signature</h3>
                <p className="text-sm text-black">
                  I, the undersigned, hereby declare that the above information is true and
                  correct to the best of my knowledge. I understand that Lumina Insurances
                  reserves the right to verify any information provided and may request further
                  documentation if necessary.
                </p>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Claimant Name"
                    value={formData.claimantName}
                    onChange={handleInputChange}
                    className="w-full border border-black p-1 rounded bg-gray-100 text-black text-sm outline-none"
                  />
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <input
                      type="text"
                      placeholder="Signature"
                      value={formData.signature}
                      onChange={handleInputChange}
                      className="w-full border border-black p-1 rounded bg-gray-100 text-black text-sm outline-none"
                    />
                    <input
                      type="date"
                      value={formData.signatureDate}
                      onChange={handleInputChange}
                      className="w-full border border-black p-1 rounded bg-gray-100 text-black text-sm outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer & Submit Button */}
            <div className="mt-0 bg-white p-4 rounded-lg shadow-md text-center">
              <p className="text-black text-xs text-justify">
                All claims are subject to review and approval by Lumina Insurances' Claims
                Department. Submission does not guarantee approval. Processing time may vary
                depending on claim type and completeness of documentation.
              </p>

              {/* Need Help Section */}
              <div className="mt-4 text-left text-sm text-black">
                Need Help? Call (02) 1234-5678 or email claims@lumina.com.ph
              </div>

              <div className="mt-2 text-left text-sm text-black">
                Visit{" "}
                <a href="www.luminainsurances.com" className="underline">
                  www.luminainsurances.com
                </a>{" "}
                for status updates.
              </div>

              <div className="flex justify-end mt-2">
                <button 
                  type="submit"
                  className="bg-[#FFC840] px-6 py-2 text-black font-bold rounded-lg shadow-md"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClaimSubmission;