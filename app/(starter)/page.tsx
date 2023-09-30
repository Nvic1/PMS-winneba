import {LoginDialogue} from "@/components/dialogues/login";
import Image from "next/image";


export default function Login() {
    return (
        <>
        <LoginDialogue />

            <main className="flex flex-col h-screen w-screen">
                <div className="flex space-x-2 items-center pt-4 pl-4">
                    <span>
                        <Image src={`/assets/images/gpsLOGO.png`} alt="Logo" width={50} height={50} />
                    </span>
                    <span className="text-md font-bold text-slate-200">GHANA PRISON SERVICES</span>
                </div>

                <div className="flex flex-col m-auto">
                    <p className="block text-white text-xl font-bold tracking-widest">WELCOME TO Winneba Prison</p>
                    <div className="flex flex-col justify-center items-center pt-8">
                        {/* <ShowLoginButton/> */}
                    </div>
                </div>
            </main>
        </>
    );

}

