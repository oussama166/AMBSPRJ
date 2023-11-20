import data from "@/public/data/dataBackup.json";
// searching if this item is valid
export const searchOccurnece = (searchCible, CibleRoute = false) => {
  let searchResults = [];
  if (searchCible === "") {
    return [];
  }

  Object.keys(data).forEach((category) => {
    if (category !== "Nacelle") {
      Object.keys(data[category]).forEach((subcategory) => {
        // Filter items in the current subcategory based on Designation
        data[category][subcategory].filter((item) => {
          if (CibleRoute === false) {
            console.log(item.Designation.search(searchCible));
            if (
              item.Designation.search(searchCible) != -1 ||
              item.Info.find((elem) => elem === searchCible)
            ) {
              searchResults.push(item);
            }
          } else {
            if (item.id === searchCible) {
              searchResults.push(item);
            }
          }
        });
      });
    }
  });
  return searchResults;
};
export const searchOccurenceBig = (
  MainCategory = "",
  categorie = "",
  type = ""
) => {
  if (type === "") {
    return data[MainCategory][categorie];
  }
  return data[MainCategory][categorie][type];
};
export const searchCible = (searchCible) => {
  const allProducts = [];
  Object.keys(data[searchCible]).map((elem) => {
    const dataObj = data[searchCible][elem];
    allProducts.push({
      title: elem,
      data: dataObj,
    });
  });
  return allProducts;
};

export const conbineSearch = (MainCategory, categorie) => {
  const allData = [];
  // get data from the electrique and the diesel side
  let electrique = searchOccurenceBig(MainCategory, categorie, "electrique");
  electrique.map((elem) => {
    elem["typeObj"] = "electrique";
    allData.push(elem);
  });
  let diesel = searchOccurenceBig(MainCategory, categorie, "diesel");
  diesel.map((elem) => {
    elem["typeObj"] = "diesel";
    allData.push(elem);
  });
  return allData;
};
