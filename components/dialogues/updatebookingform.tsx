'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form'


interface BookingInfo {

    blockAssignment: string,
    inmateID: string,
    custodialStatus: string,
}


export default function BookingInfoUpdateForm() {

    const {register, handleSubmit, formState: {errors}} = useForm<BookingInfo>();
    const [IsOpen, setIsOpen] = useState(false)


    const MakeBookingInfoUpdate:SubmitHandler<BookingInfo> = (data:BookingInfo) => {
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
        <button onClick={OpenDialogue}  className="flex items-center space-x-1 px-4 py-2 bg-slate-700 rounded-xl outline-none hover:bg-fuchsia-600 cursor-pointer">
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          <p className="text-sm font-medium text-white">update</p>
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
                <Dialog.Panel className="absolute px-6 py-4 transform overflow-hidden rounded-xl bg-white align-middle transition-all">
                    <form className='flex flex-col' onSubmit={handleSubmit(MakeBookingInfoUpdate)}>
                        <header className="flex self-start border-b-2 border-neutral-500 grow-0">
                            <p className="text-slate-700 text-lg dk:text-xl font-semibold tracking-wider relative">Update Booking Information</p>
                        </header>  
                        <div className='grid grid-cols-2 mt-4 gap-x-6 gap-y-8'>
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Block Assignment</label>
                                <input placeholder='Block D' {...register("blockAssignment", {required: true,})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="blockAssignment"/>
                                {
                                    errors && errors.blockAssignment?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }

                            </section>

                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Inmate ID</label>
                                <input {...register("inmateID", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="inmateID" id="" placeholder="WIN-CK40"/>
                                {
                                    errors && errors.inmateID?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.inmateID?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor="">Custodial Status</label>
                                <input {...register("custodialStatus", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="custodialStatus" id="" placeholder="Serving a sentence"/>
                                {
                                    errors && errors.custodialStatus?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.custodialStatus?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
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
  )
}