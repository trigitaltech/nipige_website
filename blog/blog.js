const data = [
    {
        "id": "1",
        "para": "Nipige - A Multi-Vendor Online Selling Platform",
        "author": "Pavan",
        "imgLink": "abs_blogs_045"
    },
    {
        "id": "2",
        "para": "The Benefits of a Resilient Digital Enablement &amp; Multiple Business Deliverance Platform.",
        "author": "Pavan",
        "imgLink": "img2"
    },
    {
        "id": "3",
        "para": "The Role &amp; Essence of Digitalization for Business Conduct",
        "author": "Pavan",
        "imgLink": "img3"
    },
    {
        "id": "4",
        "para": "Kalam Rentals &amp; Asset Management Services.",
        "author": "Pavan",
        "imgLink": "img4"
    },
    {
        "id": "5",
        "para": "Online Hyperlocal markets are the future of local business deliverance",
        "author": "Pavan",
        "imgLink": "img5"
    },
    {
        "id": "6",
        "para": "Multi-vendor online selling platforms and e-market places could change the prospects of small-time businesse.",
        "author": "Pavan",
        "imgLink": "img6"
    },
    {
        "id": "7",
        "para": "Business visibility and customer access are better through e-market places",
        "author": "Pavan",
        "imgLink": "img7"
    },
    {
        "id": "8",
        "para": "A market for all is transforming the concept of online buying and selling",
        "author": "Pavan",
        "imgLink": "img8"
    }
]


const searchBlog = (e) => {
    let filter = document.querySelector('#myInput').value.toLowerCase();
    let resultDiv = document.querySelector(".container.card_container.mt-5");
    const sectionDiv = document.querySelector("section > .container")
    console.log("Key: " + filter)
    let cards = data;
    let match = [];
    

    for (let x = 0; x < cards.length; x++) {
        if (cards[x].para.toLowerCase().includes(filter)) {
            match.push(cards[x]);
        }
    }

    if (resultDiv) {
        sectionDiv.removeChild(resultDiv);
    } else {
        const notFound = document.querySelector(".not-found");
        sectionDiv.removeChild(notFound);
        return displayCards(match);
    }

    if (match.length > 0) {
        displayCards(match);
    } 
    else {
        // sectionDiv.removeChild(resultDiv);
        // displayCards(cards);
        const notFound = document.createElement("div");
        notFound.classList.add("not-found");
        notFound.innerHTML = "<h3>Found nothing...</h3>";
        sectionDiv.appendChild(notFound);
    }
}

const displayCards = (arr, isSearch) => {
    const container = document.querySelector("section > .container");

    const newNode = document.createElement("div");
    newNode.setAttribute("class", "container card_container mt-5");


    let resultDiv = document.querySelector(".container.card_container.mt-5");

    
    if (resultDiv) {
        const sectionDiv = document.querySelector("section > .container")
        sectionDiv.removeChild(resultDiv);
    }

    arr.forEach((elem, index) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("card1");

        newDiv.innerHTML += `
            <img class="card_img" src="img/${elem.imgLink}.jpg">
            <div class="card">
            <div class="content">
                <a href="card${index+1}.html">
                <div class="card__title">
                    <p id="myUL">${elem.para}</p>
                </div>
                <div class="card__description">
                    <p>Read More</p>
                </div>
                </a>
                <div class="card__footer">
                <div class="author"> Published By ${elem.author}</div>
                </div>
            </div>
            </div>
        `

        newNode.appendChild(newDiv);
    })

    container.appendChild(newNode);
}

displayCards(data);