const router = require("express").Router();
const { request } = require("express");
const products = require("../data");

//Getting all the products by category or search criteria.
//If the user filters products by category, then filter the products only that match the category
//or if the user searchs products in search, then filter the products only that includes the search criteria
//ortherwise return all the products
router.get("/", (req, res) => {
  let { category, searchInput } = req.query;
  let filteredProducts = [];

  //filtering with category
  if (category) {
    filteredProducts = products.filter((product) =>
      product.categories.includes(category)
    );
  }

  //Searching with the search criteria
  //user might enter search criteria that includes multiple words like "nike shoe"
  //in those cases, we need to split the search criteria into words like ["nike", "shoe"] and search the products that match either of them
  if (searchInput) {
    const splittedSearchInput = searchInput.split(" ");
    filteredProducts = products.filter((product) => {
      let shouldInclude = false;

      //looping through all the products see if their titles and categories match one of the splitted search fields
      //if so, put them in the list
      splittedSearchInput.forEach((input) => {
        shouldInclude =
          product.title.toLowerCase().includes(input.toLowerCase()) ||
          product.categories.includes(input.toLowerCase());
      });

      return shouldInclude;
    });
  }

  //no category and search fields, then return all the products
  if (!category && !searchInput) {
    filteredProducts = products;
  }
  //return the filtered products
  res.status(200).json(filteredProducts);
});

//getting the category names filtered with user search criteria  for showing in the search results
router.get("/category_names", (req, res) => {
  let { searchQuery } = req.query;

  searchQuery = searchQuery.toLowerCase();
  const categoryNames = [];

  //looping through all the products and see if the search field matches products titles and category names,
  //if do, add them to the category list if they are not already in list
  products.forEach((product) => {
    product.categories.forEach((category) => {
      category.includes(searchQuery) &&
        !categoryNames.includes(category) &&
        categoryNames.push(category);
    });
  });

  res.status(200).json(categoryNames);
});

//getting the category names for the category list
router.get("/category_names_list", (req, res) => {
  const categoryNames = [];
  products.forEach((product) => {
    !categoryNames.includes(product.categories[0]) &&
      categoryNames.push(product.categories[0]);
  });
  console.log(categoryNames);
  res.status(200).json(categoryNames);
});
module.exports = router;
