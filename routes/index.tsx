import { Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import { Head } from "$fresh/runtime.ts";

import useSumHook from "../hooks/useSumHook.ts";

type HomeProps = {
  sumResult: number;
}

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { sumTwoNumbers } = useSumHook();
    const sumResult = sumTwoNumbers(1, 2);
    return await ctx.render({ sumResult });
  },
};

export default function Home({ data }: PageProps<HomeProps>) {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          {`Sum result -->  ${data.sumResult}`}
        </p>
      </div>
    </>
  );
}
