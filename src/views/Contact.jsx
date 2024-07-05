import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <>
        <Navbar nav="Contact" />
        <main id="main">
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>

                    <div className="row mt-1">

                        <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>A108 Adam Street, New York, NY 535022</p>
                            </div>

                            <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@example.com</p>
                            </div>

                            <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p>+1 5589 55488 55s</p>
                            </div>

                        </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">
                        {/* Utilisation de l'API Web3Form pour traiter l'envoi du formulaire par mail */}
                        <form action="https://api.web3forms.com/submit" method="POST" role="form" className="php-email-form">

                            <input type="hidden" name="access_key" value="7a66c5a5-5214-4159-b9c4-5bf3eefdac5e"/>
                            <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                            </div>
                            <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                            
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>

                        </div>

                    </div>

                </div>
            </section>
        </main>
        <Footer />

        </>
    )
}