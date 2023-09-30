import UpdatePersonalData from "@/components/dialogues/updatepersonalinfo";
import Button from "@/components/miscellaneous/buttonrouter";
import Image from "next/image";
import React from "react";


export default function PersonalDetails() {
    return (
        <main className="flex flex-col overflow-hidden relative">


                <span className="flex justify-between items-center mt-3 relative">
                    <Button action={`back`} style={`text-slate-600 text-base font-bold px-4 py-2 rounded-xl  cursor-pointer hover:underline`}>&nbsp;{`<`} Go Back</Button>   
                    <span>
                        <UpdatePersonalData/>
                    </span>
                </span>
            


                <button className="absolute bottom-0 right-0 mr-10 mb-6 p-2 rounded-xl bg-blue-100">
                    <svg className="w-7 h-7 text-cyan-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z"/>
                        <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z"/>
                    </svg>
                </button>

                <section className="grid grid-cols-4 gap-x-6 gap-y-5 mt-10 overflow-y-auto px-10 py-10">

                    <article className="relative flex rounded-lg border dk:w-full">
                        <button className="hidden px-8 py-4 rounded-xl bg-slate-200 absolute bottom-0 mb-20 ml-12 z-10 text-md font-medium text-slate-700 hover:bg-fuchsia-400">See All Photos</button>
                        <Image className="w-full h-full overflow-hidden rounded-lg" src={`/assets/images/users/inmates/alberto.jpg`} width={200} height={200} alt="image"/>
                    </article>

                    <article className="px-6 py-3 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-1 shadow-lg">
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Full Name:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">John Apeku</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Birth Date:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">20-04-2001</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Age:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">40</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Inmate Contact:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">0240555343</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Nationality:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Ghanaian</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Religion:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Buddhist</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Gender:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Male</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Marital Status:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Single</p>
                        </span>
      
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Number of Children:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">None</p>
                        </span>


                    </article>
                    <article className="px-6 py-3 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-1 shadow-lg">
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Height:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">120cm</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Weight:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">20KG</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Eye Color:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Red</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Eye Brow Length:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Long</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Body Type:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Fat</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Hair Type:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Long</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Hair Color:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Black</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Body Tatoo Type:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">None</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Nose Type:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Flat</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Eye Size:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Large</p>
                        </span>
                    </article>

                    <article className="px-6 py-3 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-1 shadow-lg">
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Father{`'s`} Name:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Yaa Mensah</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Mother{`'s`} Name:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Sweet Mother</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Father{`'s`} Contact:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">1234567890</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Mother{`'s`} Contact:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">1234567890</p>
                        </span>

                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Spouse Name:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">None</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Spouse Contact:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">None</p>
                        </span>                        
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Number of Siblings:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">None</p>
                        </span>

                    </article>     

                    <article className="px-6 py-3 shrink-0 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-1 shadow-lg">
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Educationa Level:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Tertiary</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">City/Town:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Kaneshie</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Landmark:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Goil Filing Station</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">National ID:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">GHA-2002-2323</p>
                        </span>

                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">House Number:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">SK-023</p>
                        </span>
                        <span className="flex space-x-4 items-center">
                            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Digital Adress:</p>
                            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">TAD-022-0234</p>
                        </span>                        


                    </article> 


                </section>




            
        </main>
    )
}