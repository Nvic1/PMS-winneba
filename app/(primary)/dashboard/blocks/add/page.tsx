'use client';
import SelectDropdown from '@/components/disclosures/select-dropdown';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';


interface Inputs {
    cellName: string,
    cellID: string,
    cellGenderType: string,
    cellType: string,
    cellDescription: string,


}

export default function AddNewBlock() {

    const {register, formState: {errors}, control, handleSubmit} = useForm<Inputs>();

    const MakeBlockSubmit:SubmitHandler<Inputs> = (data:Inputs) => {
        console.log(data)
    }   



    return (
        <main className="flex ml-12">

            <section className="flex bg-white p-14 rounded-xl relative pb-20">
                <form action="#" className="flex flex-col" onSubmit={handleSubmit(MakeBlockSubmit)}>

                    <div className="w-40 border-b-2 border-fuchsia-600 p-1 grow-0 mt-2">
                        <p className="text-slate-700 text-md font-semibold">Add New Cell/Block</p>
                    </div>

                    <div className="pt-8 grid grid-cols-2 gap-x-6 gap-y-12">
                        <section className="flex flex-col space-y-1.5">
                            <label className='text-sm text-slate-700 font-normal tracking-tight' htmlFor="">Cell Name</label>
                            <input {...register("cellName", {required: true, minLength: 8})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="cellName" id="" placeholder="Cell Name"/>
                                {
                                    errors && errors.cellName?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.cellName?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                        </section> 

                        <section className="flex flex-col space-y-1.5">
                            <label className='text-sm text-slate-700 font-normal tracking-tight' htmlFor="">Cell ID</label>
                            <input {...register("cellID", {required: true, minLength: 8})} className="rounded-lg bg-zinc-50 font-semibold text-sm px-4 py-1.5 outline-none ring ring-zinc-200 border-none text-cyan-800  focus:ring-fuchsia-300 focus:bg-white placeholder-slate-400" type="text" name="cellID" id="" placeholder="block k"/>
                                {
                                    errors && errors.cellID?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.cellID?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }

                        </section>                            

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-normal tracking-tight' htmlFor="">Gender Type</label>
                                <Controller
                                    control={control}
                                    name="cellGenderType"
                                    defaultValue="Male"
                                    render={({ field: {onChange, value} }) => (
                                    <SelectDropdown
                                        onChange={onChange}
                                        value={value}
                                        list={['Male', 'Female']}
                                    />
                                    )}
                                />                            
                        </section>

                        <section className="flex flex-col space-y-1">
                            <label className='text-sm text-slate-600 font-normal tracking-tight' htmlFor="">Cell Type</label>
                                <Controller
                                    control={control}
                                    name="cellType"
                                    defaultValue="Normal"
                                    render={({ field: {onChange, value} }) => (
                                    <SelectDropdown
                                        onChange={onChange}
                                        value={value}
                                        list={['Normal', 'Remand', 'Death Sentence', 'Etc']}
                                    />
                                    )}
                                />                            
                        </section>


                        <section className="flex flex-col space-y-1 col-span-2">
                            <label className='text-sm text-slate-600 font-normal' htmlFor="">Cell Description</label>
                            <textarea {...register("cellDescription", {required: true, minLength: 10})} name="cellDescription" id="" cols={60} rows={4} className="p-6 ring ring-zinc-200 rounded-lg w-full outline-none resize-none border-none focus:ring-fuchsia-400" placeholder="Get more control over cells by providing descriptions"></textarea> 
                                {
                                    errors && errors.cellDescription?.type === "required" && ( <p className="text-left text-sm text-normal text-rose-600">input is required</p>)
                                }
                                {
                                    errors && errors.cellDescription?.type === "minLength" && ( <p className="text-left text-sm text-normal text-rose-600">invalid character length</p>)
                                }
                        </section>                        

                    </div>


                    <div className="flex justify-end items-center absolute bottom-0 right-0 space-x-4 mr-2 mb-2 ">
                        <button className="focus:outline-none focus:ring focus:ring-teal-700 px-4 py-2 rounded-xl bg-sky-400 text-sm text-zinc-50 font-bold">Save Changes</button>
                        <button className=" px-4 py-2 rounded-xl bg-slate-100 text-rose-600 font-normal underline text-sm hover:bg-transparent hover:text-rose-400">Cancel</button>
                    </div>




                </form>
            </section>


        </main>
    );
}


