"use client";

import { cn } from "@/lib/utils";

export function StackIllustration({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("h-[calc(100%-180px)] py-5", className)} {...props}>
      <div className="flex flex-col justify-between h-full relative gap-1">
        <StackIcon />
        <ConnectorLines />
        <StackIcon />
        <ConnectorLines />
        <StackIcon />
      </div>
    </div>
  );
}

export function StackIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={cn("w-10 shrink-0 sm:w-20 mx-auto", className)}
      aria-hidden="true"
      fill="none"
      viewBox="0 0 120 72"
      {...props}
    >
      <path
        className="fill-bacground"
        d="M56.095 6 8.464 33.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 68c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0"
      ></path>
      <g stroke="currentColor" opacity="0.1">
        <path
          fill="currentColor"
          d="M60.425 52.5c-.478-.276-.478-.724 0-1L87.272 36c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 53.5c-.478.276-1.253.276-1.732 0zM54.363 49c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
        ></path>
        <path strokeLinecap="round" d="m63.89 43.5 12.124-7"></path>
        <path
          fill="currentColor"
          d="M46.57 44.5c-.48-.276-.48-.724 0-1L73.415 28c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 45.5c-.478.276-1.254.276-1.732 0z"
        ></path>
        <path strokeLinecap="round" d="m43.105 42.5 10.392-6"></path>
        <path
          fill="currentColor"
          d="M37.043 39c-.478-.276-.478-.724 0-1L63.89 22.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 40c-.478.276-1.254.276-1.732 0z"
        ></path>
        <path strokeLinecap="round" d="m33.579 37 10.392-6"></path>
      </g>
      <path
        stroke="currentColor"
        strokeOpacity="0.4"
        d="M112.09 35.5c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0L8.464 33.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 65c-1.913 1.105-5.015 1.105-6.928 0L8.464 37.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 68c-1.913 1.105-5.015 1.105-6.928 0L8.464 40.5c-.957-.552-1.435-1.276-1.435-2v-3"
      ></path>
      <path
        stroke="currentColor"
        strokeOpacity="0.4"
        d="M17.99 40c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0L108.057 35c.478.276.478.724 0 1L60.426 63.5c-.479.276-1.254.276-1.732 0z"
      ></path>
      <path
        fill="currentColor"
        stroke="currentColor"
        d="M11.062 36c-.478-.276-.478-.724 0-1L58.694 7.5c.478-.276 1.253-.276 1.732 0L63.024 9c.478.276.478.724 0 1L15.392 37.5c-.478.276-1.253.276-1.732 0z"
        opacity="0.1"
      ></path>
      <g data-lift="true">
        <path
          className="fill-current"
          fillOpacity="0.3"
          stroke="currentColor"
          d="M60.425 47.5c-.478-.276-.478-.724 0-1L87.272 31c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 48.5c-.478.276-1.253.276-1.732 0zM54.363 44c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
        ></path>
        <circle
          cx="2"
          cy="2"
          r="2"
          className="fill-bacground"
          stroke="currentColor"
          transform="matrix(.86603 -.5 .86603 .5 56.095 41)"
        ></circle>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          d="m63.89 38.5 12.124-7"
        ></path>
        <path
          className="fill-bacground"
          stroke="currentColor"
          d="M46.57 39.5c-.48-.276-.48-.724 0-1L73.415 23c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 40.5c-.478.276-1.254.276-1.732 0z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          d="m43.105 37.5 10.392-6"
        ></path>
        <path
          className="fill-bacground"
          stroke="currentColor"
          d="M37.043 34c-.478-.276-.478-.724 0-1L63.89 17.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 35c-.478.276-1.254.276-1.732 0z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          d="m33.579 32 10.392-6"
        ></path>
        <path
          className="fill-bacground"
          stroke="currentColor"
          d="M11.062 31c-.478-.276-.478-.724 0-1L58.694 2.5c.478-.276 1.253-.276 1.732 0L63.024 4c.478.276.478.724 0 1L15.392 32.5c-.478.276-1.253.276-1.732 0z"
        ></path>
      </g>
    </svg>
  );
}

export function ConnectorLines({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex justify-center gap-8.5 flex-1", className)}
      {...props}
    >
      <MixedVerticalLine
        solidRatio={0.4}
        className="-translate-y-5 h-[calc(100%+39px)]"
      />
      <MixedVerticalLine solidRatio={0.2} />
      <MixedVerticalLine
        solidRatio={0.4}
        className="-translate-y-5 h-[calc(100%+39px)]"
      />
    </div>
  );
}

type MixedLineProps = React.HTMLAttributes<HTMLDivElement> & {
  solidRatio?: number;
};

export function MixedVerticalLine({
  className,
  solidRatio = 0.3,
  ...props
}: MixedLineProps) {
  return (
    <div className={cn("flex flex-col h-full", className)} {...props}>
      <span
        style={{ flex: solidRatio }}
        className="block w-px bg-black/10 dark:bg-white/10"
      />
      <span
        style={{ flex: 1 - solidRatio }}
        className="block w-px bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.1)_0_4px,transparent_4px_8px)] dark:bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.1)_0_4px,transparent_4px_8px)]"
      />
    </div>
  );
}
