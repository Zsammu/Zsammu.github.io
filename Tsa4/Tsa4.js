
    const modal = document.getElementById("modall");
    const modalTitle = document.querySelector(".modalTitle");
    const modalImg = document.querySelector(".modalImg");
    const modalRestoName = document.querySelector(".modalRestoName");
    const modalLeftInfo = document.querySelector(".modalLeftInfo");
    const modalRightInfo = document.querySelector(".modalRightInfo");
    const modalRestoInfo = document.querySelector(".modalRestoInfo");
    const mainMenuButton = document.getElementById("mainMenu");
    const cards = document.querySelectorAll(".cards");
    var activeButton = null;

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const cardTitle = card.querySelector(".cardTitle").innerText;

            if (card.classList.contains("cOne")) {
                modalTitle.innerText = cardTitle;
                modalImg.style.backgroundImage = "url('img/card1-2.jpg')";
                modalRestoName.innerText = cardTitle;
                modalLeftInfo.innerHTML = `
                    <p>235 GLENDALE AVE.</p>
                    <p>MARIDIEN CITY</p>
                    <p>T: 490 49 4000</p>
                    <p>W: GANDG RES</p>
                `;
                modalRightInfo.innerHTML = `
                    <p>CATEGORY: SWISS</p>
                    <p>OPEN: 10AM to 10PM</p>
                    <p>PRICE: $$$</p>
                `;
                modalRestoInfo.innerHTML = `
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ex facere repellendus deleniti! Non alias illo nostrum similique, quaerat dolorum, inventore autem eligendi corrupti, eveniet est ipsum blanditiis? Repellat sunt eligendi dignissimos mollitia, voluptatibus impedit assumenda, ipsam sequi neque dolor nihil illum cumque. Eius aliquid officiis dolorem fugiat hic minus ut quisquam accusantium, voluptatum rem eos, voluptas vitae voluptates deserunt veniam numquam ratione nisi sunt ducimus quam consequuntur beatae incidunt sed.</p>
                    <p>Suscipit ad quae, labore, repellat rerum necessitatibus illo non obcaecati amet ducimus excepturi quos deleniti recusandae doloribus quia vero aliquam molestiae? Quisquam, voluptatibus explicabo recusandae odio modi accusantium vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam blanditiis, non tempore hic ullam eligendi quae! Maxime sit harum perferendis?</p>
                `;
            }

            if (card.classList.contains("cTwo")) {
                modalTitle.innerText = cardTitle;
                modalImg.style.backgroundImage = "url('img/card2-2.jpg')";
                modalRestoName.innerText = cardTitle;
                modalLeftInfo.innerHTML = `
                    <p>76 NO. HIGHLAND AVE.,</p>
                    <p>MIERIDIEN CITY</p>
                    <p>T: 490 24 6709</p>
                    <p>W: GANDG RES</p>
                `;
                modalRightInfo.innerHTML = `
                    <p>CATEGORY: JAPANESE</p>
                    <p>OPEN: 5PM to 10PM</p>
                    <p>PRICE: $$</p>
                `;
                modalRestoInfo.innerHTML = `
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ex facere repellendus deleniti! Non alias illo nostrum similique, quaerat dolorum, inventore autem eligendi corrupti, eveniet est ipsum blanditiis? Repellat sunt eligendi dignissimos mollitia, voluptatibus impedit assumenda, ipsam sequi neque dolor nihil illum cumque. Eius aliquid officiis dolorem fugiat hic minus ut quisquam accusantium, voluptatum rem eos, voluptas vitae voluptates deserunt veniam numquam ratione nisi sunt ducimus quam consequuntur beatae incidunt sed.</p>
                <p>Suscipit ad quae, labore, repellat rerum necessitatibus illo non obcaecati amet ducimus excepturi quos deleniti recusandae doloribus quia vero aliquam molestiae? Quisquam, voluptatibus explicabo recusandae odio modi accusantium vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam blanditiis, non tempore hic ullam eligendi quae! Maxime sit harum perferendis?</p>
            `;
            }

            if (card.classList.contains("cThree")) {
                modalTitle.innerText = cardTitle;
                modalImg.style.backgroundImage = "url('img/card3-2.jpg')";
                modalRestoName.innerText = cardTitle;
                modalLeftInfo.innerHTML = `
                    <p>1213 SHOUTOUT WAY</p>
                    <p>MIERIDIEN CITY</p>
                    <p>T: 490 42 1204</p>
                    <p>W: ILPIATTO</p>
                `;
                modalRightInfo.innerHTML = `
                    <p>CATEGORY: ITALIAN</p>
                    <p>OPEN: 11AM to 11PM</p>
                    <p>PRICE: $$</p>
                `;
                modalRestoInfo.innerHTML = `
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ex facere repellendus deleniti! Non alias illo nostrum similique, quaerat dolorum, inventore autem eligendi corrupti, eveniet est ipsum blanditiis? Repellat sunt eligendi dignissimos mollitia, voluptatibus impedit assumenda, ipsam sequi neque dolor nihil illum cumque. Eius aliquid officiis dolorem fugiat hic minus ut quisquam accusantium, voluptatum rem eos, voluptas vitae voluptates deserunt veniam numquam ratione nisi sunt ducimus quam consequuntur beatae incidunt sed.</p>
                <p>Suscipit ad quae, labore, repellat rerum necessitatibus illo non obcaecati amet ducimus excepturi quos deleniti recusandae doloribus quia vero aliquam molestiae? Quisquam, voluptatibus explicabo recusandae odio modi accusantium vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam blanditiis, non tempore hic ullam eligendi quae! Maxime sit harum perferendis?</p>
            `;
            }

            if (card.classList.contains("cFour")) {
                modalTitle.innerText = cardTitle;
                modalImg.style.backgroundImage = "url('img/card4-2.jpg')";
                modalRestoName.innerText = cardTitle;
                modalLeftInfo.innerHTML = `
                    <p>68 8TH AVE.</p>
                    <p>MIERIDIEN CITY</p>
                    <p>T: 490 69 3080</p>
                    <p>W: PIERREP.RES</p>
                `;
                modalRightInfo.innerHTML = `
                    <p>CATEGORY: FUSHION</p>
                    <p>OPEN: 11AM to 11PM</p>
                    <p>PRICE: $$$</p>
                `;
                modalRestoInfo.innerHTML = `
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ex facere repellendus deleniti! Non alias illo nostrum similique, quaerat dolorum, inventore autem eligendi corrupti, eveniet est ipsum blanditiis? Repellat sunt eligendi dignissimos mollitia, voluptatibus impedit assumenda, ipsam sequi neque dolor nihil illum cumque. Eius aliquid officiis dolorem fugiat hic minus ut quisquam accusantium, voluptatum rem eos, voluptas vitae voluptates deserunt veniam numquam ratione nisi sunt ducimus quam consequuntur beatae incidunt sed.</p>
                <p>Suscipit ad quae, labore, repellat rerum necessitatibus illo non obcaecati amet ducimus excepturi quos deleniti recusandae doloribus quia vero aliquam molestiae? Quisquam, voluptatibus explicabo recusandae odio modi accusantium vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam blanditiis, non tempore hic ullam eligendi quae! Maxime sit harum perferendis?</p>
            `;
            }

            modal.style.display = "grid";
            modal.classList.remove("fadeOut");
            modal.classList.add("active");
        });
    });

    mainMenuButton.addEventListener("click", () => {
        mainMenuButton.style.border = "1px solid yellow";
        modal.classList.add("fadeOut");
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove("active");
        }, 300);
    });

    document.addEventListener("click", (event) => {
        if (event.target !== mainMenuButton) {
            mainMenuButton.style.border = "none";
        }
    });
