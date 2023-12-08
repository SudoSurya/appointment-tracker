"use client";
import { Navbar } from '@/components/navbar'
import { ClientCards } from '@/components/client-cards'
import { useEffect, useState } from 'react';
import { Clients } from '@/types/types';

export default function Home() {
    const [clients, setClients] = useState<Clients[]>()
    useEffect(() => {
        const fetchClients = async () => {
            const res = await fetch("/api/clients")
            const data = await res.json()
            console.log(data)
            setClients(data)
        }
        fetchClients()
    }, [])
    return (
        <>
            <Navbar />
            <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {clients?.map((client) => {
                    return (
                        <ClientCards key={client.id} {...client} />
                    )
                })}
            </div>
        </>
    )
}
