export const moodCard = (moodObject) => {
    const { id, name, imageUrl, text, quotes} = moodObject

    return `
        <div class="card" id=${id}>
            <h2>${name}</h2>
            <img src=${imageUrl}>
            <div class="card__bottom">
                <div class="card__details">
                    <h3> Macho Advice: </h3>
                    <article class="card__advice">${text}</article>
                </div>
                <div class="card__quotes">
                        <p>${quotes[0]}</p>
                        <p>${quotes[1]}</p>
                </div>
            </div>
    `
}