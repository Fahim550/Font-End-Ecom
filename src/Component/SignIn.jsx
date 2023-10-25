import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../auth/auth.config';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import Header from './shared/Header';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [username ,setUsername]=useState("");
    const [email ,setEmail]=useState("");
    const [password ,setPassword]=useState("");
    const [phonenumber,setPhonenumber]=useState("");
    const [address,setAddress]=useState("");

    const navigate=useNavigate();
    
    const [errorMsg,setErrorMsg]=useState("")
    const [successMsg,setSuccessMsg]=useState("")


    const handleSubmit=async(e)=>{
      e.preventDefault();
      await createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)

    addDoc(collection(db, "users"), {
        username:username,
        email:email,
        phonenumber:phonenumber,
        password:password,
        address:address,
        uid:user.uid,
      })      
      .then(()=>{
        setSuccessMsg('New User added successfully ,you will now be automaticlly redirected to login page')
        setUsername(''),
        setPhonenumber(''),
        setEmail(''),
        setPassword(''),
        // setErrorMsg(''),
        setTimeout(()=>{
            setSuccessMsg('');
            navigate("/login");
        
        },2000)
  })
  .catch((error)=>{setErrorMsg(error.message)})

  })
  .catch((error) => {
    if (error.message=='Firebase:Error (auth/invalid-email).')
    {
        setErrorMsg('please fill all required fields')
    }
    if(error.message=='Firebase:Error (auth/email-already-in-use).')
    {
        setErrorMsg('User already exist')
    }
  });
    }
  return (
   
    <div >
      <Header/>
      <div className='flex justify-center  '>
        <div className="flex flex-col  max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-400">Sign in to access your account</p>
	</div>
	<form  action="" onSubmit={handleSubmit} className="space-y-12">
    {
                    successMsg&&<>
                    <div className="flex w-100 justify-center bg-slate-200 p-2.5 rounded-md text-lime-400">
                        {successMsg}
                        </div></>
                }
		<div className="space-y-4">
            <div>
				<label className="block mb-2 text-sm">Your Name</label>
				<input  onChange={(e)=>setUsername(e.target.value)} type="text" name="name" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
            <div>
				<label className="block mb-2 text-sm">Email</label>
				<input  onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
            <div>
				<label className="block mb-2 text-sm">Mobile Number</label>
				<input  onChange={(e)=>setPhonenumber(e.target.value)} type="number" name="number" id="number" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
            <div>
				<div className="flex justify-between mb-2">
					<label  className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
				</div>
				<input  onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<label className="block mb-2 text-sm">Address</label>
				<input  onChange={(e)=>setAddress(e.target.value)} type="text" name="address" id="address" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign Up</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<Link rel="noopener noreferrer" to='/login' className="hover:underline dark:text-violet-400">Sign In</Link>.
			</p>
		</div>
	</form>
</div>
</div>
    </div>
    
  )
}
