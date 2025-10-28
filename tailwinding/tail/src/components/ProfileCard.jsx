import React from "react";

export function ProfileCard() {
    return <div className="w-50 h-70 bg-amber-50 flex flex-col items-center justify-center rounded-xl mt-40">
        <div className="px-2 py-3">
            <img src="https://images.unsplash.com/photo-1611608822772-43a28a830759?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900"
            width={90}
            height={90}
            className="rounded-xl " />

        </div>

        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold">Sam Williams</h1>
            <div className="flex flex-col items-center justify-center">
                <p>sam.williams@gmail.com</p>
                <p>9362847283</p>
                <p className="pt-3">Delhi</p>
            </div>
        </div>
    </div>
}