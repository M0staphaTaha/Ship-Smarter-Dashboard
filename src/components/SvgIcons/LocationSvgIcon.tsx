import type { JSX } from "react/jsx-runtime";

export default function LocationIconSvg(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="#212121"
        d="M5.843 4.568a8.707 8.707 0 0 1 12.314 12.314l-1.187 1.174c-.875.858-2.01 1.962-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.491-3.396c-.44-.431-.806-.794-1.102-1.09a8.707 8.707 0 0 1 0-12.314Zm11.253 1.06A7.207 7.207 0 1 0 6.903 15.822l1.488 1.468c.818.801 1.848 1.801 3.088 3a.75.75 0 0 0 1.042 0l3.395-3.3c.47-.461.863-.85 1.18-1.168a7.207 7.207 0 0 0 0-10.192ZM12 7.999a3.002 3.002 0 1 1 0 6.004 3.002 3.002 0 0 1 0-6.003Zm0 1.5a1.502 1.502 0 1 0 0 3.004 1.502 1.502 0 0 0 0-3.003Z"
      />
    </svg>
  );
}
