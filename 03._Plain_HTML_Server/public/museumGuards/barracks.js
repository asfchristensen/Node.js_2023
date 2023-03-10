export const guards = [
    "Hank the tank",
    "Thomas the tank engine",
    "CEPUS"
];

export function addGuard(guard) {
    guards.push(guard);
    return guards;
}

// another way of exporting functions 
export default {
    guards,
    addGuard
};


