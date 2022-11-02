//BookStore has been moved to data.js 

const renderHeader = () => document.querySelector('h1').textContent = bookStore.name;

const renderFooter = () => {
    const footerDiv = document.querySelectorAll('footer div');
    
    footerDiv[0].textContent = bookStore.name
    footerDiv[1].textContent = bookStore.address
    footerDiv[2].textContent = bookStore.hours
}

const renderBook = (book) => {

    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const pPrice = document.createElement('p')
    const pAuthor = document.createElement('p')
    const img = document.createElement('img')
    const btn = document.createElement('button')

    h3.textContent = book.title;
    pPrice.textContent = book.price;
    pAuthor.textContent = book.author;
    btn.textContent = 'Delete';
    img.src = book.imageUrl;
    li.className = 'list-li'

    li.append(h3, pPrice, pAuthor, img, btn);
    document.querySelector('#book-list').append(li);
    }
 
renderHeader()
renderFooter()
bookStore.inventory.forEach(renderBook)