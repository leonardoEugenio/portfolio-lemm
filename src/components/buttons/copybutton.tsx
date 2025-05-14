'use client'

import { FaRegCopy } from 'react-icons/fa'
import { Bounce, toast } from 'react-toastify'

export function CopyButton({ value, label }: { value: string; label: string }) {
  function handleCopyValueOnClick() {
    navigator.clipboard.writeText(value)

    toast.success('📩 E-mail copiado com sucesso !', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
      transition: Bounce,
    })
  }

  return (
    <button onClick={handleCopyValueOnClick} className="relative group">
      <div className="text-white inline-flex gap-2 items-center md:text-xl p-2 rounded-xl border border-metal-gray-500 bg-white/10 duration-300 hover:shadow-2xl hover:scale-110 hover:bg-action-blue-500/50">
        {value} <FaRegCopy />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-fit p-2 bg-white text-action-blue-800 text-sm rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-full text-bold tracking-widest uppercase">
        {label}
      </div>
    </button>
  )
}
