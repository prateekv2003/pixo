import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="col-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt dolorem saepe repellat impedit debitis ratione nisi voluptatem? Eligendi explicabo accusantium ipsa similique nam asperiores vitae delectus sit nihil aliquam.
                </p>
            </div>

            <div className="col-1">
                <ul className="unstyled-list">
                    <li><strong>Shoreditch</strong></li>
                    <li>ipsum</li>
                    <li>laudantium</li>
                    <li>harum magnam</li>
                    <li>Perfedis quasi</li>
                </ul>
            </div>

            <div className="col-1">
                <ul className="unstyled-list">
                    <li><strong>Shoreditch</strong></li>
                    <li>ipsum</li>
                    <li>laudantium</li>
                    <li>harum magnam</li>
                    <li>Perfedis quasi</li>
                </ul>
            </div>

            <div className="col-1">
                <ul className="unstyled-list">
                    <li><strong>Shoreditch</strong></li>
                    <li>ipsum</li>
                    <li>laudantium</li>
                    <li>harum magnam</li>
                    <li>Perfedis quasi</li>
                </ul>
            </div>
        </div>
        {/* Footer Socials */}
        <div className="footer__social-links">
            <a href="https://www.facebook.com/prateek.vishwakarma.7773" target={"_blanck"}><FaFacebookF/></a>
            <a href="https://www.instagram.com/prateek.vishwakarma.7773"  target={"_blanck"}><BsInstagram/></a>
            <a href="https://twitter.com/Prateek04864747"  target={"_blanck"}><BsTwitter/></a>
        </div>
        <small className="footer__copyright">&copy; Prateek Vishwakarma. All rights reserved.</small>
    </footer>
  )
}

export default Footer