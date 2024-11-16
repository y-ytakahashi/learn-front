type IconProps = {
  className?: string;
};

const icons = {
  github: ({ className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      {...{ className }}
    >
      <g
        id="feGithub0"
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
      >
        <g id="feGithub1" fill="currentColor">
          <path
            id="feGithub2"
            d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
          />
        </g>
      </g>
    </svg>
  ),
  spinner2: ({ className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 16 16"
      {...{ className }}
    >
      <path
        fill="currentColor"
        d="M16 8a7.917 7.917 0 0 0-2.431-5.568A7.776 7.776 0 0 0 5.057.896c-.923.405-1.758.992-2.449 1.712S1.371 4.182 1.011 5.105a7.531 7.531 0 0 0 .115 5.742c.392.892.961 1.7 1.658 2.368S4.307 14.41 5.2 14.758a7.286 7.286 0 0 0 2.799.493a7.157 7.157 0 0 0 6.526-4.547a6.98 6.98 0 0 0 .415-1.622l.059.002a1 1 0 0 0 .996-1.083h.004zm-1.589 2.655c-.367.831-.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434a6.759 6.759 0 0 1-2.608.454a6.676 6.676 0 0 1-4.685-2.065a6.597 6.597 0 0 1-1.38-2.173a6.514 6.514 0 0 1 .116-4.976c.342-.77.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c.771-.298 1.596-.438 2.416-.416s1.629.202 2.368.532c.74.329 1.41.805 1.963 1.387s.988 1.27 1.272 2.011a6.02 6.02 0 0 1 .397 2.32h.004a1 1 0 0 0 .888 1.077a6.872 6.872 0 0 1-.481 1.578z"
      />
    </svg>
  ),
  post: ({ className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      {...{ className }}
    >
      <g fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M2.906 17.505L5.337 3.718a2 2 0 0 1 2.317-1.623L19.472 4.18a2 2 0 0 1 1.622 2.317l-2.431 13.787a2 2 0 0 1-2.317 1.623L4.528 19.822a2 2 0 0 1-1.622-2.317Z" />
        <path
          stroke-linecap="round"
          d="m8.929 6.382l7.879 1.389m-8.574 2.55l7.879 1.39M7.54 14.26l4.924.869"
        />
      </g>
    </svg>
  ),
  billing: ({ className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 14 14"
      {...{ className }}
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M7 4.5V3M5.5 8.5c0 .75.67 1 1.5 1s1.5 0 1.5-1c0-1.5-3-1.5-3-3c0-1 .67-1 1.5-1s1.5.38 1.5 1M7 9.5V11" />
        <circle cx="7" cy="7" r="6.5" />
      </g>
    </svg>
  ),
  setting: ({ className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      {...{ className }}
    >
      <g fill="currentColor">
        <path d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0a3 3 0 0 1 4.23 4.231a3 3 0 0 1 .001 5.984a3 3 0 0 1-4.231 4.23a3 3 0 0 1-5.984 0a3 3 0 0 1-4.231-4.23a3 3 0 0 1 0-5.984a3 3 0 0 1 4.231-4.231z" />
        <path d="M12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656a4 4 0 0 1-5.656-5.656z" />
      </g>
    </svg>
  ),
  add: ({ className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
      {...{ className }}
    >
      <path fill="currentColor" d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4h2Z" />
    </svg>
  ),
  dropdown: ({ className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 48 48"
      {...{ className }}
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="4"
      >
        <path stroke-linejoin="round" d="M40 28L24 40L8 28" />
        <path d="M8 10h32M8 18h32" />
      </g>
    </svg>
  ),
};

export default icons;
