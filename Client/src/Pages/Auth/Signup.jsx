import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 mt-8'>
      <div className=' bg-white shadow-lg rounded-lg p-8 max-w-md w-full '>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>Create Your Account</h1>
        <p className='text-center text-gray-600 mb-8 items-center'>Join us today! It&apos;s quick and easy</p>

        {/* Name Input */}
        <div className='mb-4'>
          <Label>Full Name</Label>
          <Input placeholder="Enter Your Name" />
        </div>

        {/* Email Input */}
        <div className='mb-4'>
          <Label>Email Address</Label>
          <Input placeholder="Enter Your Email" />
        </div>

        {/* Password Input */}
        <div className='mb-4'>
          <Label>Password</Label>
          <Input placeholder="Enter Your Password" />
        </div>

        {/* Role Input */}
        <div className='mb-4'>
          <Label>Role</Label>
          <RadioGroup defaultValue="option-one" className="flex gap-4 mt-2">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Student</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Instructor</Label>
  </div>
</RadioGroup>

         
        </div>

{/* SignUp Button */}
<Button className="w-full bg-blue-500 hover:bg-blue-600">Sign Up</Button>
<p className='text-center mt-4'>Already have an account? <Link to={'/login'} className='text-blue-500 hover:underline' >Log in</Link></p>
      </div>
    </div>
  )
}

export default Signup
