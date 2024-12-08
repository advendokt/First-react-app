import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';

function Gallery() {
    useEffect(() => {
        // Initialize AOS animations
        AOS.init({
            duration: 1200,
            offset: 200,
            easing: 'ease-in-out',
            once: true,
        });

        // jQuery for modal functionality
        $('.thumbnail').click(function () {
            $('.modal-body').empty();
            $($(this).parents('div').html()).appendTo('.modal-body');
            $('#modal').modal({ show: true });
        });

        $('#modal').on('show.bs.modal', function () {
            $('.col-6,.row .thumbnail').addClass('blur');
        });

        $('#modal').on('hide.bs.modal', function () {
            $('.col-6,.row .thumbnail').removeClass('blur');
        });
    }, []);

    return (
        <div className="container">
            <h1>Photo/Gallery</h1>
            <hr />
            <div className="row">
                {/* Repeatable Gallery Item */}
                {[
                    "https://images.unsplash.com/photo-1494719019271-7bfff81660d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74496a215491b1529d6702f146901970&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1523357585206-175e971f2ad9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d4e050da1c691f01f0643abe9cd5f94&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1523359366921-4c14294ff5bd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6010b5b8bc1f6916d652fb48b9e039a6&auto=format&fit=crop&w=500&q=60",
                    // Add more image URLs here...
                ].map((src, index) => (
                    <div key={index} className="col-lg-4 col-sm-6">
                        <div className="thumbnail img-responsive">
                            <a href="#" title={`Image ${index + 1}`}>
                                <img src={src} alt={`Gallery ${index + 1}`} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Enlarged Image */}
            <div id="modal" className="modal fade" tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                        <div className="modal-body"></div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="myFooter" id="footer-wrapper">
                <div className="footer-icons text-center">
                    {[
                        { href: "https://www.pinterest.com/", icon: "fa-pinterest" },
                        { href: "https://www.facebook.com/", icon: "fa-facebook" },
                        { href: "https://twitter.com/", icon: "fa-twitter" },
                        { href: "http://instagram.com/", icon: "fa-instagram" },
                        { href: "https://www.youtube.com/", icon: "fa-youtube" },
                        { href: "https://plus.google.com/", icon: "fa-google-plus" },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className="generic-anchor mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={`fa ${social.icon}`}></i>
                        </a>
                    ))}
                </div>
            </footer>
        </div>
    );
}

export default Gallery;
