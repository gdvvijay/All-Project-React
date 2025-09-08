import Navbar from './components/Navbar';
import { FiSearch } from 'react-icons/fi';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclouse from './hooks/useDisclouse';
  import { ToastContainer, toast } from 'react-toastify';
import NotFoundContact from './components/NotFoundContact';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen,onClose,onOpen}=useDisclouse();
  const [searchValue,setSearchValue]=useState('');
  

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contacts');

        onSnapshot(contactsRef,(snapshot)=>{
           const contactsList = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        }).filter((contact)=>contact.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        setContacts(contactsList);

        return contactsList
        })

       
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, [searchValue]);

  
  return (
    <>
      <div className="mx-auto w-full max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex grow items-center">
          <FiSearch className="absolute ml-1 text-3xl text-white" />
          <input onChange={(e)=>{
            setSearchValue(e.target.value)
          }}
            type="text"
            className="h-10 grow rounded-md border border-white bg-transparent pl-9 text-white"
          />
        </div>

        <AiFillPlusCircle onClick={onOpen} className="cursor-pointer text-5xl text-white" />
      </div>
      <div className="mt-4 gap-3 flex flex-col">
        {
        contacts.length <=0 ? <NotFoundContact/> : contacts.map((contact)=>(
          <ContactCard key={contact.id} contact={contact}/>
        ))

        }
      </div>
    </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
       <ToastContainer position='bottom-center'/>
    </>
  );
}
