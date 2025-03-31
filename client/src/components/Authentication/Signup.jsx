import { useEffect, useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useRegisterUser } from '../../api/react-query/useRegisterUser';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  

  const navigate=useNavigate()

  const { mutate, isLoading, isError, error, isSuccess } = useRegisterUser();

  

  useEffect(() => {
    if (isLoading) {
      console.log("Submitting registration...");
    }
    if (isError) {
      console.error("Registration error:", error);
    }
    if (isSuccess) {
      console.log("Registration successful!");
    }
  }, [isLoading, isError, isSuccess, error]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', formData);
    // Add your authentication logic here
    mutate(
      formData,
      {
        onSuccess: ()=>{
          console.log('Signup successful!')
          navigate('/home')
        },

        onError: (error)=>{
          console.log('Signup error:', error)
        }
      }
    )
    navigate('/home')
  };

  return (
    <div className="max-w-md my-14 mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
        <p className="text-gray-500 mt-2">Get started with your free account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            name="name"
            type="text"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;