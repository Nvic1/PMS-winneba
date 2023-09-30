import AllergiesUpdate from "@/components/dialogues/allergiesupdate";
import MedicalconditionsUpdate from "@/components/dialogues/medicalconditionsupdate";
import AddMedications from "@/components/dialogues/medicationsform";
import MedicalAppointments from "@/components/dialogues/medicalappointments";
import Button from "@/components/miscellaneous/buttonrouter";

export default function MedicalRecords() {
  return (
    <main className="flex flex-col overflow-hidden">
      


      <span className="flex justify-between items-center mt-3 ">

        <Button action={`back`} style={`text-slate-600 text-base font-bold px-4 py-2 rounded-xl  cursor-pointer hover:underline`}>&nbsp;{`<`} Go Back</Button>

        <div className="flex space-x-3 items-center">
          
          <span className="flex">
            <AddMedications/>
          </span>

          <span className="flex">
            <MedicalAppointments/>
          </span>

        </div>

        
      </span>

    
    <section className="flex flex-col overflow-y-auto">

      <p className="block mt-4 text-lg font-bold text-slate-700">Overview</p>

      <div className="grid grid-cols-3 gap-x-6 gap-y-6 py-4 px-4">
        <article className="px-6 py-3 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-1 shadow-lg">
            <span className="flex space-x-4 items-center">
                <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Inmate Full Name:</p>
                <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">John Apeku</p>
            </span>
            <span className="flex space-x-4 items-center">
                <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Gender:</p>
                <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Male</p>
            </span>
            <span className="flex space-x-4 items-center">
                <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Emergency Contact Name:</p>
                <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Nana Yaw Asamoah</p>
            </span>
            <span className="flex space-x-4 items-center">
                <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Emergency Contact Relationship:</p>
                <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Mother</p>
            </span>
            <span className="flex space-x-4 items-center">
                <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Emergency Contact Phone:</p>
                <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">0240555343</p>
            </span>
            <span className="flex space-x-4 items-center">
                <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Next of Kin:</p>
                <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Bright Asamoah</p>
            </span>
            <span className="flex space-x-4 items-center">
                <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Next of Kin Phone:</p>
                <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">0202222222</p>
            </span>
            <span className="flex space-x-4 items-center">
                <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Next of Kin Relationship:</p>
                <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">Son</p>
            </span>
        </article>

        <article className="grow-0 flex-none px-6 py-3 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-1 shadow-lg">
          <header className="flex justify-between items-center mb-3">
            <p className="border-b border-slate-700 font-bold text-base text-slate-700">
              Allergies
            </p>

            <AllergiesUpdate/>

          </header>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
              Okro
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              Related to <strong className='text-xs text-rose-700 font-bold'>Food</strong>
            </p>
          </span>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
              Okro
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              Related to <strong className='text-xs text-rose-700 font-bold'>Food</strong>
            </p>
          </span>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
              Okro
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              Related to <strong className='text-xs text-rose-700 font-bold'>Food</strong>
            </p>
          </span>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
              Okro
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              Related to <strong className='text-xs text-rose-700 font-bold'>Food</strong>
            </p>
          </span>
        </article>

        <article className="px-6 py-3 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-1 shadow-lg ring ring-rose-50">
        <header className="flex justify-between items-center mb-3">
            <p className="border-b border-slate-700 font-bold text-base text-slate-700">
              Medical Conditions
            </p>
            <MedicalconditionsUpdate/>


          </header>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
            Bipolar Disorder
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              Type of <strong className='text-xs text-rose-700 font-bold'>Mental</strong>
            </p>
          </span>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
            Schizophrenia
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              Type of <strong className='text-xs text-rose-700 font-bold'>Mental</strong>
            </p>
          </span>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
            Epilepsy
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              Type of <strong className='text-xs text-rose-700 font-bold'>Chronic</strong>
            </p>
          </span>
          <span className="flex space-x-4 items-center justify-between ">
            <p className="text-slate-500 text-base font-medium tracking-tighter leading-tight">
            Tuberculosis
            </p>
            <p className="text-slate-500 text-xs tracking-wider leading-loose font-normal">
              Type of <strong className='text-xs text-rose-700 font-bold'>Chronic</strong>
            </p>
          </span>
        </article>


      </div>

      <p className="flex-1 flex text-lg font-bold text-slate-700 mt-6">Medications</p>

      <div className="grid grid-cols-3 gap-x-6 gap-y-8 py-4 px-4">

        <article className="px-6 py-3 flex flex-col bg-gradient-to-r from-slate-50 to-neutral-50 rounded-lg space-y-1 shadow-lg border">
        <header className="flex justify-between items-center mb-3">
            <p className="border-b border-slate-700 font-bold text-base text-slate-700">
              January 10th 2023
            </p>
          </header>

          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Medication Name{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
            Albuterol Inhaler
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Type{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Prescription Medication
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Dosage{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              10 mg
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Frequency{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Once Daily
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Prescribed For{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Ashthma
            </p>
          </span>
        </article>
      </div>

      <p className="block mt-6 text-lg font-bold text-slate-700">Medical Appointments</p>

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
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Reason{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
            Routine Check-up
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Duration{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              30 Minutes
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Preferred Healthcare Provider{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Dr Jane Doe
            </p>
          </span>
          <span className="flex space-x-4 items-center">
            <p className="text-slate-500 text-sm font-medium tracking-tighter leading-tight">Appointment Location{`:`}</p>
            <p className="text-cyan-800 text-sm tracking-wider leading-loose font-bold">
              Tema General Hospital
            </p>
          </span>
        </article>
      </div>

    </section>
    </main>
  );
}
