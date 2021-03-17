export const substrContent = (content, count) => {
    if (content.length > count) {
        return `${content.substring(0, count)}…`
    }
    return content
}