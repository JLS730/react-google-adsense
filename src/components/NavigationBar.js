import React from 'react'

const NavigationBar = () => {
    return (
        <React.Fragment>
            <nav className="navigation-bar">
                <div className="navigation-bar-left">
                    <div className="logo"></div>
                </div>
                <div className="navigation-bar-right">
                    <h3 className="nav-link">Home</h3>
                    <h3 className="nav-link">About Us</h3>
                    <h3 className="nav-link">Shop</h3>
                    <h3 className="nav-link">Contact</h3>
                </div>
            </nav>
            <main className="main-content">
                <div className="google-ad1">
                    <ins class="adsbygoogle"
                        style={{display: "block"}}
                        data-ad-client="ca-pub-0325562407931095"
                        data-ad-slot="3548991170"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    ></ins>
                </div>
                <article className="main-article">
                    <h2>Content Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem provident natus itaque debitis quo nostrum numquam dolorum impedit, veritatis quod quaerat pariatur necessitatibus dolorem ad nulla nemo earum aspernatur quos similique molestias. Animi, accusamus, aliquid in nesciunt aspernatur quo, voluptas dicta accusantium quas odit consequatur. Deserunt, eum. Sapiente numquam eius laboriosam ex nisi sed, iure debitis sit asperiores alias corporis dignissimos doloribus est repellendus dolor voluptatibus voluptates saepe facilis unde dolorum accusamus ullam expedita cumque aperiam? Accusantium dolorum officia, corporis nostrum labore esse quis incidunt exercitationem sed eligendi, est numquam aliquid non mollitia itaque! Distinctio, numquam. Totam, quia porro.</p>
                </article>
                <div className="google-ad2">
                    <ins class="adsbygoogle"
                            style={{display: "block"}}
                            data-ad-client="ca-pub-0325562407931095"
                            data-ad-slot="3548991170"
                            data-ad-format="auto"
                            data-full-width-responsive="true"
                    ></ins>
                </div>
            </main>
            <footer className="footer-section">
                <div className="footer-logo"></div>
            </footer>
        </React.Fragment>
    )
}

export default NavigationBar