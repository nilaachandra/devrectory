'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LoginForm } from "@/components/LoginForm"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function InterceptedLoginPage({
  searchParams
}: {
  searchParams: { callbackUrl?: string }
}) {
  const router = useRouter()

  useEffect(() => {
    document.body.style.pointerEvents = 'none'
    return () => {
      document.body.style.pointerEvents = 'auto'
    }
  }, [])

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login to your account</DialogTitle>
        </DialogHeader>
        <LoginForm callbackUrl={searchParams.callbackUrl} />
      </DialogContent>
    </Dialog>
  )
}

