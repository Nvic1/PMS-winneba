'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form'

interface DisciplinaryActions {

    dateofIncident: Date,
    incidentType: string,
    incidentDetails: string,
    witnesses: string,
    actionsTaken: string,
    hearingDate: Date,
    hearingOfficer: string,
    inmateStatement: string,
    investigationOutcome: string,

}

export default function DisciplinaryActionsForm() {

    const {register, handleSubmit, formState: {errors}} = useForm<DisciplinaryActions>();
    const [IsOpen, setIsOpen] = useState(false)


    const DisciplinaryactionFormsubmit:SubmitHandler<DisciplinaryActions> = (data:DisciplinaryActions) => {
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

        <button onClick={OpenDialogue} className="flex items-center space-x-1 px-4 py-2 bg-sky-700 rounded-xl outline-none hover:bg-fuchsia-800 cursor-pointer">
          <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
            <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
            <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
          </svg>

          <p className="text-sm font-bold text-white">New Disciplinary Report</p>
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
                <Dialog.Panel className="absolute px-6 py-4 transform overflow-hidden rounded-xl bg-white align-middle transition-all h-4/5 overflow-y-auto">
                    <form className='flex flex-col' onSubmit={handleSubmit(DisciplinaryactionFormsubmit)}>
                        <header className="flex self-start border-b-2 border-neutral-500 grow-0">
                            <p className="text-slate-700 text-lg dk:text-xl font-semibold tracking-wider relative">Log Disciplinary Report</p>
                        </header>  
                        <div className='grid grid-cols-3 mt-8 gap-x-6 gap-y-8'>
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Date of Incident</label>
                                <input {...register("dateofIncident", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="date" name="dateofIncident" id=""/>
                                {
                                    errors && errors.dateofIncident?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">date is required</p>)
                                }
 
                            </section>

                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Incident Type</label>
                                <input {...register("incidentType", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="incidentType" id="" placeholder="Disobeying Direct Orders"/>
                                {
                                    errors && errors.incidentType?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.incidentType?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Hearing Date</label>
                                <input {...register('hearingDate', {required: true})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="date" name="hearingDate" id="" placeholder=""/>
                                    {
                                            errors && errors.hearingDate?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">date is required</p>)
                                    }       
                                                                      
                                
                            </section> 
                            <section className="flex flex-col space-y-1 col-span-2">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor=""> Witnesses</label>
                                <input {...register("witnesses", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="witnesses" id="" placeholder="Officer Williams, Officer Brown"/>
                                {
                                    errors && errors.witnesses?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.witnesses?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                            </section> 
     
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Hearing Officer</label>
                                <input {...register('hearingOfficer', {required: true, minLength:4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="hearingOfficer" id="" placeholder="Lieutenant John Parkor"/>
                                    {
                                            errors && errors.hearingOfficer?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }       
                                    {
                                        errors && errors.hearingOfficer?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid input length</p>)
                                    }                                                                      
                                
                            </section> 
                            <section className="flex flex-col space-y-1.5 col-span-3">
                                <label className='text-sm text-slate-700 font-medium tracking-tight text-left' htmlFor="">Incident Details</label>
                                <textarea {...register("incidentDetails", {required: true, minLength: 12})} name="incidentDetails" id="" cols={1} rows={1} className="p-6 ring ring-slate-100 rounded-lg w-full outline-none resize-none border-none focus:ring-fuchsia-200" placeholder="Inmate refused to comply with orders to return to their cell during a lockdown."></textarea>
                                {
                                    errors && errors.incidentDetails?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required </p>)
                                }
                                {
                                    errors && errors.incidentDetails?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length </p>)
                                }                            
                            </section>  
                            <section className="flex flex-col space-y-1.5 col-span-3">
                                <label className='text-sm text-slate-700 font-medium tracking-tight text-left' htmlFor="">Investigation Outcome</label>
                                <textarea {...register("investigationOutcome", {required: true, minLength: 12})} name="investigationOutcome" id="" cols={1} rows={1} className="p-6 ring ring-slate-100 rounded-lg w-full outline-none resize-none border-none focus:ring-fuchsia-200" placeholder="Inmate's explanation was accepted as a misunderstanding, warning issued"></textarea>
                                {
                                    errors && errors.investigationOutcome?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required </p>)
                                }
                                {
                                    errors && errors.investigationOutcome?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length </p>)
                                }                            
                            </section>  
                            <section className="flex flex-col space-y-1.5 col-span-3">
                                <label className='text-sm text-slate-700 font-medium tracking-tight text-left' htmlFor="">Inmate Statement</label>
                                <textarea {...register("inmateStatement", {required: true, minLength: 12})} name="inmateStatement" id="" cols={10} rows={1} className="p-6 ring ring-slate-100 rounded-lg w-full outline-none resize-none border-none focus:ring-fuchsia-200" placeholder="Acknowledged the refusal but claimed misunderstanding"></textarea>
                                {
                                    errors && errors.inmateStatement?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required </p>)
                                }
                                {
                                    errors && errors.inmateStatement?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length </p>)
                                }                            
                            </section>     
                            <section className="flex flex-col space-y-1.5 col-span-3">
                                <label className='text-sm text-slate-700 font-medium tracking-tight text-left' htmlFor="">Action Taken</label>
                                <textarea {...register("actionsTaken", {required: true, minLength: 12})} name="actionsTaken" id="" cols={1} rows={1} className="p-6 ring ring-slate-100 rounded-lg w-full outline-none resize-none border-none focus:ring-fuchsia-200 truncate" placeholder="Loss of recreation privileges for 30 days, written warning, counseling referral"></textarea>
                                {
                                    errors && errors.actionsTaken?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required </p>)
                                }
                                {
                                    errors && errors.actionsTaken?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length </p>)
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