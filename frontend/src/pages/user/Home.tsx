import React, { useState } from "react";
import Footer from "../../components/user/Footer";
import { Link } from "react-router-dom";
import isLoggedIn from "../../utils";

const HomePage: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const exploreOptions = [
        {
            title: "Restaurants",
            description: "Discover the best Restaurants near you!",
            image:
                "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            title: "Cafes",
            description: "Relax at cozy Cafes nearby!",
            image:
                "https://media.istockphoto.com/id/1815542043/photo/high-angle-view-of-friends-meeting-in-cafe-with-a-cup-of-hot-latte-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=KeQw6CyHuYob4n-dVXigabCOYuDiNH7o62Gmk2ZFUGs=",
        },
        {
            title: "Desserts",
            description: "Satisfy your sweet cravings!",
            image:
                "https://plus.unsplash.com/premium_photo-1667546202654-e7574a20872c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzc2VydHN8ZW58MHx8MHx8fDA%3D",
        },
        {
            title: "Fast Food",
            description: "Grab a quick bite of your favorite fast food!",
            image:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60",
        },
    ];

    const cuisines = [
        {
            name: "Indian",
            image:
                "https://media.istockphoto.com/id/1443601641/photo/assorted-south-indian-food-mutton-brain-masala-chicken-tangdi-chicken-reshmi-tikka-chicken.webp?a=1&b=1&s=612x612&w=0&k=20&c=O-6xb_eKqROjSB8KVo5gnuJkK3q6-wxZFBfXTChDJy8=",
        },
        {
            name: "Chinese",
            image:
                "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&auto=format&fit=crop&q=60",
        },
        {
            name: "Italian",
            image:
                "https://images.unsplash.com/photo-1522666257812-173fdc2d11fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGl0YWxpYW4lMjBmb29kc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            name: "Mexican",
            image:
                "https://images.unsplash.com/photo-1558980837-d1a62611adac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1leGljYW4lMjBmb29kc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            name: "Thai",
            image:
                "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhhaSUyMGZvb2RzfGVufDB8fDB8fHww",
        },
    ];

    const popularFoods = [
        {
            name: "Margherita Pizza",
            image:
                "https://images.unsplash.com/photo-1649688423692-308d2fc1027d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww",
            price: 299,
        },
        {
            name: "Cheeseburger",
            image:
                "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60",
            price: 199,
        },
        {
            name: "Chicken Biryani",
            image:
                "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpY2tlbiUyMEJpcnlhbml8ZW58MHx8MHx8fDA%3D",
            price: 249,
        },
        {
            name: "Chocolate Cake",
            image:
                "https://plus.unsplash.com/premium_photo-1723867522131-af9733323bc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D",
            price: 159,
        },
        {
            name: "Burger",
            image:
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QnVyZ2VyfGVufDB8fDB8fHww",
            price: 99,
        },
        {
            name: "Cheese Roll",
            image:
                "https://images.unsplash.com/photo-1604908816649-c8bdfc3ca68b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hlZXNlJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D",
            price: 159,
        },
        {
            name: "Dosa",
            image:
                "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERvc2F8ZW58MHx8MHx8fDA%3D",
            price: 79,
        },
        {
            name: "Momos",
            image:
                "https://media.istockphoto.com/id/1130264715/photo/traditional-asian-food-nepalese-steamed-dumpling-momo-served-with-tomato-chutney.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sgj7qn3YgvxRN0yISydWRGeO9F-YVKAKJMNPySJta0o=",
            price: 99,
        },
    ];

    const cities = [
        { name: "Mumbai", image: "https://media.istockphoto.com/id/2181855711/photo/mumbai-gateway-to-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZxrKZBceZOrxphWq_UZfSPPba4Sw09R6qv_MwgqUL14=" },
        { name: "Delhi", image: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVsaGl8ZW58MHx8MHx8fDA%3D" },
        { name: "Bangalore", image: "https://images.unsplash.com/photo-1669222758890-4be97210da2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJhbmdsb3JlfGVufDB8fDB8fHww" },
        { name: "Kolkata", image: "https://plus.unsplash.com/premium_photo-1697730414399-3d4d9ada98bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Chennai", image: "https://media.istockphoto.com/id/532978754/photo/pondicherry-globe.webp?a=1&b=1&s=612x612&w=0&k=20&c=QtjTjkP3006bLpw17pg8kY2rmEMoRM2Te1DfxSTRvOI=" },
    ]

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Navbar */}
            <nav className="bg-gray-800 py-4 px-6 shadow-lg sticky top-0 z-50">
                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-extrabold text-orange-500">
                        FoodieExpress
                    </h1>
                    {/* Hamburger Menu */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleNav}
                            aria-label="Toggle Menu"
                            className="focus:outline-none"
                        >
                            {isNavOpen ? (
                                <span className="text-3xl text-orange-500 animate-fadeIn">
                                    &times;
                                </span>
                            ) : (
                                <span className="text-3xl text-orange-500 animate-fadeIn">
                                    &#9776;
                                </span>
                            )}
                        </button>
                    </div>
                    {/* Desktop Menu */}
                    <ul
                        className={`flex flex-col lg:flex-row lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent shadow-lg lg:shadow-none transform transition-transform duration-300 ${isNavOpen ? "translate-y-0" : "-translate-y-full lg:translate-y-0"
                            }`}
                    >
                        <li className="lg:mx-2">
                            <a
                                href="#home"
                                className="block py-2 px-6 text-gray-300 hover:text-orange-500 transition duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li className="lg:mx-2">
                            <a
                                href="#explore"
                                className="block py-2 px-6 text-gray-300 hover:text-orange-500 transition duration-300"
                            >
                                Explore
                            </a>
                        </li>
                        <li className="lg:mx-2">
                            <a
                                href="#offers"
                                className="block py-2 px-6 text-gray-300 hover:text-orange-500 transition duration-300"
                            >
                                Offers
                            </a>
                        </li>
                        <li className="lg:mx-2">
                            <a
                                href="#featured"
                                className="block py-2 px-6 text-gray-300 hover:text-orange-500 transition duration-300"
                            >
                                Featured
                            </a>
                        </li>
                    </ul>
                    <div className="flex gap-5">
                        {
                            isLoggedIn ? (<>
                            <Link to="/login" className="hidden lg:block bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition duration-300">
                            Profile
                        </Link>
                            </>): (<>
                            <Link to="/login" className="hidden lg:block bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition duration-300">
                            Login
                        </Link>
                        <Link to="/register" className="hidden lg:block bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition duration-300">
                            Register
                        </Link></>)
                        }
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="relative h-[400px] sm:h-[500px] bg-cover bg-center flex items-center"
                style={{
                    backgroundImage:
                        "url('https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-extrabold text-orange-500 drop-shadow-md animate-fadeDown">
                        Craving Something Delicious?
                    </h1>
                    <p className="mt-2 text-lg text-gray-300 animate-fadeUp">
                        Discover top restaurants and get your favorite meals delivered fast!
                    </p>
                    {/* Search Bar */}
                    <div className="mt-6 w-11/12 max-w-xl flex bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search for restaurants, dishes, or cuisines..."
                            className="w-full px-4 py-3 text-gray-300 bg-transparent focus:outline-none"
                        />
                        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 font-medium transition duration-300">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Popular Cuisines */}
            <section className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
                    Popular Cuisines Near Me
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {cuisines.map((cuisine) => (
                        <div
                            key={cuisine.name}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
                        >
                            <img
                                src={cuisine.image}
                                alt={cuisine.name}
                                className="rounded-full w-24 h-24 mx-auto"
                            />
                            <h3 className="text-lg font-bold text-orange-500 mt-4">
                                {cuisine.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Explore Options Near Me */}
            <section id="explore" className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
                    Explore Options Near Me
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {exploreOptions.map((option) => (
                        <div
                            key={option.title}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        >
                            <img
                                src={option.image}
                                alt={option.title}
                                className="rounded-t-lg w-full h-32 object-cover"
                            />
                            <h3 className="text-lg font-bold text-orange-500 mt-4">
                                {option.title}
                            </h3>
                            <p className="text-gray-300 mt-2">{option.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Popular Food Section */}
            <section className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
                    Popular Food Items
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularFoods.map((food) => (
                        <div
                            key={food.name}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        >
                            <img
                                src={food.image}
                                alt={food.name}
                                className="rounded-t-lg w-full h-36 object-cover"
                            />
                            <h3 className="text-lg font-bold text-orange-500 mt-4">
                                {food.name}
                            </h3>
                            <p className="text-gray-300 mt-2">₹{food.price}</p>
                            <button className="bg-orange-500 hover:bg-orange-600 w-full mt-4 py-2 rounded-lg transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>


            {/* Cities We Deliver To */}
            <section className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
                    Cities We Deliver To
                </h2>
                <p className="text-center text-gray-300">
                    We deliver to the most happening cities across the country!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
                    {cities.map((city) => (
                        <div
                            key={city.name}
                            className="relative group rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={city.image}
                                alt={city.name}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-lg font-bold text-white">{city.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Special offers and discounts */}
            <section className="special-offers bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-6 text-orange-500">Special Offers & Discounts</h2>
                    <p className="text-xl mb-12 text-gray-400">Save big on your next meal! Check out our limited-time offers.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Offer 1 */}
                        <div className="offer-card bg-gray-800 text-gray-100 rounded-lg shadow-gray-900 shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                            <img
                                src="https://media.istockphoto.com/id/530438979/photo/50-off-sales-sign.webp?a=1&b=1&s=612x612&w=0&k=20&c=-LxP9PnamHk9-I7Yo-8uL6fedD39MFGQ6qHpcOxdCKM="
                                alt="Offer Image 1"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-orange-500">50% Off Your First Order</h3>
                                <p className="text-lg mb-4">Enjoy a 50% discount on your first order when you sign up today.</p>
                                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Claim Now</button>
                            </div>
                        </div>
                        {/* Offer 2 */}
                        <div className="offer-card bg-gray-800 text-gray-100 rounded-lg shadow-gray-900 shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                            <img
                                src="https://media.istockphoto.com/id/2182135308/photo/buy-1-get-1-free.webp?a=1&b=1&s=612x612&w=0&k=20&c=Faayxr_n51gQ6XFMyWs8BkiTmu0Rvc9yDPy_1hDxMLE="
                                alt="Offer Image 2"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-orange-500">Buy One, Get One Free</h3>
                                <p className="text-lg mb-4">Order any item and get a second one free! Don't miss out on this delicious deal.</p>
                                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Claim Now</button>
                            </div>
                        </div>
                        {/* Offer 3 */}
                        <div className="offer-card bg-gray-800 text-gray-100 rounded-lg shadow-gray-900 shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZyZWUlMjBkZWxpdmVyeXxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Offer Image 3"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-orange-500">Free Delivery on Orders Over Rs.300</h3>
                                <p className="text-lg mb-4">Enjoy free delivery when your order exceeds Rs.300. Order more, save more!</p>
                                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Claim Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently asked questions */}
            <section id="faq" className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-orange-500">
                            What is FoodieExpress?
                        </h3>
                        <p className="text-gray-300 mt-2">
                            FoodieExpress is a food delivery service that helps you discover top restaurants, cafes, and food items, and delivers them right to your doorstep.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-orange-500">
                            How do I place an order?
                        </h3>
                        <p className="text-gray-300 mt-2">
                            Simply search for your favorite dishes, select your preferred restaurant or cuisine, and place an order. You can choose delivery or pickup based on your location.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-orange-500">
                            Is there a minimum order amount?
                        </h3>
                        <p className="text-gray-300 mt-2">
                            Yes, there is a minimum order amount depending on your location and the restaurant's policy. You will be notified of the minimum order during checkout.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-orange-500">
                            Can I track my order?
                        </h3>
                        <p className="text-gray-300 mt-2">
                            Yes! Once your order is confirmed, you can track its status in real-time via the app or website until it arrives at your doorstep.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-orange-500">
                            What payment methods do you accept?
                        </h3>
                        <p className="text-gray-300 mt-2">
                            We accept a variety of payment methods, including credit/debit cards, online wallets, and cash on delivery (depending on location).
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
