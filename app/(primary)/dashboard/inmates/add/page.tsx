'use client';


import SelectDropdown from '@/components/disclosures/select-dropdown';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import { RegFields } from '@/components/interfaces/RegisterFormInputs';
import AxiosFetch  from '@/api/laravelapi';





export default function AddNewInmate() {

    const {control, register, formState: {errors}, handleSubmit } = useForm<RegFields>();


    const RegisterInmate:SubmitHandler<RegFields> = async (data:RegFields) => {
        const token = localStorage.getItem('token')
        // console.log(token)
        const response = await AxiosFetch("POST", "write", data, token);

    }

    return (
        <main className='flex flex-col overflow-y-auto h-full ml-12'>
            <form onSubmit={handleSubmit(RegisterInmate)} className="flex relative flex-col border rounded-lg border-indigo-50 bg-addInmate px-6 pb-6">

                <div className="w-52 border-b-2 border-neutral-500 p-1 grow-0 mt-2">
                    <p className="text-slate-700 text-xl font-semibold">Personal Information</p>
                </div>


                <div className="pt-6">

                    <div className="grid grid-cols-5 gap-x-6 gap-y-6">

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">First Name</label>
                            <input {...register("firstName", {required: true, minLength: 4})}  className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="firstName" id="" placeholder="John"/>
                            {
                                errors && errors.firstName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.firstName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Middle Name</label>
                            <input {...register("middleName", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold  text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="middleName" id="" placeholder="Simon"/>
                            {
                                errors && errors.middleName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.middleName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Last Name</label>
                            <input {...register("lastName", {required: true, minLength:4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="lastName" id="" placeholder="Ayarle"/>
                            {
                                errors && errors.lastName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.lastName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }                            
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Photo</label>
                            <input {...register('personalPhoto', {required: true})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="file" name="personalPhoto" id="" placeholder="Pick Photo"/>

                            {
                                errors && errors.personalPhoto?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }

                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Age</label>
                            <input {...register('age', {valueAsNumber:true, required: true, validate: (value, formValue) => value >= 18})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="number" name="age" id="" placeholder="53"/>
                            {
                                errors && errors.age?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.age?.type === "validate" && ( <p className="text-left text-sm text-normal text-rose-600">improper input</p>)
                            }  
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Educational Level</label>
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
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Occupation</label>
                            <input {...register("occupation", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="occupation" id="" placeholder="Fisherman"/>
                            {
                                errors && errors.occupation?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.occupation?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Contact</label>
                            <input {...register("contact", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="contact" id="" placeholder="0292293203"/>
                            {
                                errors && errors.contact?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.contact?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Date of Birth</label>
                            <input {...register('dateofBirth', {valueAsDate: true, required: true})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="date" name="dateofBirth" id="" placeholder=""/>
                            {
                                    errors && errors.dateofBirth?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }  
                        </section>
                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Religion</label>
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
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Gender</label>

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
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Marital Status</label>
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
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Nationality</label>
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
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">City/Town</label>
                            <input {...register("cityTown", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="cityTown" id="" placeholder="Katamanso"/>
                            {
                                errors && errors.cityTown?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.cityTown?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">District</label>
                            <input {...register("district", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="district" id="" placeholder="Ashaiman"/>
                            {
                                errors && errors.district?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.district?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Landmark</label>
                            <input {...register("landMark", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="landMark" id="" placeholder="Aviator Zone 2"/>
                            {
                                errors && errors.landMark?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.landMark?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>
                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">House Number</label>
                            <input {...register("houseNumber", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="houseNumber" id="" placeholder="Aviator Zone 2"/>
                            {
                                errors && errors.houseNumber?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.houseNumber?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>
                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Digital Address</label>
                            <input {...register("digitalAddress", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="digitalAddress" id="" placeholder="Aviator Zone 2"/>
                            {
                                errors && errors.digitalAddress?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.digitalAddress?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                        </section>
                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">National ID</label>
                            <input {...register("nationalID", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="nationalID" id="" placeholder="GHA-0232-20343"/>
                            {
                                errors && errors.nationalID?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.nationalID?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 8 characters</p>)
                            }
                            
                        </section>
                        
                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Height(cm)</label>
                            <input {...register('height', {valueAsNumber: true, required: true, validate: (value, formValue) => value >= 100})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="number" name="height" id="" placeholder="112"/>
                            {
                                errors && errors.height?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.height?.type === "validate" && ( <p className="text-left text-sm text-normal text-rose-600">improper input</p>)
                            } 
                        </section>  

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Weight(kg)</label>
                            <input {...register('weight', {valueAsNumber: true, required: true, validate: (value, formValue) => value >= 40})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="number" name="weight" id="" placeholder="70"/>
                            {
                                errors && errors.weight?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }
                            {
                                errors && errors.weight?.type === "validate" && ( <p className="text-left text-sm text-normal text-rose-600">improper input</p>)
                            }                             
                        </section> 
                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Eye Color </label>
                            <input {...register('eyeColor', {required: true, minLength: 3})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="eyeColor" id="" placeholder="Brown"/>
                            {
                                    errors && errors.eyeColor?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.eyeColor?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                        

                    </section> 
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Hair Color </label>
                        <input {...register('hairColor', {required: true, minLength: 3})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="hairColor" id="" placeholder="Black"/>
                            {
                                    errors && errors.hairColor?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.hairColor?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                         
                    </section> 
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Skin Tone </label>
                        <input {...register('skinTone', {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="skinTone" id="" placeholder="Fair, Dark"/>
                            {
                                    errors && errors.skinTone?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.skinTone?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                            
                    </section> 
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Tatoo Description </label>
                        <input {...register('tatooDescription', {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="tatooDescription" id="" placeholder="Dragon Fire"/>
                            {
                                    errors && errors.tatooDescription?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.tatooDescription?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                            
                    </section> 
                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Eye Size</label>
                            <Controller
                                control={control}
                                name="eyeSize"
                                defaultValue="Small"
                                render={({ field: {onChange, value} }) => (
                                <SelectDropdown
                                    onChange={onChange}
                                    value={value}
                                    list={['Small', 'Medium', 'Large']}
                                />
                                )}
                            /> 
                        </section>
                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Nose Type</label>
                            <Controller
                                control={control}
                                name="noseType"
                                defaultValue="Small"
                                render={({ field: {onChange, value} }) => (
                                <SelectDropdown
                                    onChange={onChange}
                                    value={value}
                                    list={['Small', 'Medium', 'Large']}
                                />
                                )}
                            /> 
                        </section>

                    <section className="flex flex-col space-y-1 col-span-3">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Personal Belonging</label>
                        <input {...register("personalBelongings", {required: true, minLength: 4})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="personalBelongings" id="" placeholder="Watch, Bag, 500GHS, Car Keys"/>
                            {
                                    errors && errors.personalBelongings?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.personalBelongings?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                            
                    </section> 

                    </div>


                <div className="mt-10 w-52 border-b-2 border-neutral-500 p-1 grow-0">
                    <p className="text-slate-700 text-xl font-semibold">Booking Information</p>
                </div>


                <div className="grid grid-cols-5 dk:grid-cols-5 gap-x-6 gap-y-6 pt-6">

                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Inmate ID</label>
                        <input {...register('inmateID', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="inmateID" id="" placeholder="WIN-P-2023-001"/>
                            {
                                    errors && errors.inmateID?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.inmateID?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            } 
                    </section> 
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Cell Block Assignment </label>
                        <input {...register('cellAssignment', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="cellAssignment" id="" placeholder="Block 4"/>
                            {
                                    errors && errors.cellAssignment?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.cellAssignment?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                         
                    </section> 
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Security Classification</label>
                        <input {...register('securityClassification', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="securityClassification" id="" placeholder="Minimum, Medium, Maximum, SuperMax or None"/>
                            {
                                    errors && errors.securityClassification?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.securityClassification?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                         
                    </section> 
                    <section className="flex flex-col space-y-1 col-span-2">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Custodial Status</label>
                        <input {...register('custodialStatus', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400 tracking-tighter" type="text" name="custodialStatus" id="" placeholder="Serving a sentence, Awaiting trial, pretrial detention or None"/>
                            {
                                    errors && errors.custodialStatus?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.custodialStatus?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                         
                    </section> 
                
                </div>

                <div className="mt-10 w-44 border-b-2 border-neutral-500 p-1 grow-0">
                    <p className="text-slate-700 text-xl font-semibold">Legal Information</p>
                </div>

                <div className="grid grid-cols-5 dk:grid-cols-5 gap-x-6 gap-y-6 pt-6">

                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Date of Admission</label>
                        <input {...register('admissionDate', {valueAsDate: true, required: true})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="date" name="admissionDate" id="" placeholder=""/>
                            {
                                    errors && errors.admissionDate?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                          
                    </section>  

                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Arresting Agency</label>
                        <input {...register('arrestingAgency', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="arrestingAgency" id="" placeholder="Ashaiman Police Station"/>
                            {
                                    errors && errors.arrestingAgency?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.arrestingAgency?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                          
                    </section> 

                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Arresting Officer</label>
                        <input {...register('arrestingOfficer', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="arrestingOfficer" id="" placeholder="Madame Yaa Opoku"/>
                            {
                                    errors && errors.arrestingOfficer?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.arrestingOfficer?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                         
                    </section> 

                    <section className="flex flex-col space-y-1 col-span-2">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Charges Filed</label>
                        <input {...register('chargesFiled', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="chargesFiled" id="" placeholder="Rape, Trafficking, Theft or None"/>
                            {
                                    errors && errors.chargesFiled?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.chargesFiled?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                            
                    </section>  
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Sentence {` (years)`}</label>
                        <input {...register('sentence', {required: true, valueAsNumber:true, validate: (value) => value >= 1})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="number" name="sentence" id="" min={1} placeholder="2"/>
                            {
                                    errors && errors.sentence?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.sentence?.type === "validate" && ( <p className="text-left text-sm text-normal text-rose-600">improper input</p>)
                            }                            
                    </section> 
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Court Case Numbers</label>
                        <input {...register('caseNumbers', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="caseNumbers" id="" placeholder="Case #2023-6789, Case #2023-9876 or None"/>
                            {
                                    errors && errors.caseNumbers?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.caseNumbers?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                            
                    </section>  
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Attorney's Name</label>
                        <input {...register('attorneyName', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="attorneyName" id="" placeholder="Dr Peter Atimpoku"/>
                            {
                                    errors && errors.attorneyName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.attorneyName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                            
                    </section>  
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Attorney's Contact</label>
                        <input {...register('attorneyContact', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="attorneyContact" id="" placeholder="0209912345"/>
                            {
                                    errors && errors.attorneyContact?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.attorneyContact?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                         
                    </section>                     

                </div>

                <div className="mt-10 w-80 border-b-2 border-neutral-500 p-1 grow-0">
                    <p className="text-slate-700 text-xl font-semibold">Medical and Health Information</p>
                </div>

                <div className="grid grid-cols-5 dk:grid-cols-5 gap-x-6 gap-y-6 pt-6">

                    <section className="flex flex-col space-y-1 col-span-2">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Medical Conditions</label>
                        <input {...register('medicalConditions', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="medicalConditions" id="" placeholder="Asthma, Depression, Cancer or None"/>
                                                    {
                                    errors && errors.medicalConditions?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.medicalConditions?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            } 
                    </section>  

                    <section className="flex flex-col space-y-1 col-span-2">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Allergies</label>
                        <input {...register('allergies', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="allergies" id="" placeholder="Pollen, dust, pets or None"/>
                                                    {
                                    errors && errors.allergies?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.allergies?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            } 
                    </section> 

                    <section className="flex flex-col space-y-1 col-span-2">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Medications</label>
                        <input  className="rounded-lg bg-neutral-200 cursor-not-allowed font-bold text-sm px-4 py-1.5 outline-none  border-none text-cyan-800   placeholder-slate-400" type="text" name="" id="" placeholder="Add from Inmate Profile" disabled/>
                    </section> 

                    <section className="flex flex-col space-y-1 col-span-2">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Special Healthcare Needs</label>
                        <input className="rounded-lg bg-neutral-200 cursor-not-allowed font-bold text-sm px-4 py-1.5 outline-none  border-none text-cyan-800   placeholder-slate-400" type="text" name="" id="" placeholder="Add from Inmate Profile" disabled/>
                    </section>                     
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Emergency Contact Name</label>
                        <input {...register('emergencyPerson', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="emergencyPerson" id="" placeholder="Juliet Mensah"/>
                                                    {
                                    errors && errors.emergencyPerson?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.emergencyPerson?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            } 
                    </section> 
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Emergency Contact Phone</label>
                        <input {...register('emergencyPhone', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="emergencyPhone" id="" placeholder="0559912345"/>
                                                    {
                                    errors && errors.emergencyPhone?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.emergencyPhone?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            }                         
                    </section> 
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Emergency Contact Relationship</label>
                        <input {...register('emergencyRelationship', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="emergencyRelationship" id="" placeholder="Girlfriend"/>
                                                    {
                                    errors && errors.emergencyRelationship?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.emergencyRelationship?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            } 
                    </section> 
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Next-of-Kin Name</label>
                        <input {...register('nextofkin', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="nextofkin" id="" placeholder="Rose Agyiri"/>
                                                    {
                                    errors && errors.nextofkin?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.nextofkin?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            } 
                    </section> 
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Next-of-Kin Phone</label>
                        <input {...register('nextofkinPhone', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="nextofkinPhone" id="" placeholder="0204466666"/>
                                                    {
                                    errors && errors.nextofkinPhone?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.nextofkinPhone?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            } 
                    </section> 
                    <section className="flex flex-col space-y-1">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Next-of-Kin Relationship</label>
                        <input {...register('nextofkinRelationship', {required: true, minLength:5})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="nextofkinRelationship" id="" placeholder="Sister"/>
                                                    {
                                    errors && errors.nextofkinRelationship?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">can&apos;t be empty</p>)
                            }                        
                            {
                                    errors && errors.nextofkinRelationship?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">minimum length must be 3 characters</p>)
                            } 
                    </section> 
                </div>
                
                <div className="mt-10 w-52 border-b-2 border-neutral-500 p-1 grow-0">
                    <p className="text-slate-700 text-xl font-semibold">Visitation Information</p>
                </div>



                <div className="grid grid-cols-5 dk:grid-cols-5 gap-x-6 gap-y-6 pt-6">

                    <section className="flex flex-col space-y-1 col-span-3">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Approved Visitor List</label>
                        <input className="rounded-lg bg-neutral-200 cursor-not-allowed font-bold text-sm px-4 py-1.5 outline-none  border-none text-cyan-800   placeholder-slate-400" type="text" name="" id="" placeholder="Add from Inmate Profile" disabled/>
                    </section> 
                
                </div>                

                <div className="mt-10 w-56 border-b-2 border-neutral-500 p-1 grow-0">
                    <p className="text-slate-700 text-xl font-semibold">Disciplinary Information</p>
                </div>



                <div className="grid grid-cols-5 dk:grid-cols-5 gap-x-6 gap-y-6 pt-6">

                    <section className="flex flex-col space-y-1 col-span-2">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Records of Diciplinary Actions</label>
                        <input className="rounded-lg bg-neutral-200 cursor-not-allowed font-bold text-sm px-4 py-1.5 outline-none  border-none text-cyan-800   placeholder-slate-400" type="text" name="" id="" placeholder="Add from Inmate Profile" disabled/>
                    </section> 

                    <section className="flex flex-col space-y-1 col-span-2">
                        <label className='text-sm text-slate-600 font-medium tracking-tight' htmlFor="">Behavior Assessments Report</label>
                        <input className="rounded-lg bg-neutral-200 cursor-not-allowed font-bold text-sm px-4 py-1.5 outline-none  border-none text-cyan-800   placeholder-slate-400" type="text" name="" id="" placeholder="Add from Inmate Profile" disabled/>
                    </section> 
                
                </div>  

                <section className="flex space-x-14 items-center mt-12">
                    <button type='submit' className="px-3 py-1.5 bg-cyan-800 rounded-lg hover:bg-cyan-600">
                        <p className="text-base font-bold text-white">Save Changes</p>
                    </button>
                    <button type='reset' className="px-3 py.1.5 rounded-lg hover:bg-zinc-50">
                        <p className="text-sm font-normal text-rose-500 underline hover:opacity-40">Cancel</p>
                    </button>
                </section>


                </div>


            </form>

        </main>
    )
}