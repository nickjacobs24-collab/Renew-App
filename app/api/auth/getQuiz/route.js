import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new Response(JSON.stringify({ success: false, message: "Not signed in" }), { status: 401 });
  }

  try {
    const lastQuiz = await prisma.quizResult.findFirst({
      where: { user: { email: session.user.email } },
      orderBy: { completedAt: 'desc' },
    });

    if (!lastQuiz) {
      return new Response(JSON.stringify({ success: false, message: "No saved quiz" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, goals: lastQuiz.goals }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: err.message }), { status: 500 });
  }
}