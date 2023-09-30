'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form'


interface LegalInformation {
    admissionDate: Date,
    arrestingAgency: string,
    arrestingOfficer: string,
    attorneysName: string,
    courtCaseNumbers: string,
    chargesFiled: string,
    sentense: number
}

export default function LegalinfoUpdate() {

    const {register, handleSubmit, formState: {errors}} = useForm<LegalInformation>();
    const [IsOpen, setIsOpen] = useState(false)


    const MakeLegalUpdate:SubmitHandler<LegalInformation> = (data:LegalInformation) => {
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
    

        <button onClick={OpenDialogue} className="flex items-center space-x-1 px-4 py-2 bg-slate-700 rounded-xl outline-none hover:bg-fuchsia-600 cursor-pointer">
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
                    <form className='flex flex-col' onSubmit={handleSubmit(MakeLegalUpdate)}>
                        <header className="flex self-start border-b-2 border-neutral-500 grow-0">
                            <p className="text-slate-700 text-lg dk:text-xl font-semibold tracking-wider relative">Update Legal Information</p>
                        </header>  
                        <div className='grid grid-cols-2 mt-4 gap-x-6 gap-y-8'>
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 text-left font-medium tracking-tight text-left' htmlFor=""> Admisstion Date</label>
                                <input {...register("admissionDate", {required: true,})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="date" name="admissionDate"/>
                                {
                                    errors && errors.admissionDate?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                                }

                            </section>

                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 text-left font-medium tracking-tight text-left' htmlFor=""> Arresting Agency</label>
                                <input {...register("arrestingAgency", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="arrestingAgency" id="" placeholder="Ashaiman Police Station"/>
                                {
                                    errors && errors.arrestingAgency?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                                }
                                {
                                    errors && errors.arrestingAgency?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 text-left font-medium tracking-tight text-left' htmlFor=""> Arresting Officer</label>
                                <input {...register("arrestingOfficer", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="arrestingOfficer" id="" placeholder="Seargent Nii Okale"/>
                                {
                                    errors && errors.arrestingOfficer?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                                }
                                {
                                    errors && errors.arrestingOfficer?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section>     
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 text-left font-medium tracking-tight text-left' htmlFor=""> Attorney{`'s`} Name</label>
                                <input {...register("attorneysName", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="attorneysName" id="" placeholder="Dr Nana Kwame"/>
                                {
                                    errors && errors.attorneysName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                                }
                                {
                                    errors && errors.attorneysName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 text-left font-medium tracking-tight text-left' htmlFor=""> Court Case Numbers</label>
                                <input {...register("courtCaseNumbers", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="courtCaseNumbers" id="" placeholder="case #2022-002, case #2004-022"/>
                                {
                                    errors && errors.courtCaseNumbers?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                                }
                                {
                                    errors && errors.courtCaseNumbers?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section>      
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 text-left font-medium tracking-tight' htmlFor="">Charges Filed</label>
                                <input {...register('chargesFiled', {required: true, minLength: 8})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="chargesFiled" id="" placeholder="Rape, Theft"/>
                                    {
                                            errors && errors.chargesFiled?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                                    }       
                                    {
                                            errors && errors.chargesFiled?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid input length</p>)
                                    }                    
                                
                            </section>  
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 text-left font-medium tracking-tight' htmlFor="">Age</label>
                                <input {...register('sentence', {valueAsNumber:true, required: true, validate: (value, formValue) => value >= 1})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="number" name="sentence" id="" placeholder="3"/>
                                {
                                    errors && errors.sentence?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                                }
                                {
                                    errors && errors.sentence?.type === "validate" && ( <p className="text-left text-sm text-normal text-rose-600">improper input</p>)
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