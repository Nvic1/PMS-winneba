import { PopNotification } from "@/components/dialogues/notification";
import Button from "@/components/miscellaneous/buttonrouter";
// import {InmateShowPopup} from "@/components/dialogues/showinmateinfo";

export default function InmateProfileLayout({children}: {children: React.ReactNode}) {



    return (

        <main className="flex flex-col ml-12 w-full overflow-hidden">

                {/* <InmateShowPopup /> */}
                    <PopNotification style={`bg-cyan-700 text-white shadow-lg `}>
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-200">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </span>
                        <p className="text-slate-200 text-sm">Lorem, ipsum dolor.</p>
                    </PopNotification>

                <header className="flex-none flex items-center shadow-sm from-slate-50 to-slate-100 bg-gradient-to-l border-2 rounded-lg pl-6 overflow-hidden">

                    <Button isLink={``} action={`push`} style={`flex flex-1 p-1.5`} href="/dashboard/inmates/4/">
                        <svg className="w-6 h-6 hover:text-sky-700 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                    </Button>

                    <div className="flex space-x-4 p-2">
                        <span className="p-2 ">
                            <Button isLink={`text-sky-700 underline`} action={`push`} style={`text-slate-600 text-base font-bold rounded-xl  cursor-pointer hover:underline hover:text-sky-700`} href="/dashboard/inmates/4/personal">Personal</Button>

                        </span>

                        <span className="p-2">
                            <Button isLink={`text-sky-700 underline`} action={`push`} style={`text-slate-600 text-base font-bold rounded-xl  cursor-pointer hover:underline hover:text-sky-700`} href="/dashboard/inmates/4/medical">Medicals</Button>
                        </span>
                        
                        <span className="p-2 ">
                            <Button isLink={`text-sky-700 underline`} action={`push`} style={`text-slate-600 text-base font-bold rounded-xl  cursor-pointer hover:underline hover:text-sky-700`} href="/dashboard/inmates/4/correction">Diciplinary</Button>
                      
                        </span>

                        <span className="p-2 ">
                            <Button isLink={`text-sky-700 underline`} action={`push`} style={`text-slate-600 text-base font-bold rounded-xl  cursor-pointer hover:underline hover:text-sky-700`} href="/dashboard/inmates/4/legal">Legal</Button>

                        </span>

                        <span className="p-2 ">
                            <Button isLink={`text-sky-700 underline`} action={`push`} style={`text-slate-600 text-base font-bold rounded-xl  cursor-pointer hover:underline hover:text-sky-700`} href="/dashboard/inmates/4/visitation">Visitations</Button>
                        </span>

                        <span className="p-2 ">
                            <Button isLink={`text-sky-700 underline`} action={`push`} style={`text-slate-600 text-base font-bold rounded-xl  cursor-pointer hover:underline hover:text-sky-700`} href="/dashboard/inmates/4/incarnation">Incarnation</Button>
                        </span>

                        
                        

                    </div>
                </header>

                <section className="overflow-hidden flex flex-col">
                    {children}
                </section>




        </main>
    );
    }