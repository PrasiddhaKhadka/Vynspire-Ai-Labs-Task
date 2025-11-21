import { CustomTextField, AppCustomButton, AppLogo, LoginScreenImage } from "../../components";

export default function LoginView() {
return (
  <div className="w-screen h-screen flex bg-white">
  <div className="w-1/2 flex flex-col justify-center px-32">
    <div className="mb-12">
      <AppLogo /> 
    </div>
    <h2 className="text-4xl font-semibold mb-4">Welcome back!</h2>
      <p className="text-gray-600 mb-8">
      Enter your email and we will send a magic link to sign in
      </p>
    <CustomTextField label="Email" placeholder="Enter your email" />
    <CustomTextField label="Password" placeholder="Enter your password" />
    <AppCustomButton />
        <p className="text-sm text-gray-500 mt-12">
          If you have any questions, reach us at
          <span className="text-purple-500 cursor-pointer"> hello@dialogue.app</span>
          </p>
      </div>  
      <LoginScreenImage/>
      </div>
);
}