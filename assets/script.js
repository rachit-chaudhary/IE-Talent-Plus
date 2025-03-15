const talentView = document.getElementById('talentView')
const competitorView = document.getElementById('competitorView')

const leftPanelHeading = document.getElementById('leftPanelHeading')
const leftPanelUL = document.getElementById('leftPanelUL')

const imageContainer = document.querySelector('#imageContainer')
const descriptionText = document.getElementById('descriptionText')

talentView.addEventListener('click', activateTalentView)
competitorView.addEventListener('click', activateCompetitorView)

const images = {
    "0": "./assets/images/talent-distribution-location.png",
    "1": "./assets/images/talent-designation.png",
    "2": "./assets/images/talent-salary.png",
    "3": "./assets/images/talent-notice-period.png",
    "4": "./assets/images/companies-hired.png",
    "5": "./assets/images/diversity-comparision.png",
    "6": "./assets/images/tenure-comparision.png",
    "7": "./assets/images/compensation-benchmarking.png"
}

const descriptions = {
    "0": "Identify the cities and organizations where the talent that you need is currently working",
    "1": "Gain a comprehensive view of the variety of roles your desired talent works in",
    "2": "Understand the salary and expected salary hike benchmarking across multiple variables",
    "3": "Understand how fast you can acquire talent from the market with insight on notice period",
    "4": "Visualize talent streams to identify talent gains and losses for you and your competitors",
    "5": "Compare diversity and premium graduate hiring with your peers to identify areas of improvement",
    "6": "Get percentage-wise breakdown of the employee tenure in your org in vis-a-vis your competitors",
    "7": "Understand the experience-wise pay gap at your org to craft a compelling compensation plan"
}

leftPanelUL.addEventListener('click', function (event) {
    if (event.target.classList.contains('list-options')) {
        document.querySelectorAll('.list-options').forEach(li => li.classList.remove('active'))
        event.target.classList.add('active')

        const key = event.target.getAttribute("data-key")
        imageContainer.src = images[key]

        descriptionText.textContent = descriptions[key]
    }
})

function activateTalentView() {
    talentView.classList.add('active')
    competitorView.classList.remove('active')

    leftPanelUL.innerHTML = ""

    const items = [
        "Talent Distribution by Location and Company",
        "Talent Distribution by Designation",
        "Salary Benchmarking across Experience Levels",
        "Notice Period Distribution"
    ]

    generateListItems(items, 0)
}

function activateCompetitorView() {
    competitorView.classList.add('active')
    talentView.classList.remove('active')

    leftPanelUL.innerHTML = ""

    const items = [
        "Companies You Hired From and Lost Talent to",
        "Diversity & Premium College Hiring Comparison",
        "Employee Tenure Comparison",
        "Compensation Benchmarking with selected Peers"
    ]

    generateListItems(items, 4)
}

// Function to generate list items dynamically
function generateListItems(items, keyOffset) {
    items.forEach((item, index) => {
        let li = document.createElement('li')
        li.classList.add('list-options')
        if (index === 0) li.classList.add('active') // Set first item as active
        li.setAttribute('data-key', index + keyOffset)
        li.textContent = item
        leftPanelUL.appendChild(li)
    })

    // Set the default image for the first item
    imageContainer.src = images[keyOffset]
}

// Activate the Talent View on initial load
activateTalentView()
