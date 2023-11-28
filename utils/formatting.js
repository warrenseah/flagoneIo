export const formatDate = (date) => {
    var d = new Date(date);
    return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`
}