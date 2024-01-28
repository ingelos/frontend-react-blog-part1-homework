function formatDateString(dateString) {
    const date = new Date(dateString);
    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return date.toLocaleDateString('nl-NL', longOptions);
}

export default formatDateString;