import type { JSX } from "react/jsx-runtime";

export default function PhoneArrowIconSvg(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      //   fill="none"
      {...props}
    >
      <path
        fill="#212121"
        d="m7.057 2.418 1.167-.351a2.75 2.75 0 0 1 3.302 1.505l.902 2.006a2.75 2.75 0 0 1-.633 3.139L10.3 10.11a.25.25 0 0 0-.078.155c-.044.397.225 1.17.846 2.245.45.781.859 1.33 1.206 1.637.243.215.376.261.433.245l2.01-.615a2.75 2.75 0 0 1 3.034 1.02l1.28 1.776a2.75 2.75 0 0 1-.338 3.605l-.887.84a3.75 3.75 0 0 1-3.587.889c-2.754-.769-5.223-3.093-7.435-6.924C4.57 11.147 3.792 7.843 4.51 5.07a3.75 3.75 0 0 1 2.548-2.652Zm.433 1.437a2.25 2.25 0 0 0-1.53 1.59c-.602 2.332.087 5.261 2.123 8.788 2.034 3.522 4.223 5.582 6.54 6.23a2.25 2.25 0 0 0 2.152-.534l.886-.84a1.25 1.25 0 0 0 .154-1.639l-1.28-1.775a1.25 1.25 0 0 0-1.38-.464l-2.015.617c-1.17.348-2.231-.593-3.371-2.568C9 11.93 8.642 10.9 8.732 10.099c.046-.416.24-.8.545-1.086l1.495-1.393a1.25 1.25 0 0 0 .287-1.427l-.901-2.006a1.25 1.25 0 0 0-1.501-.684l-1.167.352Z"
      />
    </svg>
  );
}
