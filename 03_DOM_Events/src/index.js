document.addEventListener('DOMContentLoaded', () => {
renderHeader()
renderFooter()
renderToggle()

document.querySelector('h1').addEventListener('click', () => console.log("HELlo!"))


function renderToggle() {
  const toggleButton = document.createElement('button')
  toggleButton.textContent = "toggle Store"
  document.querySelector('#toggle').append(toggleButton)
  toggleButton.addEventListener('click', switchPage)
}

function switchPage(e) {
    e.preventDefault();
    redner
}

// Renders Header
function renderHeader(){
    document.querySelector('h1').textContent = bookStore.name
}
// Renders Footer
function renderFooter(){
    const footerDivs = document.querySelectorAll('footer div')
    footerDivs[0].textContent = bookStore.name
    footerDivs[1].textContent = bookStore.address
    footerDivs[2].textContent = bookStore.hours
}

function renderBookCard(cardData) {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const pAuthor = document.createElement('p')
    const pPrice = document.createElement('p')
    const img = document.createElement('img')
    const btn = document.createElement('button')

    h3.textContent = cardData.title
    pAuthor.textContent = cardData.author
    pPrice.textContent = `$${cardData.price}`
    btn.textContent = 'Delete'

    img.src = cardData.imageUrl
    li.className = 'list-li'

    li.append(h3,pAuthor,pPrice,img,btn)
    document.querySelector('#book-list').append(li)

    btn.addEventListener('click', () => li.remove())
}

function submitForm(e) {
    e.preventDefault()
    console.log(bookStore.inventory)
    
    const newBook = {
          id: bookStore.inventory.length + 1,
          title: e.target.title.value,
          author: e.target.author.value,
          price: e.target.price.value,
          inventory: e.target.inventory.value,
          imageUrl: e.target.imageUrl.value,
          reviews: []
    }

    bookStore.inventory.push(newBook);

    renderBookCard(newBook);
    console.log(newBook)
}

function newStore() {
    const newStore = {
        location: "NYC",
        address:'Flatiron School',
        number: 34123412341234,
        name: 'Flatiron',
        hours: 'Monday - Friday 9am - 6pm',
        inventory: [{},{},{}]
    }
} 


document.querySelector('#book-form').addEventListener('submit', submitForm)
bookStore.inventory.forEach(renderBookCard)
});