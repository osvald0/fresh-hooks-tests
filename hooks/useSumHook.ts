export default function useSumHook() {
    function sumTwoNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }
    return { sumTwoNumbers };
}
