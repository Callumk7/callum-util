/**
 * chunkArray takes an array of type T and returns an array of the input
 * array sliced up to the length of the chunkSize input parameter.
 * The last sub array may have a shorter length than chunkSize; it will be
 * an array of all remaining entries of the input array.
 *
 * @param array - input array to be sliced
 * @param chunkSize - length of the sub array to be produced
 * @returns T[][] - an array of arrays of type T.
 */
export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize)
    chunks.push(array.slice(i, i + chunkSize));
  return chunks;
};
