import Button from "@/components/miscellaneous/buttonrouter";

export default function InmateProfilePage() {

    return (
        <section className="flex flex-col w-full mt-8 overflow-y-auto">

        <p className="text-slate-800 font-bold text-xl tracking-wider">Overview</p>

        <section className="grid grid-cols-3 gap-x-6 gap-y-6 px-6 py-4">
            
            <aside className="flex flex-col space-y-1 relative">

                {/* <footer className="flex flex-col space-y-1 absolute right-0 top-10 mr-2 mt-2">
                    <span className="p-1.5 bg-slate-200 rounded-xl outline-indigo-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </span>  
                </footer> */}

                <p className="font-medium text-lg text-slate-500">Personal Information</p>
                <article className="px-6 py-3 flex flex-col bg-gradient-to-bl from-cyan-50 to-fuchsia-50 rounded-xl border space-y-1">
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Full Name:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">John Apeku</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Birth Date:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">20-04-2001</p>
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

                    <Button isLink="" action="push" style={`text-sm font-medium text-fuchsia-400 underline hover:text-fuchsia-700 self-end cursor-pointer`} href={`4/personal/`}>See All</Button>
                </article>


            </aside>
            <aside className="flex flex-col space-y-1">
                <p className="font-medium text-lg text-slate-500">Medical Records</p>
                <article className="px-6 py-3 flex flex-col bg-gradient-to-bl from-cyan-50 to-fuchsia-50 rounded-xl border space-y-1">
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Emergency Contact Name:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Peter Asiedu</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Next of Kin:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">John Peterson</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Recent Appointment:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">20-04-2001</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Allergies:</p>
                        <p className="text-fuchsia-700 text-sm tracking-wider leading-loose font-bold underline cursor-pointer">reveal</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Medications:</p>
                        <p className="text-fuchsia-700 text-sm tracking-wider leading-loose font-bold underline cursor-pointer">reveal</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Medical Conditions:</p>
                        <p className="text-fuchsia-700 text-sm tracking-wider leading-loose font-bold underline cursor-pointer">reveal</p>
                    </span>

                    <Button isLink="" action="push" style={`text-sm font-medium text-fuchsia-400 underline hover:text-fuchsia-700 self-end cursor-pointer`} href={`4/medical/`}>See All</Button>
                </article>


            </aside>
            <aside className="flex flex-col space-y-1">
                <p className="font-medium text-lg text-slate-500">Legal Information</p>
                <article className="px-6 py-3 flex flex-col bg-gradient-to-bl from-cyan-50 to-fuchsia-50 rounded-xl border space-y-1">
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Date of Admission:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">20-02-2001</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Arresting Agency:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Ashaiman Police Station</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Legal Status:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Remand</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Court Case Numbers:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">None</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Sentence:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">2 years</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Charges Filed:</p>
                        <p className="text-fuchsia-700 text-sm tracking-wider leading-loose font-bold underline cursor-pointer">reveal</p>
                    </span>

                    <Button isLink="" action="push" style={`text-sm font-medium text-fuchsia-400 underline hover:text-fuchsia-700 self-end cursor-pointer`} href={`4/legal/`}>See All</Button>
                </article>


            </aside>
            <aside className="flex flex-col space-y-1">
                <p className="font-medium text-lg text-slate-500">Diciplinary Records</p>
                <article className="px-6 py-3 flex flex-col bg-gradient-to-bl from-cyan-50 to-fuchsia-50 rounded-xl border space-y-1">
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Recent Misconduct:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">None</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Total Issues:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">20</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Good Behaviour Credits:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">80%</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Disciplinary Actions Taken:</p>
                        <p className="text-fuchsia-700 text-sm tracking-wider leading-loose font-bold underline cursor-pointer">reveal</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Behaviour Assessments Report:</p>
                        <p className="text-fuchsia-700 text-sm tracking-wider leading-loose font-bold underline cursor-pointer">reveal</p>
                    </span>

                    <Button isLink="" action="push" style={`text-sm font-medium text-fuchsia-400 underline hover:text-fuchsia-700 self-end cursor-pointer`} href={`4/corrections/`}>See All</Button>
                </article>


            </aside>
            <aside className="flex flex-col space-y-1">

                <p className="font-medium text-lg text-slate-500">Visitation Records</p>
                <article className="px-6 py-3 flex flex-col bg-gradient-to-bl from-cyan-50 to-fuchsia-50 rounded-xl border space-y-1">
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Top Visitor:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">John Apeku</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Recent Visit Date:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">20-04-2001</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Recent Visitor:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">John Ayele</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Total Visits:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">20</p>
                    </span>

                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Approved Visitor List:</p>
                        <p className="text-fuchsia-700 text-sm tracking-wider leading-loose font-bold underline cursor-pointer">reveal</p>
                    </span>


                    <Button isLink="" action="push" style={`text-sm font-medium text-fuchsia-400 underline hover:text-fuchsia-700 self-end cursor-pointer`} href={`4/visitation/`}>See All</Button>
                </article>


            </aside>

            <aside className="flex flex-col space-y-1">
                <p className="font-medium text-lg text-slate-500">Booking Information</p>
                <article className="px-6 py-3 flex flex-col bg-gradient-to-bl from-cyan-50 to-fuchsia-50 rounded-xl border space-y-1">
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Admisstion Date:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">John Apeku</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Cell Block Assignment:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Block K</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Custodial Status:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Awaiting trial</p>
                    </span>
                    <span className="flex space-x-4 items-center">
                        <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Security Classification:</p>
                        <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Minimum Security</p>
                    </span>


                    <Button isLink="" action="push" style={`text-sm font-medium text-fuchsia-400 underline hover:text-fuchsia-700 self-end cursor-pointer`} href={`4/incarnation/`}>See All</Button>
                </article>


            </aside>
                                       



        </section> 
    </section>
    );
}