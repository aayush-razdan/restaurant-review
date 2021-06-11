import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import ItemModal from "./ItemModal";

class ItemCombine extends Component {
  render() {
    return (
      <div>
        <ItemModal />
        <ShoppingList />
      </div>
    );
  }
}

export default ItemCombine;
