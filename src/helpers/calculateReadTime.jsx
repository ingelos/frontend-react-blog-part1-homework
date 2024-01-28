function calculateReadTime(text) {
    const numberOfWords = text.split(' ').length;
    return Math.round(numberOfWords / 100 * 0.3);
}

export default calculateReadTime;