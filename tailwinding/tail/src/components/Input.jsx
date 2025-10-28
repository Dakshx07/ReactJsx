import { Children } from "react"

export const Input = ({
    onclick,
    type,
    placeholder
}) => {
 return <span onClick={onclick} className={`text-red-300 rounded-2xl px-16 py-4 cursor-pointer "bg-blue-200" `}>
       <input type={type} placeholder={placeholder}
       className="outline-none bg-gray-300 rounded-2xl py-2 px-2"></input>
 </span>
}