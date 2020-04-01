const generateBtn = document.querySelector('button.generate')
const changeColorsBtn = document.querySelector('button.change-colors')
const numRowInput = document.querySelector('input#row-nmbr')
const numColumnInput = document.querySelector('input#clmn-nmbr')
const contentBlock = document.querySelector('.content')

// Generate Event
generateBtn.addEventListener('click', function () {
    let numRow = +numRowInput.value
    let numColumn = +numColumnInput.value

    if (numColumn && numRow) {

        if (contentBlock.innerHTML !== '') {
            contentBlock.innerHTML = ''
        }

        generateBlocks(numColumn, numRow)
    }
})

function generateBlocks(columnNum, rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let rowBlock = generateSingleBlock('row-blocks-container')

        for (let j = 0; j < columnNum; j++) {
            let singleBlock = generateSingleBlock('single-block')

            singleBlock.style.width = contentBlock.offsetWidth / columnNum + 'px'
            rowBlock.appendChild(singleBlock)
        }

        contentBlock.appendChild(rowBlock)
    }
}

function generateSingleBlock(className) {
    const block = document.createElement('div')
    block.setAttribute('class', className)

    return block
}

contentBlock.addEventListener('click', function (event) {
    if (event.target.classList.contains('single-block')) {
        event.target.classList.toggle('bg-color')
    }
})

changeColorsBtn.addEventListener('click', (event) => {
    let blocksList = document.querySelectorAll('.single-block')
    blocksList.forEach(item => {
        item.classList.toggle('bg-color')
    })
})
