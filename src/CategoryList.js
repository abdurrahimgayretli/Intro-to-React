import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Baverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ],
    currentCategory: "",
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroup.Item
              onClick={() => this.changeCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}

export default CategoryList;
