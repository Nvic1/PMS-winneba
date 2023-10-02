
export default function Dashboard() {


    return (
        <main className="ml-12 flex h-full border rounded-lg w-3/4">
            <section className="flex flex-col p-6  space-y-6">
                <p className="text-xl font-bold text-slate-700  justify-start items-start mb-6">Welcome</p>

                <aside className="grid grid-cols-4 gap-x-16 mx-auto">


                    <article className="p-4 flex space-x-4 bg-white items-center rounded-xl">
                        <span className="p-1 rounded-md bg-cyan-200 place-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 dk:h-12 dk:w-12 fill-cyan-700' fill="none" viewBox="0 0 24 24">
                                <path  fill-rule="evenodd" d="M3 18a6.002 6.002 0 0 1 8.018-5.652c.343.122.671.275.982.455A5.965 5.965 0 0 1 15 12a6.002 6.002 0 0 1 6 6v3h-5.25v-1.5h3.75V18a4.5 4.5 0 0 0-6.188-4.172A5.98 5.98 0 0 1 15 18v3H3v-3Zm6-6.75A3.748 3.748 0 0 1 5.25 7.5 3.75 3.75 0 0 1 12 5.25a3.75 3.75 0 1 1 0 4.5 3.733 3.733 0 0 1-3 1.5ZM13.5 18v1.5h-9V18a4.5 4.5 0 1 1 9 0ZM11.25 7.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM15 5.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd"/>
                            </svg>
                        </span>
                        <span className="flex flex-col -space-y-0 items-center">
                            <p className="text-slate-600 dk:text-xl font-normal tracking-widest">Our Inmates</p>
                            <p className="font-bold text-slate-800 text-lg dk:text-xl tracking-wide">200</p>
                        </span>
                    </article>

                    <article className="p-4 flex space-x-4 bg-white items-center rounded-xl">
                        <span className="p-1 rounded-md bg-rose-200 place-content-center">
                            <svg className='h-10 w-10 dk:h-12 dk:w-12 text-rose-800' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                        </span>
                        <span className="flex flex-col -space-y-0 items-center">
                            <p className="text-slate-600 dk:text-xl font-normal tracking-widest">Our Cells</p>
                            <p className="font-bold text-slate-800 text-lg dk:text-xl tracking-wide">20</p>
                        </span>
                    </article>

                    <article className="p-4 flex space-x-4 bg-white items-center rounded-xl">
                        <span className="p-1 rounded-md bg-cyan-200 place-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 dk:h-12 dk:w-12 fill-cyan-700' fill="none" viewBox="0 0 24 24">
                                <path  fill-rule="evenodd" d="M3 18a6.002 6.002 0 0 1 8.018-5.652c.343.122.671.275.982.455A5.965 5.965 0 0 1 15 12a6.002 6.002 0 0 1 6 6v3h-5.25v-1.5h3.75V18a4.5 4.5 0 0 0-6.188-4.172A5.98 5.98 0 0 1 15 18v3H3v-3Zm6-6.75A3.748 3.748 0 0 1 5.25 7.5 3.75 3.75 0 0 1 12 5.25a3.75 3.75 0 1 1 0 4.5 3.733 3.733 0 0 1-3 1.5ZM13.5 18v1.5h-9V18a4.5 4.5 0 1 1 9 0ZM11.25 7.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM15 5.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd"/>
                            </svg>
                        </span>
                        <span className="flex flex-col -space-y-0 items-center">
                            <p className="text-slate-600 dk:text-xl font-normal tracking-widest">Our Staff</p>
                            <p className="font-bold text-slate-800 text-lg dk:text-xl tracking-wide">1</p>
                        </span>
                    </article>

                </aside>

                <div className="flex-1 grid grid-cols-3 gap-x-6">
                    <div className="flex flex-col mt-14">
                        <p className="text-lg font-bold text-slate-700 mb-2">Recent Inmates</p>
                        <aside className="bg-white p-2 rounded-lg">

                            <table className='table-auto'>
                                <thead className="mb-1">
                                    <tr className="text-xs font-normal text-slate-400">
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Cell ID</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-sm text-slate-700 font-medium">
                                        <td className="py-1">Peter Kasa</td>
                                        <td className="px-4 py-1">20-02-2042</td>
                                        <td className="px-4 py-1">CH-0102</td>
                                        <td className="px-4 py-1">20</td>
                                    </tr>

                                </tbody>
                            </table>
                        </aside>
                    </div>

                    <div className="flex flex-col mt-14">
                        <p className="text-lg font-bold text-slate-700 mb-2">Inmates Due Release</p>
                        <aside className="bg-white p-2 rounded-lg">

                            <table className='table-auto'>
                                <thead className="mb-1">
                                    <tr className="text-xs font-normal text-slate-400">
                                        <th>Name</th>
                                        <th>Days Remaining</th>
                                        <th>Cell</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </aside>
                    </div>
                    <div className="flex flex-col mt-14">
                        <p className="text-lg font-bold text-slate-700 mb-2">Due Medical Appointments</p>
                        <aside className="bg-white p-2 rounded-lg">

                            <table className='table-auto'>
                                <thead className="mb-1">
                                    <tr className="text-xs font-normal text-slate-400">
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Cell ID</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-sm text-slate-700 font-medium">
                                        <td className="py-1">Peter Kasa</td>
                                        <td className="px-4 py-1">365 Days</td>
                                        <td className="px-4 py-1">CH-0102</td>
                                        <td className="px-4 py-1">20</td>
                                    </tr>


                                </tbody>
                            </table>
                        </aside>
                    </div>





                </div>


            </section>

        </main>
    );

}

