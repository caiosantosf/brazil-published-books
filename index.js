//let month = document.getElementById("selectMonth").value;
//let year = document.getElementById("selectYear").value;

let params = {
  searchMode: "any",
  searchFields: "FormattedKey,RowKey,Authors,Title,Imprint",
  queryType: "full",
  search: "",
  top: 1000,
  select:
    "Authors,Date,Imprint,Title",
  skip: 0,
  count: true,
  filter: "",
  orderby: "Date desc",
  facets: [],
};

fetch(
  "https://isbn-search-br.search.windows.net/indexes/isbn-index/docs/search?api-version=2016-09-01",
  {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "api-key": "100216A23C5AEE390338BBD19EA86D29",
    }, 
    body: JSON.stringify(params),
  }
)
  .then((response) => response.json())
  .then((data) => {
    let container = document.getElementById("resultContainer");

    //document.getElementById('count').innerHTML = `Encontrados: ${data["@odata.count"]}`

    data.value.forEach((book) => {
      container.innerHTML += `${book.Date.substr(0, 10)} - ${book.Title} (${
        book.Authors[0]
      }, ${book.Imprint}) <br>`;
    });

    document.getElementById("loader").style.display = "none"
  });
