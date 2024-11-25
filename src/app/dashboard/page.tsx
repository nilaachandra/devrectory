import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SignOutButton } from "@/components/SignOutButton"

export default async function DashboardPage() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login?callbackUrl=/dashboard")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to the Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl mb-4">You are logged in as: {session.user?.name}</p>
          <SignOutButton />
        </CardContent>
      </Card>
    </div>
  )
}

