export const moodCard = (moodObject) => {
    const { id, name, imageUrl, text, quotes } = moodObject

    return `
        <div class="card" id=${id}>
            <h2 class="card__title">${name}</h2>
            <img src=${imageUrl} alt="${name} mood">
            <div class="card__advice">
                <div class="card__details">
                    <h3 class="card__advice-label"> Macho Advice</h3>
                    <article class="card__advice">${text}</article>
                </div>
                <div class="card__quotes">
                        <p>${quotes[0]}</p>
                        <p>${quotes[1]}</p>
                </div>
            </div>
    `
}