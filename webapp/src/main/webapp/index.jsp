<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div id="header">
    <div>
      <a href="#"><img src="img/logo.png" class="logo" alt="logo"></a>
    </div>
    <div class="nav-links">
      <a class="active" href="index.jsp">Home</a>
      <a href="shop.jsp">Shop</a>
      <a href="blog.jsp">Blog</a>
      <a href="about.jsp">About</a>
      <a href="contact.jsp">Contact</a>
      <a href="cart.jsp"><img src="img/bag.png" height="17px" width="17px"></a>
    </div>
  </div>
  
  <div class="main">
    <h4>Trade-in-offer</h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>Save more with coupons & up to 70% off!</p>
    <button>Shop Now</button>
  </div>
  
  <div id="features">
    <div class="fe-box">
      <img src="img/features/f1.png" alt="f1">
      <p class="pf1">Free Shipping</p>
    </div>
    <div class="fe-box">
      <img src="img/features/f2.png" alt="f2">
      <p class="pf2">Online Order</p>
    </div>
    <div class="fe-box">
      <img src="img/features/f3.png" alt="f3">
      <p class="pf3">Save Money</p>
    </div>
    <div class="fe-box">
      <img src="img/features/f4.png" alt="f4">
      <p class="pf4">Promotions</p>
    </div>
    <div class="fe-box">
      <img src="img/features/f5.png" alt="f5">
      <p class="pf5">Happy Sell</p>
    </div>
    <div class="fe-box">
      <img src="img/features/f6.png" alt="f6">
      <p class="pf6">24/7 Support</p>
    </div>
  </div>
  
  <div id="prod-head">
    <h2>Featured Products</h2>
    <p>Summer Collection New Modern Design</p>
  </div>
  
  <div id="products">
    <%-- Dynamic Product Listing Example --%>
    <% for(int i=1; i<=8; i++) { %>
      <div class="product-card">
        <div class="product-img">
          <img src="img/products/f<%= i %>.jpg" alt="product<%= i %>">
        </div>
        <div class="product-desc">
          <div>
            <p class="first-line">adidas</p>
          </div>
          <div class="sec-line">
            <h5>Cartoon Astronaut T-Shirts</h5>
          </div>
          <div class="last-line">
            <h5>$78</h5>
            <img src="img/shopping-cart.svg" alt="cart">
          </div>
        </div>
      </div>
    <% } %>
  </div>

  <div id="banner">
    <h4>Repair Services</h4>
    <h2>Up to <span>70% Off</span> All t-Shirts & Accessories</h2>
    <button class="exp">Explore More</button>
  </div>
  
  <div id="newsletter">
    <div class="news">
      <h4>Sign Up For Newsletters</h4>
      <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
    </div>
    <div class="news">
      <form action="subscribe.jsp" method="post">
        <input type="text" name="email" placeholder="Your email address">
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
  
  <div id="footer">
    <div class="col">
      <img src="img/logo.png" alt="logo">
      <h4>Contact</h4>
      <p><strong>Address:</strong> 562 Wellington Road, Street 32</p>
      <p><strong>Phone:</strong> +1(647)283-8843</p>
      <p><strong>Hours:</strong> 10:00 - 18:00, Mon-Sat</p>
    </div>
    <div class="col">
      <h4>About</h4>
      <p>About Us</p>
      <p>Delivery Information</p>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      <p>Contact Us</p>
    </div>
    <div class="col">
      <h4>My Account</h4>
      <p>Sign In</p>
      <p>View Cart</p>
      <p>My Wishlist</p>
      <p>Track My Order</p>
      <p>Help</p>
    </div>
  </div>

  <script src="index.js"></script>
</body>
</html>
