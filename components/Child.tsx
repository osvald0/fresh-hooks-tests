import { StateContext } from "../routes/index.tsx";
import { useContext } from "preact/hooks";

export default function Child() {
    const value = useContext(StateContext);
    return <div>{value}</div>;
}