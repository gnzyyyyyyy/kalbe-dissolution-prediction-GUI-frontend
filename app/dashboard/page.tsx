"use client"

import {useState, useEffect} from "react"
import { useRouter } from "next/navigation"
import DashboardLayput from "@/components/dashboard/DashboardLayout"

export default function DashboardPage() {
    const router = useRouter()
    const [role, setRole] = useState<"administrator" | "operator">("operator")

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token) {
            router.push("/login")
        } else {
            setRole("administrator")
        }
    }, [])
    return <DashboardLayput role={role} />
}