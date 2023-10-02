import DisciplinaryActionsForm from "@/components/dialogues/disciplinaryactionsform";
import Button from "@/components/miscellaneous/buttonrouter";


export default function DiciplinaryRecords() {
    return (
      <main className="flex flex-col overflow-hidden">


        <span className="flex justify-between items-center mt-3 ">
          <Button isLink="" action={`back`} style={`text-slate-600 text-base font-bold px-4 py-2 rounded-xl  cursor-pointer hover:underline`}>&nbsp;{`<`} Go Back</Button>

          <DisciplinaryActionsForm/>

        </span>


  
      
      <section className="flex flex-col overflow-y-auto">

  
        <p className="block mt-6 text-lg font-bold text-slate-700">Records of Diciplinary Actions</p>
  
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 py-4 px-4">
  
          <article className="col-span-3 px-6 py-3 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-1 shadow-lg border">
            <header className="self-start border-b-2 border-sky-700 font-bold text-sm text-sky-700 mb-4 uppercase">
              Tuesday, &nbsp;Jan 20th 2023
            </header>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Date of Incident&#58;</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              September 5, 2023
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Incident Type&#58;</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Disobeying Direct Orders
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Incident Details&#58;</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Inmate refused to comply with orders to return to their cell during a lockdown.
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Witnesses&#58;</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Officer Williams, Officer Brown
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Disciplinary Action Taken&#58;</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Loss of recreation privileges for 30 days, written warning, counseling referral
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Disciplinary Hearing Date:&#58;</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              September 5, 2023
              </p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Hearing Officer&#58;</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Lieutenant Astanal</p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Inmate's Statement:&#58;</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Acknowledged the refusal but claimed misunderstanding</p>
            </span>
            <span className="flex space-x-4 items-center">
              <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Investigation Outcome&#58;</p>
              <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Inmate's explanation was accepted as a misunderstanding, warning issued</p>
            </span>
          </article>
        </div>
  

  
      </section>
      </main>
    );
  }
  