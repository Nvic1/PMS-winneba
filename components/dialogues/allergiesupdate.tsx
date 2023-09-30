'use client';

import {useForm, SubmitHandler, Controller} from 'react-hook-form'
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

interface Allergies {
  allergies: string,
}

export default function AllergiesUpdate() {

    const {register, handleSubmit, formState: {errors}} = useForm<Allergies>();
    const [IsOpen, setIsOpen] = useState(false)


    const MakeAllergyUpdate:SubmitHandler<Allergies> = (data:Allergies) => {
        console.log(data)
    }

    function CloseDialogue() {
      setIsOpen(false)
    }
  
    function OpenDialogue(){
      setIsOpen(true)
    }
  

    return (
        <>
   
        <button onClick={OpenDialogue} className="p-2 rounded-xl outline-none hover:bg-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-sky-500 hover:text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
        </button>

      <Transition appear show={IsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={CloseDialogue}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-sm bg-blue-400/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="absolute px-6 py-4 top-0 mt-32 transform overflow-hidden rounded-xl bg-white align-middle transition-all">

                  <form action="#" className='flex flex-col' onSubmit={handleSubmit(MakeAllergyUpdate)}>
                    <header className="flex self-start border-b-2 border-neutral-500 grow-0">
                        <p className="text-slate-700 text-lg dk:text-xl font-semibold tracking-wider relative">Allergy Form</p>
                    </header>  

                    <div className='grid grid-cols-3 mt-6'>

                        <section className="flex flex-col space-y-1.5 col-span-3">
                            <label className='text-sm text-slate-700 font-medium tracking-tight text-left' htmlFor="">Known Allergies <strong className='text-xs font-bold text-slate-400'>separate items using comma {`(,)`}</strong></label>
                            <textarea {...register("allergies", {required: true, minLength: 20})} name="allergies" id="" cols={60} rows={4} className="p-6 ring ring-slate-100 rounded-lg w-full outline-none resize-none border-none focus:ring-fuchsia-200" placeholder="Okro and Oil, Peanuts, Pets"></textarea>
                            {
                                errors && errors.allergies?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty </p>)
                            }
                            {
                                errors && errors.allergies?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length </p>)
                            }                            
                        </section>

                    </div>

                    <button className='flex self-start text-slate-100 px-4 py-2 rounded-xl bg-sky-700 outline-none mt-6 focus:ring focus:ring-cyan-800 focus:bg-sky-600'>Save Changes</button>

                  </form>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
    );
}