////// CALL
const cart1 = {
    value: 0,
    discount: 0,
    getReducedPrice: function() {
      return this.value - (this.value * this.discount);
    }
  }
  
  const cartWithStuff1 = {
    value: 300,
    discount: 0.12,
    products: ["Cherries", "Bananas", "Pineapples"]
  }
  
  console.log("Cart 1: " + cart1.getReducedPrice.call(cartWithStuff1));

  /*  FOR MORE:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call  */



  

////// APPLY
const cart2 = {
    value: 0,
    getPriceWithCurrency: function(discount, currency){
      return `${this.value - (this.value * discount)} ${currency}`  
    }  
  }  
  
  const cartWithStuff2 = {
    value: 300,  
    products: ["Cherries", "Bananas", "Pineapples"]
  }  
  
  console.log("Cart 2: " + cart2.getPriceWithCurrency.apply(cartWithStuff2, [0.15,'USD']));

  /*  FOR MORE:     https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Function/apply  */





////// BIND
const cart3 = {
    value: 0,
    getPriceWithCurrency: function(discount, currency){
      return `${this.value - (this.value * discount)} ${currency}`
    }
  }
  
  const cartWithStuff3 = {
    value: 300,
    products: ["Cherries", "Bananas", "Pineapples"]
  }
  
  const getPrice = cart3.getPriceWithCurrency.bind(cartWithStuff3, 0.2, 'PLN');
  
  console.log("Cart 3: "  +getPrice());
  console.log(cart3.getPriceWithCurrency.bind(cartWithStuff3, 0.2, 'PLN'));

    /*  FOR MORE:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind  */