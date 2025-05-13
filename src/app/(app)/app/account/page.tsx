import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";
import React from "react";
import SignOutBtn from "@/components/sign-out-btn";
import { checkAuth } from "@/lib/server-utils";

export default async function Page() {
  const session = await checkAuth();
  return (
    <main>
      <H1 className="my-8 text-white">Your account</H1>

      <div className="h-[600px]">
        <ContentBlock className="flex h-[500px] flex-col items-center justify-center gap-3 p-5 text-center">
          <p>
            Logged in as:{" "}
            <span className="font-medium">{session.user.email}</span>
          </p>
          <SignOutBtn />
        </ContentBlock>
      </div>
    </main>
  );
}
