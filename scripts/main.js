import { database } from "./database.js"
import { moodCard } from "./moods.js"

const container = document.querySelector('#container')

database.forEach(mood => container.innerHTML += moodCard(mood))


