
export const DateUtil = (createdAt) => {
    let date = new Date(createdAt);
    date = date.toDateString();
    return date;
}