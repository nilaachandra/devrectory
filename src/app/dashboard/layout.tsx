import SessionProvider from "@/components/SessionProvider"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <SessionProvider session={session}>
      <div className="min-h-screen ">
        {children}
      </div>
    </SessionProvider>
  )
}

