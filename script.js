const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [[1, 1, 0],
        [1, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [[1, 1, 1],
        [1, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 1],
        [1, 0, 0],
        [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 0, 0],
        [1, 1, 1],
        [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 1]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
]

const missions =
{
    "basic": [
        {
            "id": "edge_of_the_forest",
            "title": "Az erdő széle",
            "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz."
        },
        {
            "id": "sleepy_valley",
            "title": "Álmos-völgy",
            "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz."
        },
        {
            "id": "watering_potatoes",
            "title": "Krumpliöntözés",
            "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz."
        },
        {
            "id": "borderlands",
            "title": "Határvidék",
            "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz."
        }
    ],
    "extra": [
        {
            "title": "Fasor",
            "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért."
        },
        {
            "title": "Gazdag város",
            "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz."
        },
        {
            "title": "Öntözőcsatorna",
            "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte."
        },
        {
            "title": "Mágusok völgye",
            "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz."
        },
        {
            "title": "Üres telek",
            "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz."
        },
        {
            "title": "Sorház",
            "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz."
        },
        {
            "title": "Páratlan silók",
            "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz."
        },
        {
            "title": "Gazdag vidék",
            "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz."
        }
    ],
}

const mountains = [[2, 2], [4, 9], [6, 4], [9, 10], [10, 6]]

const forbidden_names = ['Bendi', 'Brandy', 'Brendon']

const seasons = ["Spring", "Summer", "Autumn", "Winter"]

const play_btn = document.querySelector('#play')
const return_btn = document.querySelector('#return')
const return_btn2 = document.querySelector('#return2')
const name_inp = document.querySelector('#name')
const menu_div = document.querySelector('#menu')
const field = document.querySelector('table.field')
const game_div = document.querySelector('#ingame')
const name_tit = document.querySelector('#ingame h2')

const rotate_btn = document.querySelector('#rotate')
const mirror_btn = document.querySelector('#mirror')
const time_txt = document.querySelector('#time')

const time_left = document.querySelector('#time_left')
const current_season = document.querySelector('#current_season')

const missions_container = document.querySelector("#missions")

const spring_points = document.querySelector("#spring_points")
const summer_points = document.querySelector("#summer_points")
const autumn_points = document.querySelector("#autumn_points")
const winter_points = document.querySelector("#winter_points")

const overlay = document.getElementById('overlay')
const modal = document.querySelector('#endscreen')

const end_text = document.querySelector('#end_text')

const ROWS = 11
const COLS = 11

const SEASON_TIME = 7
let timer = 0

let season_points = [0, 0, 0, 0]
let total_points = 0

let canPlace = true


play_btn.addEventListener('click', startGame)


let current_element

const selectedMissions = getRandomMissions(missions)

function startGame() {
    timer = 0
    total_points = 0
    season_points = [0, 0, 0, 0]
    canPlace = true
    updateSeasonScore(0, 0)
    updateSeasonScore(0, 1)
    updateSeasonScore(0, 2)
    updateSeasonScore(0, 3)

    if (name_inp.value === '') {
        alert('Enter a player name!')
        return
    }
    else if (forbidden_names.includes(name_inp.value)) {
        alert('You can not use this name!')
        return
    }
    menu_div.style.display = 'none'
    game_div.style.display = 'block'
    name_tit.innerHTML = `Complete your missions ${name_inp.value}!`

    createField(ROWS, COLS)
    renderMissions()
    newRound()
}

function createField(rows, cols) {
    field.innerHTML = ""
    for (let i = 1; i <= ROWS; i++) {
        const tr = document.createElement('tr')
        for (let j = 1; j <= COLS; j++) {
            const td = document.createElement('td')
            mountains.forEach(e => {
                if (i == e[0] && j == e[1]) {
                    td.className = 'mountain'
                }
            })

            tr.append(td)
        }
        field.append(tr)
    }
    return field
}

function pickRandomElement() {
    return elements[(Math.floor(Math.random() * elements.length))]
}

function displayNextElement(element) {
    elementTable.innerHTML = ""
    time_txt.innerHTML = `Time: ${element.time}`
    for (let i = 0; i < element.shape.length; i++) {
        const row = document.createElement('tr')
        for (let j = 0; j < element.shape[i].length; j++) {
            const cell = document.createElement('td')
            if (element.shape[i][j] == 1) {
                cell.className = element.type
            }
            row.appendChild(cell)
        }
        elementTable.appendChild(row)
    }
}

function rotateElement(element) {
    const shape = element.shape
    const n = shape.length;
    const rotatedShape = Array.from({ length: n }, () => Array(n).fill(0))

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotatedShape[j][n - 1 - i] = shape[i][j]
        }
    }

    let new_rotation = 0
    if (element.rotation + 1 == 4) {
        new_rotation = 0
    }
    else {
        new_rotation = element.rotation + 1
    }

    current_element = {
        ...element,
        shape: rotatedShape,
        rotation: new_rotation,
    }

    return {
        ...element,
        shape: rotatedShape,
        rotation: new_rotation,
    }
}

rotate_btn.addEventListener('click', () => {
    displayNextElement(rotateElement(current_element))
})

function mirrorElement(element) {
    const shape = element.shape
    const n = shape.length
    const mirroredShape = Array.from({ length: n }, () => Array(n).fill(0))

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            mirroredShape[i][n - 1 - j] = shape[i][j];
        }
    }

    current_element = {
        ...element,
        shape: mirroredShape,
        mirrored: !element.mirrored,
    }

    return {
        ...element,
        shape: mirroredShape,
        mirrored: !element.mirrored,
    }
}

mirror_btn.addEventListener('click', () => {
    displayNextElement(mirrorElement(current_element))
})

field.addEventListener('click', (e) => {
    const clickedCell = e.target
    const x = clickedCell.cellIndex
    const y = clickedCell.parentNode.rowIndex

    placeElementOnField(current_element, x, y)
})

function placeElementOnField(element, x, y) {
    if (canPlace) {

        const rows = field.getElementsByTagName('tr');
        const shape = element.shape

        for (let i = 0; i < shape.length; i++) {
            for (let j = 0; j < shape[i].length; j++) {
                if (shape[i][j] === 1) {
                    const cellX = x + j
                    const cellY = y + i
                    if (cellX < 0 || cellX >= 11 || cellY < 0 || cellY >= 11) {
                        alert('Wrong placement')
                        return
                    }

                    const cell = rows[cellY].getElementsByTagName('td')[cellX]
                    if (cell.className !== '') {
                        alert('Wrong placement')
                        return
                    }
                }
            }
        }

        for (let i = 0; i < shape.length; i++) {
            for (let j = 0; j < shape[i].length; j++) {
                if (shape[i][j] === 1) {
                    const cell = rows[y + i].getElementsByTagName('td')[x + j]
                    cell.className = element.type
                }
            }
        }

        timer += element.time
        newRound()
    }
}

let current_season_num = 0

function newRound() {
    if (timer < SEASON_TIME) {
        current_season.innerHTML = `Current season: ${seasons[0]}`
        setActiveMission(0, 1)
    }
    else if (timer >= SEASON_TIME && timer < 2 * SEASON_TIME) {
        current_season.innerHTML = `Current season: ${seasons[1]}`
        setActiveMission(1, 2)
        checkForSeasonChange(current_season_num, 1, 0, 1)
        current_season_num = 1
    }
    else if (timer >= 2 * SEASON_TIME && timer < 3 * SEASON_TIME) {
        current_season.innerHTML = `Current season: ${seasons[2]}`
        setActiveMission(2, 3)
        checkForSeasonChange(current_season_num, 2, 1, 2)
        current_season_num = 2
    }
    else if (timer >= 3 * SEASON_TIME && timer < 4 * SEASON_TIME) {
        current_season.innerHTML = `Current season: ${seasons[3]}`
        setActiveMission(3, 0)
        checkForSeasonChange(current_season_num, 3, 2, 3)
        current_season_num = 3
    }
    else {
        endOfGame()
        return
    }



    time_left.innerHTML = `Time left from season: ${timer % 7}/${SEASON_TIME}`
    current_element = pickRandomElement()
    displayNextElement(current_element)
}

function getRandomMissions(missions) {
    const basicMissions = missions["basic"]
    const selectedMissions = []
    const numberOfMissions = 4

    while (selectedMissions.length < numberOfMissions) {
        const randomIndex = Math.floor(Math.random() * basicMissions.length)
        const selectedMission = basicMissions[randomIndex]

        if (!selectedMissions.includes(selectedMission.id)) {
            selectedMissions.push(selectedMission.id)
        }
    }

    return selectedMissions
}

function renderMissions() {
    let getImgs = ""
    for (let i = 0; i < selectedMissions.length; i++) {
        getImgs += `<img src="./images/missions/${selectedMissions[i]}.png" id="img${i}">`
    }
    missions_container.innerHTML = getImgs
}

function setActiveMission(s1, s2) {
    const all = document.querySelectorAll("div img")
    for (let i = 0; i < all.length; i++) {
        all[i].style.border = "none"
        all[i].style.borderRadius = "none"
    }

    const first = document.querySelector(`#img${s1}`)
    const second = document.querySelector(`#img${s2}`)

    first.style.border = "thick solid #FF2626"
    first.style.borderRadius = "25px"
    second.style.border = "thick solid #FF2626"
    second.style.borderRadius = "25px"
}

function checkForSeasonChange(prevSeason, currSeason, mission1, mission2) {
    if (prevSeason != currSeason) {
        season_points[prevSeason] = calcSeasonMissions(mission1, mission2)
        updateSeasonScore(season_points[prevSeason], prevSeason)
    }
}

function calcSeasonMissions(m1, m2) {
    return (getMissionScore(selectedMissions[m1]) + getMissionScore(selectedMissions[m2]))
}

function getMissionScore(mission) {
    let mission_score = 0
    switch (mission) {
        case 'borderlands':
            return mission_score += calcBorderlandsMission()
        case 'sleepy_valley':
            return mission_score += calcSleepyValleyMission()
        case 'watering_potatoes':
            return mission_score += calcWateringPotatoesMission()
        case 'edge_of_the_forest':
            return mission_score += calcEdgeOfTheForestMission()
        default:
            console.log("error getting mission score")
    }
}

function updateSeasonScore(score, season) {
    if (season == 0) {
        spring_points.innerHTML = score
    }
    else if (season == 1) {
        summer_points.innerHTML = score
    }
    else if (season == 2) {
        autumn_points.innerHTML = score
    }
    else {
        winter_points.innerHTML = score
    }
}

function calcMountainMission() {
    const rows = field.getElementsByTagName('tr')
    let score = 0

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td')

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].className == 'mountain') {
                const hasNeighborAbove = i > 0 && rows[i - 1].getElementsByTagName('td')[j].className != ""
                const hasNeighborBelow = i < rows.length - 1 && rows[i + 1].getElementsByTagName('td')[j].className != ""
                const hasNeighborLeft = j > 0 && cells[j - 1].className != ""
                const hasNeighborRight = j < cells.length - 1 && cells[j + 1].className != ""

                if (hasNeighborAbove && hasNeighborBelow && hasNeighborLeft && hasNeighborRight) {
                    score += 1
                }
            }
        }
    }

    console.log("points for surrounded mountains: " + score)

    return score
}

function calcBorderlandsMission() {
    const rows = table.getElementsByTagName('tr')
    const cols = rows[0].getElementsByTagName('td').length
    const rowCount = rows.length

    let fullRowCount = 0
    let fullColCount = 0

    for (let i = 0; i < rowCount; i++) {
        let fullRow = true
        for (let j = 0; j < cols; j++) {
            if (rows[i].getElementsByTagName('td')[j].className == '') {
                fullRow = false
                break
            }
        }
        if (fullRow) {
            fullRowCount++
        }
    }

    for (let j = 0; j < cols; j++) {
        let fullCol = true
        for (let i = 0; i < rowCount; i++) {
            if (rows[i].getElementsByTagName('td')[j].className == '') {
                fullCol = false
                break
            }
        }
        if (fullCol) {
            fullColCount++
        }
    }

    console.log("points for borderlands: " + ((fullRowCount + fullColCount) * 6))

    return ((fullRowCount + fullColCount) * 6)
}

function calcSleepyValleyMission() {
    const rows = field.getElementsByTagName('tr')
    let count = 0

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td')
        let forestCount = 0

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].className == 'forest') {
                forestCount++;
            }
        }

        if (forestCount == 3) {
            count++
        }
    }

    console.log("points for sleepy valley: " + (count * 4))

    return (count * 4)
}

function calcWateringPotatoesMission() {
    const rows = field.getElementsByTagName('tr')
    let score = 0

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td')

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].className === 'water') {
                if (
                    (i > 0 && rows[i - 1].getElementsByTagName('td')[j].className == 'farm') ||
                    (i < rows.length - 1 && rows[i + 1].getElementsByTagName('td')[j].className == 'farm') ||
                    (j > 0 && cells[j - 1].className == 'farm') ||
                    (j < cells.length - 1 && cells[j + 1].className == 'farm')
                ) {
                    score += 2
                }
            }
        }
    }

    console.log("points for watering potatoes: " + score)

    return score
}

function calcEdgeOfTheForestMission() {
    const rows = field.getElementsByTagName('tr')
    let score = 0

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td')

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].className == 'forest') {
                if (i == 0 || i == rows.length - 1 || j == 0 || j == cells.length - 1) {
                    score += 1
                }
            }
        }
    }

    console.log("points for edge of the forest: " + score)

    return score
}

function calcTotalPoints() {
    let sum = season_points.reduce((a, b) => {
        return a + b
    })
    console.log(sum)
    return sum
}

function endOfGame() {
    canPlace = false
    season_points[3] = calcSeasonMissions(3, 0)
    updateSeasonScore(season_points[3], 3)
    time_left.innerHTML = `Time left from season: 0/${SEASON_TIME}`
    let total = calcTotalPoints() + calcMountainMission()
    openModal(modal, total)
    console.log("endOfGame function end")
}

return_btn.addEventListener('click', () => {
    menu_div.style.display = 'block'
    game_div.style.display = 'none'
})

return_btn2.addEventListener('click', () => {
    menu_div.style.display = 'block'
    game_div.style.display = 'none'
    closeModal(modal)
})

function openModal(modal, total) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')

    end_text.innerHTML = `Your total score: ${total}`

}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}