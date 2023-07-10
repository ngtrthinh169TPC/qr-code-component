import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className='w-screen h-screen bg-[#D5E1EF] flex justify-center items-center'>
      <div className='bg-white p-6 w-80 rounded-xl'>
        <img src='/image-qr-code.png' alt='qr-code' className='rounded-l' />
        <p className='pt-4 font-bold text-lg text-center'>
          Improve your front-end skills by building projects
        </p>
        <p className='pt-2 text-sm text-center'>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
