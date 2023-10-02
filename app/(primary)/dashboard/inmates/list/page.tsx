import DataTable from "@/components/miscellaneous/table/app-table";

export default function ListofInmates() {
    return (
        <main className='flex ml-12 w-full overflow-hidden'>
            <section className='flex flex-col border rounded-xl px-6 py-8 w-full'>
                <div className="flex justify-between items-center">
                    <p className="font-bold text-lg tracking-wide text-cyan-900">Inmates List</p>
                    {/* <span className='flex w-96 rounded-lg  relative items-center px-6'>
                        <input className="px-8 py-2 outline-none bg-neutral-200 border-none rounded-lg placeholder-slate-500 text-sm font-medium  text-cyan-800 w-full" type="text" name="" id="" placeholder="Type here to filter table"/>
                        <span className='absolute block pl-1.5'>
                            <svg className='h-5 w-5 stroke-cyan-800' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7H20M6.99994 12H16.9999M10.9999 17H12.9999"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </span>
                    </span> */}



                </div>

                <section className="flex space-x-8 overflow-y-auto">
                    <div className="flex-1 mt-6 ">
                        <DataTable/>

                    </div>

                </section>

                


            </section>
        </main>
    )
}