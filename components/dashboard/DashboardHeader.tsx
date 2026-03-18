"use client"

import kalbeLogo from "@/public/images/kalbe-logo.png"
import userIcon from "@/public/images/user-icon.png"

type Props = {
    role: "administrator" | "operator"
}

export default function DashboardHeader({role}: Props) {
    return (
        <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
            {/* LOGO + MENU */}
            <div className="flex items-center gap-6">
                <img src={kalbeLogo.src} alt="kalbe-logo" className="h-10 w-auto object-contain" />
                <div className="flex gap-6 text-sm font-medium">
                    <span className="text-green-700 cursor-pointer">PREDICTION MODEL</span>
                    <span className="text-gray-500 hover:text-green-700 cursor-pointer">FILE MANAGEMENT</span>

                    {role === "administrator" && 
                        <>
                            <span className="text-gray-500 hover:text-green-700 cursor-pointer">USER MANAGEMENT</span>
                            <span className="text-gray-500 hover:text-green-700 cursor-pointer">ACTIVITY LOG</span>
                        </>
                    }
                </div>
            </div>

            {/* USER */}
            <div className="flex items-center gap-2">
                <img src={userIcon.src} alt="user" className="w-10 h-10 rounded-full" />
                <span className="text-sm font-medium">John Doe</span>
            </div>
        </div>
    )
}