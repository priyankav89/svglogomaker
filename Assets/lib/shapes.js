class Shape {
    constructor() {
      this.logocolor = "";
    }
    // Shape class takes in setColor function
    setColor(colorVar) {
      this.logocolor = colorVar;
    }
  }
  
  // Triangle class inherits properties defined in Shape class
  class Triangle extends Shape {
    render() {
      // Returns polygon with color input
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.logocolor}" />`;
    }
  }
  
  // Square class inherits properties defined in Shape class
  class Square extends Shape {
    render() {
      // Returns polygon with color input
      return `<rect x="73" y="40" width="160" height="160" fill="${this.logocolor}" />`;
    }
  }
  
  // Circle class inherits properties defined in Shape class
  class Circle extends Shape {
    render() {
      // Returns polygon with color input
      return `<circle cx="150" cy="115" r="80" fill="${this.logocolor}" />`;
    }
  }
  
  // Exports classes 
  module.exports = { Triangle, Square, Circle };