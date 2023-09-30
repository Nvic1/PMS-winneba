import ApprovedVisitors from "@/components/dialogues/approvedvisitorsform";
import VisitorAppointmentForm from "@/components/dialogues/visitorappointmentform";
import BookingInfoUpdateForm from "@/components/dialogues/updatebookingform";
import Button from "@/components/miscellaneous/buttonrouter";

export default function VisitationRecords() {
    return (
      <main className="flex flex-col overflow-hidden">


        <span className="flex justify-between items-center mt-3 ">
          <Button action={`back`} style={`text-slate-600 text-sm font-bold px-4 py-2 rounded-xl  cursor-pointer hover:underline`}>&nbsp;{`<`} Go Back</Button>
          <VisitorAppointmentForm/>
        </span>
  
      
      <section className="flex flex-col overflow-y-auto">
  
        <p className="block mt-4 text-lg font-bold text-slate-700">Overview</p>
  
        <div className="grid grid-cols-3 gap-x-6 gap-y-6 py-4 px-4">
  
          <article className="px-6 py-3 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-0 shadow-lg border">
            <header className="flex justify-between items-center mb-3">
              <p className="border-b border-slate-700 font-bold text-base text-slate-700">
                Approved Visitor List
              </p>
              <ApprovedVisitors/>

            </header>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
              Mensah Yaw
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              <strong className='text-xs text-rose-500 font-medium text-left'>Brother</strong>
            </p>
          </span>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
              Peter Oko
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              <strong className='text-xs text-rose-500 font-medium text-left'>Son</strong>
            </p>
          </span>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
              Papa Agyiri
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              <strong className='text-xs text-rose-500 font-medium text-left'>Father</strong>
            </p>
          </span>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
              Kaizer Edu
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              <strong className='text-xs text-rose-500 font-medium text-left'>Son</strong>
            </p>
          </span>
          </article>
  
        </div>
  
        <p className="block mt-6 text-lg font-bold text-slate-700">Visitation Logs</p>
  
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 py-4 px-4">
  
          <article className="px-6 py-3 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-1 shadow-lg border">
            <header className="self-start border-b-2 border-sky-700 font-bold text-sm text-sky-700 mb-4 uppercase">
              Jan 20th 2023
            </header>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Visitor{`'`}s Name</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Yaa Mensah
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Relationship to Inmate{`:`}</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
                Friend
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Relationship{`:`}</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
                Sister
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Date of Visit{`:`}</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              September 25, 2023
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Time of Visit{`:`}</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              11:00 AM - 12:00 PM
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Visitor{`'s`} Contact{`:`}</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              0000012345
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Purpose of Visit{`:`}</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Emotional Support
              </p>
            </span>
          </article>
        </div>
  
  
      </section>
      </main>
    );
  }
  