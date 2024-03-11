import { MAX_SIZE } from "@constant/file.constant";

//Format MB
export const formatMBytes = (bytes = MAX_SIZE, decimals = 0) => {
    const K_UNIT = 1000;
    return (bytes / (K_UNIT*K_UNIT)).toFixed(decimals) + " MB" ;
}