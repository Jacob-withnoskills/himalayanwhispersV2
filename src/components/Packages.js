import React, { useRef, useState, useEffect } from 'react';
import './css/Packages.css';
import FooterSection from './FooterSection';
import Loader from './Loader';
import t1 from './images/t1.jpg';
import t2 from './images/tour2.jpg';
import t3 from './images/tour4.jpg';
import t4 from './images/tour3.jpg';
import t5 from './images/tour5.jpg';
import t6 from './images/tour6.jpg';

const staticPackages = [
    {
        title: 'Mystical Bhutan Adventure | Explore Taktsang Monastery',
        duration: '4 days & 3 nights',
        rating: '5.0',
        reviews: 122,
        locations: '1D Phuntsholing • 1D Thimphu City • 2D Paro',
        price: 50000,
        originalPrice: 52000,
        savings: 2000,
        usdPrice: 1000,
        image: t4,
    },
    {
        title: 'Enchanting Bhutan Journey | Discover Paro Valley',
        duration: '6 days & 5 nights',
        rating: '5.0',
        reviews: 200,
        locations: '1D Phuntsholing • 1D Thimphu City • 1D Punakha +3',
        price: 75000,
        originalPrice: 80000,
        savings: 5000,
        usdPrice: 1200,
        image: t2,
    },
    {
        title: 'Scenic Bhutan Expedition | Capture Chele La Pass',
        duration: '7 days & 6 nights',
        rating: '4.5',
        reviews: 23,
        locations: '1D Phuntsholing • 2D Thimphu City • 2D Paro +2',
        price: 87500,
        originalPrice: 89000,
        savings: 1500,
        usdPrice: 1400,
        image: t3,
    },
    {
        title: 'Luxurious Bhutan Retreat | Relax & Explore',
        duration: '8 days & 7 nights',
        rating: '4.7',
        reviews: 44,
        locations: '2D Thimphu • 3D Punakha • 2D Paro',
        price: 100000,
        originalPrice: 110000,
        savings: 10000,
        usdPrice: 1800,
        image: t1,
    },
    {
        title: 'Cultural & Natural Wonders of Bhutan',
        duration: '5 days & 4 nights',
        rating: '4.8',
        reviews: 55,
        locations: '1D Paro • 2D Thimphu • 1D Forest',
        price: 62500,
        originalPrice: 65000,
        savings: 2500,
        usdPrice: 1350,
        image: t5,
    },
    {
        title: 'Bhutan Photography Tour | Through the Lens',
        duration: '10 days & 9 nights',
        rating: '5.0',
        reviews: 18,
        locations: 'Multiple scenic spots',
        price: 125000,
        originalPrice: 130000,
        savings: 5000,
        usdPrice: 2000,
        image: t6,
    },
];

const bestDeals = staticPackages.slice(0, 3);

export default function Packages() {
    const packageRef = useRef(null);
    const dealsRef = useRef(null);
    const internationalRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [packages, setPackages] = useState([]);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [callbackName, setCallbackName] = useState('');
    const [callbackPhone, setCallbackPhone] = useState('');
    const [selectedPackage, setSelectedPackage] = useState(null);
    const whatsappNumber = '917099097003';

    useEffect(() => {
        const fetchPackages = async () => {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 2500));
                setPackages(staticPackages);
            } catch (error) {
                console.error('Failed to load packages:', error);
                setPackages([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    const openCallbackDialog = (pkg) => {
        setSelectedPackage(pkg);
        setDialogOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!callbackName || !callbackPhone) {
            alert('Please fill all fields.');
            return;
        }

        const message = encodeURIComponent(
            `Request Callback\nPackage: ${selectedPackage?.title}\nName: ${callbackName}\nPhone: ${callbackPhone}`
        );

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');

        setCallbackName('');
        setCallbackPhone('');
        setDialogOpen(false);
    };

    const renderPackageCards = (data, currencySymbol) =>
        data.map((pkg, index) => {
            const isInternational = currencySymbol === '$';
            const displayPrice = isInternational
                ? pkg.usdPrice
                    ? pkg.usdPrice.toLocaleString()
                    : 'N/A'
                : pkg.price.toLocaleString();
            const displayOriginalPrice = !isInternational && pkg.originalPrice?.toLocaleString();
            const displaySavings = !isInternational && pkg.savings?.toLocaleString();

            return (
                <div className="package-card" key={index}>
                    <img src={pkg.image} alt={pkg.title} className="package-image" />
                    <div className="package-details">
                        <p className="duration">{pkg.duration}</p>
                        <p className="rating">⭐ {pkg.rating} <span>({pkg.reviews})</span></p>
                        <h3 className="title">{pkg.title}</h3>
                        <p className="locations">{pkg.locations}</p>
                        <div className="price-box">
                            <p className="price">{currencySymbol} {displayPrice}</p>
                            {!isInternational && (
                                <>
                                    <p className="original-price">{currencySymbol} {displayOriginalPrice}</p>
                                    <span className="save">SAVE {currencySymbol} {displaySavings}</span>
                                </>
                            )}
                        </div>
                        <button className="callback-btn" onClick={() => openCallbackDialog(pkg)}>Request Callback</button>
                    </div>
                </div>
            );
        });

    const SectionWithScroll = ({ title, subtitle, refVar, data, currencySymbol = 'INR' }) => (
        <section className="packages-section">
            <h2 className="section-title">{title}</h2>
            <p className="subtitle">{subtitle}</p>

            {title === "Staff Handpicked ✨" && (
                <div className="custom-tour-note">
                    
                </div>
            )}

            <div className="packages-container" ref={refVar}>
                {renderPackageCards(data, currencySymbol)}
            </div>
        </section>
    );

    const BhutanTourDetailSection = () => (
        <section className="tour-detail-section">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6221994646684060"
                crossorigin="anonymous"></script>
            <h1>Explore Bhutan with Our Exclusive Tour Packages</h1>
            <p>
                Discover the magic of Bhutan — the Land of the Thunder Dragon — with our curated tour packages. Whether you're seeking spiritual serenity, breathtaking Himalayan views, or authentic cultural experiences, our Bhutan tours cater to all types of travelers.
            </p>
            <p>
                Our handpicked packages include guided tours to iconic locations like Paro Taktsang (Tiger's Nest Monastery), Thimphu, Punakha Dzong, and Chele La Pass. Experience the best of Bhutanese hospitality, cuisine, and tradition on every journey.
            </p>
            <p>
                You can also <a href="/contact">contact us</a> for custom itineraries tailored to your interests and budget.
            </p>
        </section>
    );

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <BhutanTourDetailSection />
            <SectionWithScroll
                title="Staff Handpicked ✨"
                subtitle="Curated with expertise"
                refVar={packageRef}
                data={packages}
                currencySymbol="INR"
            />

            <SectionWithScroll
                title="Best Deals 🔥"
                subtitle="Top-rated trips at special prices"
                refVar={dealsRef}
                data={bestDeals}
                currencySymbol="INR"
            />

            <SectionWithScroll
                title="For International Travellers 🌍"
                subtitle="Best Prices"
                refVar={internationalRef}
                data={packages}
                currencySymbol="$"
            />

            {dialogOpen && (
                <div className="callback-dialog-overlay">
                    <div className="callback-dialog">
                        <h3>Request a Callback</h3>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    value={callbackName}
                                    onChange={(e) => setCallbackName(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Phone:
                                <input
                                    type="tel"
                                    value={callbackPhone}
                                    onChange={(e) => setCallbackPhone(e.target.value)}
                                    required
                                />
                            </label>
                            <div className="dialog-buttons">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={() => setDialogOpen(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <FooterSection />
        </>
    );
}
