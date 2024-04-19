const listItem = [
    {
        name: "Chúa tể của những chiếc nhẫn",
        sale: 15,
        oldprice: 260000,
        price: 221000,
        description: 'Thêm vào giỏ hàng',
        avatar: 'chiecnhan1.jpg'
    },
    {
        name: "Kiêu Hãnh Và Định Kiến (Tái Bản 2021)",
        price: 199000,
        description: 'Thêm vào giỏ hàng',
        avatar: 'kieu-hanh-va-dinh-kien.jpg'
    },
    {
        name: "Giết con chim nhại",
        price: 120000,
        description: `Thêm vào giỏ hàng`,
        avatar: 'giet-chim.jpg'
    },
    {
        name: "Nhà giả kim",
        price: 120000,
        description: `Thêm vào giỏ hàng`,
        avatar: 'Nhagiakim1.jpg'
    },
    {
        name: "Trăm năm cô đơn",
        price: 120000,
        description: `Thêm vào giỏ hàng`,
        avatar: 'tram_nam_co_don-01.jpg'
    },
    {
        name: "Thâm tâm",
        price: 120000,
        description: `Thêm vào giỏ hàng`,
        avatar: 'tham-tam.jpg'
    },


];

const listItemEl = document.getElementById("list-item");
listItemEl.style.display = "flex";
listItemEl.style.backgroundColor = "#ff6c6b";

listItem.forEach((el, index) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.style.flex = "0 0 calc(33.33% - 30px)";
    item.style.border = "1px solid #ccc";
    item.style.padding = "10px";
    item.style.margin = "15px";
    item.style.maxWidth = "200px";
    item.style.height = "400px";
    item.style.display = "flex";
    item.style.flexDirection = "column";
    item.style.backgroundColor = "white";
    item.style.borderRadius = "10px";
    item.style.transition = "transform 0.3s ease";
    item.style.marginBottom = "20px";

    item.addEventListener('mouseenter', function() {
        this.style.transform = "scale(1.05)";
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
    });

    const avatar = document.createElement('img');
    avatar.src = el.avatar;
    avatar.style.maxWidth = "200px";
    avatar.style.maxHeight = "200px";
    avatar.style.display = "block";
    avatar.style.marginBottom = "10px";

    const hr = document.createElement('hr');
    hr.style.width = "100%";

    const h3 = document.createElement('h3');
    h3.textContent = el.name;
    h3.style.textAlign = "center";
    h3.style.height = "30px";

    const priceWrapper = document.createElement('div');
    priceWrapper.style.display = "flex";
    priceWrapper.style.alignItems = "center";
    const priceText = document.createElement('price');
    priceText.textContent = `${el.price.toLocaleString()}đ`;
    priceText.style.fontSize = "20px";
    priceText.style.color = "red";
    priceText.style.fontWeight="bold"
    priceWrapper.appendChild(priceText);

    if (el.sale!== undefined) {
        const saleText = document.createElement('sale');
        saleText.textContent = `-${el.sale.toLocaleString()}%`;
        saleText.style.backgroundColor="red";
        saleText.style.borderRadius="5px";
        saleText.style.fontWeight="bold"
        saleText.style.marginLeft="10px";
        saleText.style.padding="7px"
        saleText.style.color = "white";
        priceWrapper.appendChild(saleText);
    }

    const d = document.createElement('button');
    d.textContent = el.description;
    d.style.width = "100%";
    d.style.textAlign = "center";
    d.style.padding = "10px";
    d.style.border = "none";
    d.style.borderRadius = "5px";
    d.style.marginTop = "auto"; // push button to bottom
    d.style.backgroundColor = "#ff6c6b";
    d.style.color = "white";
    d.style.cursor = "pointer";

    item.appendChild(avatar);
    item.appendChild(hr);
    item.appendChild(h3);
    item.appendChild(priceWrapper);
    if (el.oldprice!== undefined) {
        const oldpriceText = document.createElement('del');
        oldpriceText.textContent = `${el.oldprice.toLocaleString()}đ`;
        item.appendChild(oldpriceText);
    }
    item.appendChild(d);
    listItemEl.appendChild(item);
});