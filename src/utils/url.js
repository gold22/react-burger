// eslint-disable-next-line import/prefer-default-export
export const deserializeQuery = (query, noQuestionMark = false) => {
    const pairs = (noQuestionMark ? query : query.substring(1)).split('&');
    const array = pairs.map((elem) => elem.split('='));
    return Object.fromEntries(array);
};
