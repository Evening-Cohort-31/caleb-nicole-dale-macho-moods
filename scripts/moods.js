export const moodCard = (moodObject) => {
    const { id, name, imageUrl, text, quotes} = moodObject

    return `
        <div class="card" id=${id}>
            <h3>${name}</h3>
            <img src=${imageUrl}>
            <div class="card__details>
                <article class="card__advice">${text}</article>
                <section class="card__quotes>
                    <p class="card__quotes__quote>${quotes[0]}</p>
                    <p class="Card__quotes__quote>${quotes[1]}</p>
                </section>
            </div>
        </div>
    `
}