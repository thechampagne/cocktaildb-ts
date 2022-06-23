/*
 * Copyright 2022 XXIV
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BASE_URL = "https://thecocktaildb.com/api/json/v1/1/";

export class CocktailDBException extends Error {
  constructor(message: string) {
    super(message);
  }
}

/**
 * Search cocktail by name.
 *
 * @param  {string} s Cocktail name
 * @return            List of objects
 * @throws CocktailDBException on failure
 */
export async function search(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}search.php?s=${encodeURI(s)}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * Search cocktails by first letter.
 *
 * @param  {string} s Cocktail letter
 * @return            List of objects
 * @throws CocktailDBException on failure
 */
export async function searchByLetter(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}search.php?f=${s}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * Search ingredient by name.
 *
 * @param  {string} s Ingredient letter
 * @return            object
 * @throws CocktailDBException on failure
 */
export async function searchIngredient(s: string): Promise<any> {
  try {
    let req = await fetch(`${BASE_URL}search.php?i=${encodeURI(s)}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.ingredients != null &&
        typeof data.ingredients !== "undefined" &&
        data.ingredients != ""
      ) {
        return data.ingredients[0];
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * Search cocktail details by id.
 *
 * @param  {number} i Cocktail id.
 * @return            object
 * @throws CocktailDBException on failure
 */
export async function searchByID(i: number): Promise<any> {
  try {
    let req = await fetch(`${BASE_URL}lookup.php?i=${i}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks[0];
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * Search ingredient by ID.
 *
 * @param  {number} i Ingredient id.
 * @return            object
 * @throws CocktailDBException on failure
 */
export async function searchIngredientByID(i: number): Promise<any> {
  try {
    let req = await fetch(`${BASE_URL}lookup.php?iid=${i}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.ingredients != null &&
        typeof data.ingredients !== "undefined" &&
        data.ingredients != ""
      ) {
        return data.ingredients[0];
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * Search a random cocktail.
 *
 * @return      random cocktail
 * @throws CocktailDBException on failure
 */
export async function random(): Promise<any> {
  try {
    let req = await fetch(`${BASE_URL}random.php`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks[0];
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * Filter by ingredient.
 *
 * @param  {string} s Ingredient name.
 * @return            List of objects
 * @throws CocktailDBException on failure
 */
export async function filterByIngredient(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}filter.php?i=${encodeURI(s)}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * Filter by alcoholic.
 *
 * @param  {string} s alcoholic.
 * @return            List of objects
 * @throws CocktailDBException on failure
 */
export async function filterByAlcoholic(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}filter.php?a=${encodeURI(s)}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * Filter by category.
 *
 * @param  {string} s Category name.
 * @return            List of objects
 * @throws CocktailDBException on failure
 */
export async function filterByCategory(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}filter.php?c=${encodeURI(s)}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * Filter by glass.
 *
 * @param  {string} s Glass name.
 * @return            List of objects
 * @throws CocktailDBException on failure
 */
export async function filterByGlass(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}filter.php?g=${encodeURI(s)}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * List the categories filter.
 *
 * @return   List of categories
 * @throws CocktailDBException on failure
 */
export async function categoriesFilter(): Promise<Array<string>> {
  try {
    let req = await fetch(`${BASE_URL}list.php?c=list`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        let dataList: Array<string> = [];
        data.drinks.forEach((filter: any) => {
          dataList.push(filter.strCategory);
        });
        return dataList;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * List the glasses filter.
 *
 * @return   List of glasses
 * @throws CocktailDBException on failure
 */
export async function glassesFilter(): Promise<Array<string>> {
  try {
    let req = await fetch(`${BASE_URL}list.php?g=list`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        let dataList: Array<string> = [];
        data.drinks.forEach((filter: any) => {
          dataList.push(filter.strGlass);
        });
        return dataList;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * List the ingredients filter.
 *
 * @return   List of ingredients
 * @throws CocktailDBException on failure
 */
export async function ingredientsFilter(): Promise<Array<string>> {
  try {
    let req = await fetch(`${BASE_URL}list.php?i=list`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        let dataList: Array<string> = [];
        data.drinks.forEach((filter: any) => {
          dataList.push(filter.strIngredient1);
        });
        return dataList;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}

/**
 * List the alcoholic filter.
 *
 * @return   List of alcoholic filters
 * @throws CocktailDBException on failure
 */
export async function alcoholicFilter(): Promise<Array<string>> {
  try {
    let req = await fetch(`${BASE_URL}list.php?a=list`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        let dataList: Array<string> = [];
        data.drinks.forEach((filter: any) => {
          dataList.push(filter.strAlcoholic);
        });
        return dataList;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new CocktailDBException(err);
  }
}