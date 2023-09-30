'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form'

interface Medications {
    medicationName: string,
    medicationType: string,
    medicationFrequency: string,
    medicationDosage: string,
    medicationFor: string,
    date: Date
}

export default function AddMedications() {

    const {register, handleSubmit, formState: {errors}} = useForm<Medications>();
    const [IsOpen, setIsOpen] = useState(false)


    const MakeMedicationsformSubmit:SubmitHandler<Medications> = (data:Medications) => {
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
    
        <button onClick={OpenDialogue} className='flex items-center space-x-1 px-3 py-1.5 bg-sky-500 rounded-xl outline-none hover:bg-fuchsia-600'>
            <span>
              <svg className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M112 48c53 0 96 43 96 96V256H16V144c0-53 43-96 96-96zM16 368V272H208v96c0 53-43 96-96 96s-96-43-96-96zM0 144V368c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112S0 82.1 0 144zM416 464c-79.5 0-144-64.5-144-144c0-36.9 13.9-70.5 36.7-96L512 427.3c-25.5 22.8-59.1 36.7-96 36.7zM320 212.7c25.5-22.8 59.1-36.7 96-36.7c79.5 0 144 64.5 144 144c0 36.9-13.9 70.5-36.7 96L320 212.7zM416 480a160 160 0 1 0 0-320 160 160 0 1 0 0 320z"/></svg>
            </span>
              <p className="text-sm font-bold text-white stroke-2">New Medication</p>
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
                    <form className='flex flex-col' onSubmit={handleSubmit(MakeMedicationsformSubmit)}>
                        <header className="flex self-start border-b-2 border-neutral-500 grow-0">
                            <p className="text-slate-700 text-lg dk:text-xl font-semibold tracking-wider relative">Add Medications</p>
                        </header>  
                        <div className='grid grid-cols-2 mt-4 gap-x-6 gap-y-8'>
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Name</label>
                                <input {...register("medicationName", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="medicationName" id="" placeholder="Albuterol Inhaler"/>
                                {
                                    errors && errors.medicationName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.medicationName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section>

                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Type</label>
                                <input {...register("medicationType", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="medicationType" id="" placeholder="Prescription Medication"/>
                                {
                                    errors && errors.medicationType?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.medicationType?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Frequency</label>
                                <input {...register("medicationFrequency", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="medicationFrequency" id="" placeholder="Once Daily"/>
                                {
                                    errors && errors.medicationFrequency?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.medicationFrequency?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section>     
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Dosage</label>
                                <input {...register("medicationDosage", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="medicationDosage" id="" placeholder="50 mg"/>
                                {
                                    errors && errors.medicationDosage?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.medicationDosage?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Prescribed For</label>
                                <input {...register("medicationFor", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="medicationFor" id="" placeholder="Asthma"/>
                                {
                                    errors && errors.medicationFor?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.medicationFor?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section>      
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Date</label>
                                <input {...register('date', {valueAsDate: true, required: true})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="date" name="admissionDate" id="" placeholder=""/>
                                    {
                                            errors && errors.date?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">date is required</p>)
                                    }       
                                    {
                                            errors && errors.date?.type === "valueAsDate" && ( <p className="text-left text-sm text-normal text-rose-600">invalid date</p>)
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