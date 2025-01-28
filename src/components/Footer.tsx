import Button from "../ui/Button";

// social icon imports
import Facebook from '../../src/assets/logos/facebook.svg';
import Instagram from '../../src/assets/logos/instagram.svg';
import Twitter from '../../src/assets/logos/twitter.svg';
import Github from '../../src/assets/logos/github.svg';
import Youtube from '../../src/assets/logos/youtube.svg';

const Footer = () => {
    return (
        <div className="relative flex flex-col w-full bg-[#171717]  items-center text-white">
            <div className="w-2/3 mt-5">
                {/* FIRST 2 */}
                <div className="flex flex-row gap-10 mt-5">
                    <div className="relative flex ">
                        <ul>
                            <h2 className="mb-4 text-md font-semibold">Solutions</h2>
                            <li className="mt-1 text-sm"><a href="#">Website Builder</a></li>
                            <li className="mt-1 text-sm"><a href="#">Web Application</a></li>
                            <li className="mt-1 text-sm"><a href="#">Mobile Application</a></li>
                            <li className="mt-1 text-sm"><a href="#">Web Hosting</a></li>
                            <li className="mt-1 text-sm"><a href="#">Domain Names</a></li>
                        </ul>
                    </div>
                    
                    <div className="relative flex flex-row">
                        <ul>
                            <h2 className="mb-4 text-md font-semibold">Company</h2>
                            <li className="mt-1 text-sm"><a href="#">Press & Media</a></li>
                            <li className="mt-1 text-sm"><a href="#">Investor Relations</a></li>
                            <li className="mt-1 text-sm"><a href="#">Careers</a></li>
                            <li className="mt-1 text-sm"><a href="#">About</a></li>
                            <li className="mt-1 text-sm"><a href="#">Patent Notice</a></li>
                        </ul>
                    </div>
                </div>

                {/* LAST 2 */}
                <div className="flex flex-row gap-20 mt-5">
                    <div className="relative flex ">
                        <ul>
                            <h2 className="mb-4 text-md font-semibold">Learn</h2>
                            <li className="mt-1 text-sm"><a href="#">Documentation</a></li>
                            <li className="mt-1 text-sm"><a href="#">Customization</a></li>
                            <li className="mt-1 text-sm"><a href="#">Examples</a></li>
                            <li className="mt-1 text-sm"><a href="#">Tutorials</a></li>
                        </ul>
                    </div>
                    
                    <div className="relative flex flex-row">
                        <ul>
                            <h2 className="mb-4 text-md font-semibold">Support</h2>
                            <li className="mt-1 text-sm"><a href="#">Help Center</a></li>
                            <li className="mt-1 text-sm"><a href="#">System Status</a></li>
                            <li className="mt-1 text-sm"><a href="#">Contact Us</a></li>

                        </ul>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col w-2/3 text-left mt-10">
                <h3 className="mb-2 font-bold text-md">Subscribe to our newsletter</h3>
                <p className="text-sm">The latest news, articles, and resources, sent to your inbox weekly</p>
                <input 
                    type="text"
                    placeholder="Enter your email" 
                    className="w-full border rounded-md mt-4 mb-4 p-2"
                />
                <Button 
                    title="Subscribe"
                    className="w-full text-sm"
                />
            </div>
            
            {/* HR LINE */}
            <div className="w-4/5 border-b mb-3 mt-6" />

            {/* Social Icons */}
            <div className="flex flex-row mb-5 w-full">
                <div className="flex gap-5 w-2/3 ml-15 p-2">
                    <a href="#">
                        <img
                            className="w-8" 
                            src={Facebook} alt="Facebook" 
                        />
                    </a>
                    <a href="#">
                        <img
                            className="w-8" 
                            src={Instagram} alt="Instagram" 
                        />
                    </a>
                    <a href="#">
                        <img
                            className="w-8" 
                            src={Twitter} alt="Twitter" 
                        />
                    </a>
                    <a href="#">
                        <img
                            className="w-8" 
                            src={Github} alt="Github" 
                        />
                    </a>
                    <a href="#">
                        <img
                            className="w-8" 
                            src={Youtube} alt="youtube" 
                        />
                    </a>
                </div>
            </div>

            <p className="text-sm mb-5">&copy; 2025 Your Company, Inc. All rights reserved.</p>
        </div>
    );
}

export default Footer;