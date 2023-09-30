import BookingInfoUpdateForm from "@/components/dialogues/updatebookingform";
import Button from "@/components/miscellaneous/buttonrouter";


export default function IncarnationRecords() {
  return (
    <main className="flex flex-col overflow-hidden">

      <span className="flex justify-between items-center mt-3 ">
        <Button isLink="" action={`back`} style={`text-slate-600 text-base font-bold px-4 py-2 rounded-xl  cursor-pointer hover:underline`}>&nbsp;{`<`} Go Back</Button>
        <BookingInfoUpdateForm/>
      </span>

    
    <section className="flex flex-col overflow-y-auto py-10">
  
      <div className="flex flex-col mx-auto ">
        <article className="px-6 py-3 flex flex-col rounded-lg space-y-1 shadow-lg bg-neutral-100">
          <header className="self-start border-b border-blue-400 font-bold text-base text-sky-400 mb-4">
            Arresting/Booking Information
          </header>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">
              Name of Inmate{`:`}
            </p>
            <p className="text-slate-700 text-base tracking-wider leading-loose font-bold">
              John Ankra
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">
              Inmate ID{`:`}
            </p>
            <p className="text-slate-700 text-base tracking-wider leading-loose font-bold">
              WIN-200-DD
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">
              Cell Block Assignment{`:`}
            </p>
            <p className="text-slate-700 text-base tracking-wider leading-loose font-bold">
              Block D
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">
              Security Classification{`:`}
            </p>
            <p className="text-slate-700 text-base tracking-wider leading-loose font-bold">
              Minimum Security
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Custodial Status{`:`}</p>
            <p className="text-slate-700 text-base tracking-wider leading-loose font-bold">
              Awaiting Trial
            </p>
          </span>

        </article>



      </div>

      {/* <p className="block mt-6 text-lg font-bold text-slate-700">Court Outcomes</p>

      <div className="grid grid-cols-3 gap-x-6 gap-y-8 py-4 px-4">

        <article className="px-6 py-3 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-1 shadow-lg border">
          <header className="self-start border-b-2 border-sky-700 font-bold text-sm text-sky-700 mb-4 uppercase">
            Jan 20th 2023
          </header>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Time{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Morning
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Venue{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              General Hospital
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Doctor{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Mr Yaw Thug
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Condition Severity{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Critical
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Intent{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Check-up
            </p>
          </span>
        </article>
      </div> */}

    

    </section>
    </main>
  );
}
