document.addEventListener("DOMContentLoaded", function () {
    const reportForm = document.getElementById("report-form");
    const itemList = document.getElementById("item-list");
    const searchBox = document.getElementById("search-box");

    let items = [];

    
    window.showReportSection = function () {
        document.getElementById("home-section").classList.add("hidden");
        document.getElementById("report-section").classList.remove("hidden");
    };

    
    window.showSearchSection = function () {
        document.getElementById("home-section").classList.add("hidden");
        document.getElementById("search-section").classList.remove("hidden");
    };

    
    window.goHome = function () {
        document.getElementById("home-section").classList.remove("hidden");
        document.getElementById("report-section").classList.add("hidden");
        document.getElementById("search-section").classList.add("hidden");
    };

    
    reportForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const itemName = document.getElementById("item-name").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;
        const date = document.getElementById("date").value;
        const status = document.getElementById("status").value;

        const item = { itemName, description, location, date, status };
        items.push(item);

        displayItems(items);

        reportForm.reset();
        goHome();
    });

    
    function displayItems(filteredItems) {
        itemList.innerHTML = "";
        filteredItems.forEach((item) => {
            const div = document.createElement("div");
            div.classList.add("item");
            div.innerHTML = `
                <h3>${item.itemName} (${item.status})</h3>
                <p><strong>Description:</strong> ${item.description}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Date:</strong> ${item.date}</p>
                <hr>
            `;
            itemList.appendChild(div);
        });
    }

    
    searchBox.addEventListener("input", function () {
        const searchText = searchBox.value.toLowerCase();
        const filteredItems = items.filter(item =>
            item.itemName.toLowerCase().includes(searchText) ||
            item.location.toLowerCase().includes(searchText)
        );
        displayItems(filteredItems);
    });
});
