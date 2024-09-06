import React, { useState, useRef } from 'react';
import './home2.css';

function Home2() {
  const [extraItemsVisible, setExtraItemsVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const searchRef = useRef(null);
  const flowersRef = useRef(null);
  const cakesRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchRef.current.value.toLowerCase();
    if (query.includes('flower')) {
      flowersRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('cake')) {
      cakesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
   
  };

  const handleViewMore = () => {
    setExtraItemsVisible(!extraItemsVisible);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
    alert('Item added to cart!');
  };

  const addToWishlist = () => {
    setWishlistCount(wishlistCount + 1);
    alert('Item added to wishlist!');
  };
  
  

  return (
    <div className="home-body">
     
      <nav className="home-navbar">
        <div className="home-logo">@ Gift Express</div>
        <form onSubmit={handleSearch} className="home-searchBar">
          <input
            type="text"
            placeholder="Search Flowers, Cakes, Gifts etc."
            className="home-searchInput"
            ref={searchRef}
          />
          <button type="submit">🔍</button>
        </form>
        <div className="home-navLinks">
          <select className="home-select">
            <option value="select-city">Select City</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Andhra">Andhra</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
          <div className="home-cart"><button type="cart">🛒 Cart-{cartCount}</button></div>
          <div className="home-wishlist"><button type="wish list">❤️ Wishlist-{wishlistCount}</button></div>
          <div className="order"><button type="order">orders-{wishlistCount}</button></div>
        </div>
      </nav>

      
      <div className="home-banner">
        <h1 className="home-bannerHeading">Best Gift For You</h1>
        <p>place your order</p>
        <button className="home-celebrateBtn">See Gifts</button>
      </div>

      
      <div className="home-categories">
        <h2 className="home-categoriesHeading">Top Categories</h2>
        <div className="home-categoryList">
          <div className="home-categoryItem" ref={flowersRef}>
            <img
              src="https://toppng.com/uploads/preview/flowers-gift-115477148906jldt3keb0.jpg"
              alt="Flowers"
              className="home-categoryImage"
            />
            Flowers
          </div>
          <div className="home-categoryItem" ref={cakesRef}>
            <img
              src="https://cakexhub.oadigitalhub.com/wp-content/uploads/2024/02/chocolate-rose-designer-cake-half-kg_1.webp"
              alt="Cakes"
              className="home-categoryImage"
            />
            Cakes
          </div>
          <div className="home-categoryItem">
            <img
              src="https://www.sendgiftsahmedabad.com/pub/media/catalog/product/cache/fe2a752764b2352ecdbaaa90a203554f/1/9/1981.jpg"
              alt="Chocolates"
              className="home-categoryImage"
            />
            Chocolates
          </div>
          <div className="home-categoryItem">
            <img
              src="https://www.shutterstock.com/image-photo/elegant-jewelry-set-jewellery-gemstones-260nw-2340314531.jpg"
              alt="Combos"
              className="home-categoryImage"
            />
            Necklace
          </div>
          <div className="home-categoryItem">
            <img
              src="https://www.aviationkart.com/cdn/shop/files/S240f6467883a4517873a3ad88f0b8244C_2048x2048.jpg?v=1691223437"
              alt="Plants"
              className="home-categoryImage"
            />
            Watches<p></p>
          </div>
          <div className="home-categoryItem">
            <img
              src="https://ih1.redbubble.net/image.4680695148.4413/clk3q,white,white,1000x-c,115,0,675,900.jpg"
              alt="Plants"
              className="home-categoryImage"
            />
            Clocks
          </div> 
           <div className="home-categoryItem">
            <img
              src="https://i.etsystatic.com/30978758/r/il/0bcc65/3707444321/il_570xN.3707444321_758t.jpg"
              alt="Plants"
              className="home-categoryImage"
            />
            Key Chains
          </div> 
          
        </div>
        <button className="home-viewAllBtn" onClick={handleViewMore}>
          {extraItemsVisible ? 'View Less' : 'View All'}
        </button>
        {extraItemsVisible && (
          <div className="home-extraItems">
           
            <div className="home-extraItem">
              <img
                src="https://www.fnp.com/images/pr/m/v200/sip-of-love-birthday-mug-hand-delivery.jpg"
                alt="Extra Item 1"
                className="home-categoryImage"
              />
              <div className="home-itemDetails">
                <p>Birthday gifts</p>
                <p>Price 650/-</p>
                <button onClick={addToWishlist}>❤️ Wishlist</button><br></br><br></br>
                <button onClick={addToCart}>🛒 Add to Cart</button>
               
              </div>
            </div>
            <div className="home-extraItem">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUs9PnlUmnuTbcrW2CdAifEVASQnOdIBEzRA&s"
                alt="Extra Item 1"
                className="home-categoryImage"
              />
              <div className="home-itemDetails">
                <p>Mother's day gifts</p>
                <p>Price 580/-</p>
                <button onClick={addToWishlist}>❤️ Wishlist</button><br></br><br></br>
                <button onClick={addToCart}>🛒 Add to Cart</button>
              </div>
            </div>
            <div className="home-extraItem">
              <img
                src="https://images.meesho.com/images/products/121246153/30nhm_512.webp"
                alt="Extra Item 1"
                className="home-categoryImage"
                />
              <div className="home-itemDetails">
                <p>Father's day gifts</p>
                <p>Price 850/-</p>
                <button onClick={addToWishlist}>❤️ Wishlist</button><br></br><br></br>
                <button onClick={addToCart}>🛒 Add to Cart</button>
              </div>
            </div>
            
            <div className="home-extraItem">
              <img
                src="https://img.etimg.com/thumb/width-420,height-315,imgsize-43134,resizemode-75,msid-107092941/top-trending-products/gifts/frame-your-love-thoughtful-and-romantic-photo-frame-gift-ideas-for-valentines-day/photoframes-for-valentines-day.jpg"
                alt="Extra Item 1"
                className="home-categoryImage"
              />
              <div className="home-itemDetails">
                <p>Wedding gifts</p>
                <p>Price 2999/-</p>
                <button onClick={addToWishlist}>❤️ Wishlist</button><br></br><br></br>
                <button onClick={addToCart}>🛒 Add to Cart</button>
              </div>
            </div>
            <div className="home-extraItem">
              <img
                src="https://nestasia.in/cdn/shop/articles/2_Blog_Banners_1080x1080_2_15aba1da-9f01-4398-887d-fbc78a506d6a.png?v=1710757532"
                alt="Extra Item 2"
                className="home-categoryImage"
              />
              <div className="home-itemDetails">
                <p>Customized photo frames</p>
                <p>Price 3000/-</p>
                <button onClick={addToWishlist}>❤️ Wishlist </button><br></br><br></br>
                <button onClick={addToCart} className='c'>🛒 Add to Cart</button>
              </div>
            
            </div>
            
          </div>
        )}
      </div>

     
      <footer className="home-footer">
        <p>Online Customized Gifts Delivery India - Send Gifts Online Sameday & Midnight Service</p>
        <p>Get Flowers, Cakes, Chocolate & Gifts in 7-8 hours delivery in India.</p>
        <p>contact details ph- 9000470090</p>
      </footer>
    </div>
  );
}

export default Home2;
