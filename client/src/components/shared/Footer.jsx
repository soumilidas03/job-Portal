import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-300">
              JobPortal
            </h3>
            <p className="text-gray-300 text-sm">
              Your gateway to career opportunities
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-purple-300">
              For Candidates
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-300">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  My Profile
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-purple-300">
              For Employers
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-300">
                  Post Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Find Talent
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-purple-300">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2024 JobPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
