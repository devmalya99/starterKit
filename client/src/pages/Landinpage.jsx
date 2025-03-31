import { useState } from 'react';
import { 
  Menu, X, Users, Video, Bell, MessageSquare, Globe, ShieldCheck,
  Star, ChevronRight,
  
} from 'lucide-react';
import { Link } from 'react-router';

export default function Landingpage() {
 
  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-50 to-purple-50">
      
      

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Connect with friends and the world around you
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join millions of people sharing their stories, making connections, and building their communities.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center">
                App Store
              </button>
              <button className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition flex items-center justify-center">
                 Google Play
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-blue-100 rounded-3xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Social media app screens" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-100 rounded-3xl shadow-xl overflow-hidden border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Social media app screens" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Amazing Features</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Connections</h3>
              <p className="text-gray-600">Build meaningful relationships with people who share your interests.</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Streaming</h3>
              <p className="text-gray-600">Share your moments live with friends and followers in real-time.</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Notifications</h3>
              <p className="text-gray-600">Never miss important updates from people you care about.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">What People Are Saying</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "This platform changed how I connect with people. I've made genuine friends and even found business partners!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">User {item}</h4>
                    <p className="text-sm text-gray-500">Social Media Influencer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to join our community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up today and start connecting with amazing people around the world.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold">
            Get Started Now <ChevronRight className="inline ml-1" size={20} />
          </button>
        </div>
      </section>

      
    </div>
  );
}