export const calculateNewCreditBalance = (creatorCreditBalance, amount) => {
    const calc = creatorCreditBalance + amount;
    return (creatorCreditBalance === 0 || calc < 0) ? 0 : calc;
};