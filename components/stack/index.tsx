import { SourceCodeIcon } from "@/app/icons";
import Image from "next/image";
import { Container } from "../container";

function Stack() {
  return (
    <section>
      <div className="border-b border-border">
        <Container className="h-15 flex items-end">
          <span className="text-neutral-300 font-ibm-plex-mono text-xs px-2 mb-1 select-none">
            text-3xl leading-6
          </span>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container>
          <h1 className="px-2 text-3xl leading-8 font-medium tracking-tighter">
            Stack
          </h1>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container className="h-8 flex items-end"></Container>
      </div>

      <div className="border-b border-border relative">
        <Container>
          <Card />
        </Container>
      </div>
    </section>
  );
}

export default Stack;

export const Card = () => {
  return (
    <div className="px-2 py-2">
      <div className="flex items-center gap-2 flex-wrap">
        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>

        <div className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-1 border border-neutral-200 leading-none flex items-center gap-2 cursor-pointer hover:bg-neutral-200/50">
          <div className="size-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
              width={50}
              height={50}
              alt="company logo"
              className="select-none w-full h-full object-cover"
              draggable={false}
            />
          </div>
          NextJS
        </div>
      </div>
    </div>
  );
};
