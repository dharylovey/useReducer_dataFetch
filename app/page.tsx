import DemoButton from "@/components/DemoButton";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-justify">
     <h1 className=" text-5xl">DHARYL</h1> 
     <DemoButton />
    </main>
  );
}
