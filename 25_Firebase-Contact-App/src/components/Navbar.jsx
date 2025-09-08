import firebaseLogo from '../assets/Screen/logos_firebase.svg'

export default function Navbar() {
  return <div className="h-[60px] my-4 gap-2 text-xl font-medium  bg-white rounded-lg flex justify-center items-center ">
   
      <img src={firebaseLogo} alt="firebase logo" />
      <h1>Firebase Contact App</h1>
  </div>
}
