'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form'


interface VisitorAppointment {
    visitDate: Date,
    visitorsName: string,
    visitorInmateRelationship: string,
    visitDuration: Date,
    visitorsContact: string,
    visitPurpose: string
}

export default function VisitorAppointmentForm() {

    const {register, handleSubmit, formState: {errors}} = useForm<VisitorAppointment>();
    const [IsOpen, setIsOpen] = useState(false)


    const MakeVisitorAppointmentSubmit:SubmitHandler<VisitorAppointment> = (data:VisitorAppointment) => {
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

      <button  onClick={OpenDialogue} className="flex items-center space-x-1 px-4 py-2 bg-teal-700 rounded-xl outline-none hover:bg-fuchsia-600 cursor-pointer">
          <svg
            className="w-5 h-5 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z" />
            <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z" />
          </svg>  
          <p className="text-sm font-bold text-white">Log New Visit</p>
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
                    <form className='flex flex-col' onSubmit={handleSubmit(MakeVisitorAppointmentSubmit)}>
                        <header className="flex self-start border-b-2 border-neutral-500 grow-0">
                            <p className="text-slate-700 text-lg dk:text-xl font-semibold tracking-wider relative">Add Appointment</p>
                        </header>  
                        <div className='grid grid-cols-2 mt-4 gap-x-6 gap-y-8'>
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Visit Date</label>
                                <input {...register("visitDate", {required: true,})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="date" name="visitDate"/>
                                {
                                    errors && errors.visitDate?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }

                            </section>

                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Visitor{`'s`} Name</label>
                                <input {...register("visitorsName", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="visitorsName" id="" placeholder="Comfort Teckyi"/>
                                {
                                    errors && errors.visitorsName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.visitorsName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Relationship to Inmate</label>
                                <input {...register("visitorInmateRelationship", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="visitorInmateRelationship" id="" placeholder="Mother"/>
                                {
                                    errors && errors.visitorInmateRelationship?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.visitorInmateRelationship?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section>     
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor="">Visit Duration</label>
                                <input {...register("visitDuration", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="visitDuration" id="" placeholder="30 Minute"/>
                                {
                                    errors && errors.visitDuration?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.visitDuration?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Visitor{`'s`} Contact</label>
                                <input {...register("visitorsContact", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="visitorsContact" id="" placeholder="0033333333"/>
                                {
                                    errors && errors.visitorsContact?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.visitorsContact?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section>      
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Purpose of Visit</label>
                                <input {...register('visitPurpose', {required: true, minLength: 8})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="visitPurpose" id="" placeholder="Emotional Support"/>
                                    {
                                            errors && errors.visitPurpose?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
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