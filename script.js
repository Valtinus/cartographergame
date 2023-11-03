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

const ROWS = 11
const COLS = 11

const SEASON_TIME = 7
let timer = 0

let points = [0, 0, 0, 0]
let total_points = 0


play_btn.addEventListener('click', startGame)


let current_element

const selectedMissions = getRandomMissions(missions)

function startGame() {
    timer = 0
    total_points = 0
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

                const cell = rows[cellY].getElementsByTagName('td')[cellX];
                if (cell.className !== '') {
                    alert('Wrong placement')
                    return
                }
            }
        }
    }

    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            const cell = rows[y + i].getElementsByTagName('td')[x + j];
            if (shape[i][j] === 1) {
                cell.className = element.type
            }
        }
    }
    timer += element.time
    newRound()
}

function newRound() {
    if (timer < SEASON_TIME) {
        current_season.innerHTML = `Current season: ${seasons[0]}`
        setActiveMission(0, 1)
    }
    else if (timer >= SEASON_TIME && timer < 2 * SEASON_TIME) {
        current_season.innerHTML = `Current season: ${seasons[1]}`
        setActiveMission(1, 2)
    }
    else if (timer >= 2 * SEASON_TIME && timer < 3 * SEASON_TIME) {
        current_season.innerHTML = `Current season: ${seasons[2]}`
        setActiveMission(2, 3)
    }
    else if (timer >= 3 * SEASON_TIME && timer < 4 * SEASON_TIME) {
        current_season.innerHTML = `Current season: ${seasons[3]}`
        setActiveMission(3, 0)
    }
    else {
        console.log("end")
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

function calcMissions (m1, m2) {
    let total = 0
    
}

function calcBorderlandsMission () {
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

    return (fullRowCount + fullColCount) * 6
}







return_btn.addEventListener('click', () => {
    menu_div.style.display = 'block'
    game_div.style.display = 'none'
})