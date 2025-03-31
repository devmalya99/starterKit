import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import {Link} from 'react-router';
function Footer() {

    const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
  };


  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Connectify</h3>
              <p className="text-gray-400">
                Bringing people together through meaningful connections and
                shared experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Safety Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white">
                    Community Guidelines
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-4">
                Get the latest updates and news
              </p>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r"
                >
                  <ChevronRight />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Connectify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
