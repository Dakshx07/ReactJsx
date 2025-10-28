import { Children } from "react"

export const Button = ({
    disabled,
    children,
    onclick
}) => {
 return <span onClick={onclick} className={`text-red-300 rounded-2xl px-16 py-4 cursor-pointer ${disabled ?  "bg-blue-200" : "bg-green-400"}`}>
        {children}
 </span>
}