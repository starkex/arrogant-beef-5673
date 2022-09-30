const NavBar = ()=>{
    return `  
    <div>
        <img id='web-logo' src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="logo" srcset="">
    </div>
    <div>
        <img src="https://www.kindmeal.my/images/follow_blog_grey.png" alt="link">
        <img src="https://www.kindmeal.my/images/follow_facebook_grey.png" alt="fb">
        <img src="https://www.kindmeal.my/images/follow_twitter_grey.png" alt="twitter">
    </div>
    <div>
        <a href="#">Login</a>
        <button id="nav-fb">Facebook</button>
        <button id="nav-mail">Email</button>
        <span>|</span>
        <a href="signup.html">Sign Up</a>
    </div>
    
    <div>
        <i class="fa-solid fa-bars"></i>
    </div>`
}

export {NavBar};