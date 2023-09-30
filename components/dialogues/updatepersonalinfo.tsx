'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form'
import { RegFields } from '@/components/interfaces/RegisterFormInputs';
import SelectDropdown from '@/components/disclosures/select-dropdown';




export default function UpdatePersonalData() {

  let [IsOpen, setIsOpen] = useState(false)
  const {control, register, formState: {errors}, handleSubmit} = useForm<RegFields>();

  

    const MakePersonaldataUpdate:SubmitHandler<RegFields> = (data: RegFields) => {
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
    
        <button onClick={OpenDialogue} className='flex px-3 py-2 bg-cyan-700 rounded-xl items-center space-x-1'>
            <span className="outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </span>
            <span className="text-sm text-white font-semibold">Update</span>
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
                <Dialog.Panel className="h-4/5 absolute top-0 mt-20 transform overflow-hidden rounded-xl align-middle transition-all bg-white overflow-y-auto">
                    <section className="flex flex-col px-6 py-8 space-y-6">
                        <header className="flex self-start border-b-2 border-neutral-500 grow-0">
                            <p className="text-slate-700 text-lg dk:text-xl font-semibold tracking-wider relative">Personal Information</p>
                        </header> 

                        <form onSubmit={handleSubmit(MakePersonaldataUpdate)} action="#" className='flex flex-col space-y-8'>
                            <div className="grid grid-cols-3 gap-x-6 gap-y-6">
                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor="">First Name</label>
                                    <input {...register("firstName", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="firstName" id="" placeholder="John"/>
                                    {
                                        errors && errors.firstName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.firstName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                                    }
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight text-left' htmlFor="">Middle Name</label>
                                    <input {...register("middleName", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="middleName" id="" placeholder="Aaron"/>
                                    {
                                        errors && errors.middleName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.middleName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                                    }
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Last Name</label>
                                    <input {...register("lastName", {required: true, minLength:4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="lastName" id="" placeholder="Ayarle"/>
                                    {
                                        errors && errors.lastName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.lastName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                                    }                            
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Photo</label>
                                    <input {...register('personalPhoto', {required: true})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="file" name="personalPhoto" id="" placeholder="Pick Photo"/>

                                    {
                                        errors && errors.personalPhoto?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }

                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Age</label>
                                    <input {...register('age', {valueAsNumber:true, required: true, validate: (value, formValue) => value >= 18})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="number" name="age" id="" placeholder="53"/>
                                    {
                                        errors && errors.age?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.age?.type === "validate" && ( <p className="text-left text-sm text-normal text-rose-600">improper input</p>)
                                    }  
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Educational Level</label>
                                    <Controller
                                        control={control}
                                        name="educationalLevel"
                                        defaultValue="Secondary"
                                        render={({ field: {onChange, value} }) => (
                                        <SelectDropdown
                                            onChange={onChange}
                                            value={value}
                                            list={['Primary', 'Secondary', 'Tertiary']}
                                        />
                                        )}
                                    />                            
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Occupation</label>
                                    <input {...register("occupation", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="occupation" id="" placeholder="Fisherman"/>
                                    {
                                        errors && errors.occupation?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.occupation?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                                    }
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Contact</label>
                                    <input {...register("contact", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="contact" id="" placeholder="0292293203"/>
                                    {
                                        errors && errors.contact?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.contact?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                                    }
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Date of Birth</label>
                                    <input {...register('dateofBirth', {valueAsDate: true, required: true})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="date" name="dateofBirth" id="" placeholder=""/>
                                    {
                                            errors && errors.dateofBirth?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }  
                                </section>
                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Religion</label>
                                    <Controller
                                        control={control}
                                        name="religion"
                                        defaultValue="Christianity"
                                        render={({ field: {onChange, value} }) => (
                                        <SelectDropdown
                                            onChange={onChange}
                                            value={value}
                                            list={['Christianity', 'Islamic', 'Traditionalist']}
                                        />
                                        )}
                                    />                             
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Gender</label>

                                    <Controller
                                        control={control}
                                        name="gender"
                                        defaultValue="Female"
                                        render={({ field: {onChange, value} }) => (
                                        <SelectDropdown
                                            onChange={onChange}
                                            value={value}
                                            list={['Male', 'Female', 'Binary']}
                                        />
                                        )}
                                    /> 

                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Marital Status</label>
                                    <Controller
                                        control={control}
                                        defaultValue="Divorced"
                                        name="maritalStatus"
                                        render={({ field: {onChange, value} }) => (
                                        <SelectDropdown
                                            onChange={onChange}
                                            value={value}
                                            list={['Married', 'Divorced', 'Single']}
                                        />
                                        )}
                                    /> 
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Nationality</label>
                                    <Controller
                                        control={control}
                                        name="nationality"
                                        defaultValue="Ghanaian"
                                        render={({ field: {onChange, value} }) => (
                                        <SelectDropdown
                                            onChange={onChange}
                                            value={value}
                                            list={['Ghanaian', 'Nigerian', 'Togo']}
                                        />
                                        )}
                                    /> 
                                </section>



                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">City/Town</label>
                                    <input {...register("cityTown", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="cityTown" id="" placeholder="Katamanso"/>
                                    {
                                        errors && errors.cityTown?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.cityTown?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                                    }
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">District</label>
                                    <input {...register("district", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="district" id="" placeholder="Ashaiman"/>
                                    {
                                        errors && errors.district?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.district?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                                    }
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Landmark</label>
                                    <input {...register("landMark", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="landMark" id="" placeholder="Aviator Zone 2"/>
                                    {
                                        errors && errors.landMark?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.landMark?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                                    }
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">National ID</label>
                                    <input {...register("nationalID", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="nationalID" id="" placeholder="GHA-0232-20343"/>
                                    {
                                        errors && errors.nationalID?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.nationalID?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                                    }
                                    
                                </section>
                                
                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Height(cm)</label>
                                    <input {...register('height', {valueAsNumber: true, required: true, validate: (value, formValue) => value >= 100})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="number" name="height" id="" placeholder="112"/>
                                    {
                                        errors && errors.height?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.height?.type === "validate" && ( <p className="text-left text-sm text-normal text-rose-600">improper input</p>)
                                    } 
                                </section>  

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Weight(kg)</label>
                                    <input {...register('weight', {valueAsNumber: true, required: true, validate: (value, formValue) => value >= 40})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="number" name="weight" id="" placeholder="70"/>
                                    {
                                        errors && errors.weight?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }
                                    {
                                        errors && errors.weight?.type === "validate" && ( <p className="text-left text-sm text-normal text-rose-600">improper input</p>)
                                    }                             
                                </section> 
                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Eye Color </label>
                                    <input {...register('eyeColor', {required: true, minLength: 3})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="eyeColor" id="" placeholder="Brown"/>
                                    {
                                            errors && errors.eyeColor?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.eyeColor?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                        

                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Hair Color </label>
                                <input {...register('hairColor', {required: true, minLength: 3})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="hairColor" id="" placeholder="Black"/>
                                    {
                                            errors && errors.hairColor?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.hairColor?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                         
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Skin Tone </label>
                                <input {...register('skinTone', {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="skinTone" id="" placeholder="Fair, Dark"/>
                                    {
                                            errors && errors.skinTone?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.skinTone?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                            
                            </section> 

                            <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Eyebrow Length</label>
                                    <Controller
                                        control={control}
                                        name="eyebrowLength"
                                        defaultValue="Long"
                                        render={({ field: {onChange, value} }) => (
                                        <SelectDropdown
                                            onChange={onChange}
                                            value={value}
                                            list={['Long', 'Short']}
                                        />
                                        )}
                                    />                            
                            </section>
                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Body Stature</label>
                                    <Controller
                                        control={control}
                                        name="bodyStature"
                                        defaultValue="Slim"
                                        render={({ field: {onChange, value} }) => (
                                        <SelectDropdown
                                            onChange={onChange}
                                            value={value}
                                            list={['Fat', 'Slim', 'Normal']}
                                        />
                                        )}
                                    />                            
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Nose Type</label>
                                    <Controller
                                        control={control}
                                        name="noseType"
                                        defaultValue="Pointed"
                                        render={({ field: {onChange, value} }) => (
                                        <SelectDropdown
                                            onChange={onChange}
                                            value={value}
                                            list={['Flat', 'Pointed', 'Normal']}
                                        />
                                        )}
                                    />                            
                                </section>

                                <section className="flex flex-col space-y-1">
                                    <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Eye Size</label>
                                    <Controller
                                        control={control}
                                        name="eyeSize"
                                        defaultValue="Small"
                                        render={({ field: {onChange, value} }) => (
                                        <SelectDropdown
                                            onChange={onChange}
                                            value={value}
                                            list={['Small', 'Large', 'Normal']}
                                        />
                                        )}
                                    />                            
                                </section>

                            <section className="flex flex-col space-y-1 col-span-2">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Personal Belonging</label>
                                <input {...register("personalBelongings", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="personalBelongings" id="" placeholder="Watch, Bag, 500GHS, Car Keys"/>
                                    {
                                            errors && errors.personalBelongings?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.personalBelongings?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                            
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">House Number</label>
                                <input {...register("houseNumber", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="houseNumber" id="" placeholder="SK 255"/>
                                    {
                                            errors && errors.houseNumber?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.houseNumber?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                            
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Digital Address</label>
                                <input {...register("digitalAddress", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="digitalAddress" id="" placeholder="GA-033-222"/>
                                    {
                                            errors && errors.digitalAddress?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.digitalAddress?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                            
                            </section>      

                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Mother{`'s`} Contact</label>
                                <input {...register("mothersContact", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="mothersContact" id="" placeholder="03333344444"/>
                                    {
                                            errors && errors.mothersContact?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.mothersContact?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                            
                            </section>           
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Spouse Contact</label>
                                <input {...register("spouseContact", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="spouseContact" id="" placeholder="03333344444"/>
                                    {
                                            errors && errors.spouseContact?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.spouseContact?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                            
                            </section>                          
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Spouse Name</label>
                                <input {...register("spouseName", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="spouseName" id="" placeholder="Margret Asiamah"/>
                                    {
                                            errors && errors.spouseName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.spouseName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                            
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">Father{'s'} Contact</label>
                                <input {...register("fathersContact", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="fathersContact" id="" placeholder="03333344444"/>
                                    {
                                            errors && errors.fathersContact?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.fathersContact?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                            
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">No. Siblings</label>
                                <input {...register("noSiblings", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="number" name="noSiblings" id="" placeholder="5"/>
                                    {
                                            errors && errors.noSiblings?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.noSiblings?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                            
                            </section> 
                            <section className="flex flex-col space-y-1">
                                <label className='text-sm text-slate-600 font-medium text-left tracking-tight' htmlFor="">House Number</label>
                                <input {...register("tatooDescription", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="tatooDescription" id="" placeholder="Dragon with cross upside down"/>
                                    {
                                            errors && errors.tatooDescription?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                    }                        
                                    {
                                            errors && errors.tatooDescription?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                                    }                            
                            </section> 

                            
                            </div>

                            <button className='flex self-end px-4 py-2 rounded-lg outline-none bg-cyan-700 text-slate-100 font-bold focus:bg-cyan-500 focus:ring-2 focus:ring-sky-700'>Save Changes</button>
                        </form>
                    </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}