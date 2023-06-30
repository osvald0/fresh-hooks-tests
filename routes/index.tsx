import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { createContext } from "preact";

import useSumHook from "../hooks/useSumHook.ts";
import Child from "../components/Child.tsx";

export const StateContext = createContext("");

type HomeProps = {
  sumResult: number;
  stateContextValue: string;
}

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { sumTwoNumbers } = useSumHook();
    const stateContextValue = 'This message comes from context!'
    const sumResult = sumTwoNumbers(1, 2);
    return await ctx.render({ sumResult, stateContextValue });
  },
};

export default function Home({ data }: PageProps<HomeProps>) {
  return (
    <StateContext.Provider value={data.stateContextValue}>
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
        <Child />
      </div>
    </StateContext.Provider>
  );
}
