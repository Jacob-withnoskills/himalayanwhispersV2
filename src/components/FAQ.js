import React from 'react';
import './css/FAQ.css';
import FooterSection from './FooterSection';

export default function FAQ() {
    return (
        <>
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                <p className="subheading">Everything you need to know before visiting Bhutan</p>

                <div className="faq-category">
                    <h2>📌 Entry & Permit Requirements</h2>

                    <div className="faq-block">
                        <h3>A. Indian Citizens</h3>
                        <ul>
                            <li><strong>Visa:</strong> Not required</li>
                            <li><strong>Entry Permit:</strong> Required (issued at Phuentsholing or Paro Airport)</li>
                            <li><strong>Documents Needed:</strong> Passport/Voter ID, photo, hotel bookings, itinerary</li>
                            <li><strong>Permit Coverage:</strong> Paro & Thimphu; others need special permit from Thimphu</li>
                            <li><strong>SDF:</strong> ₹1,200/night (ages 5–12: 50%, below 5: free)</li>
                        </ul>
                    </div>

                    <div className="faq-block">
                        <h3>B. Foreign Nationals</h3>
                        <ul>
                            <li><strong>Visa:</strong> Mandatory (via licensed Bhutanese operator)</li>
                            <li><strong>Documents:</strong> Valid passport, photo, itinerary, advance payment</li>
                            <li><strong>Processing Time:</strong> 5–7 working days</li>
                            <li><strong>SDF:</strong> USD 200/night (ages 5–12: 50%, below 5: free)</li>
                        </ul>
                    </div>
                </div>

                <div className="faq-category">
                    <h2>🚗 Car Booking & Transport</h2>

                    <div className="faq-block">
                        <h3>A. Indian Tourists</h3>
                        <ul>
                            <li><strong>Options:</strong> Bhutan-registered cab or self-drive (with permit)</li>
                            <li><strong>Documents:</strong> Driving license, registration, insurance, pollution, entry permit</li>
                            <li><strong>Popular Routes:</strong> Paro–Thimphu, Thimphu–Punakha</li>
                            <li><strong>Rates:</strong> ₹4500/day</li>
                        </ul>
                    </div>

                    <div className="faq-block">
                        <h3>B. Foreign Tourists</h3>
                        <ul>
                            <li><strong>Self-drive:</strong> Not allowed</li>
                            <li><strong>Transport:</strong> Arranged via tour operator with driver</li>
                        </ul>
                    </div>
                </div>

                <div className="faq-category">
                    <h2>✅ Useful Tips</h2>
                    <ul>
                        <li>Register permits online in advance via Bhutan Immigration portal</li>
                        <li>Book hotels and pay SDF online</li>
                        <li>Carry photocopies of ID proof and photos</li>
                        <li>Best time to visit: <strong>March–May</strong> and <strong>September–November</strong></li>
                        <li>Respect Bhutan’s high-value, low-impact tourism policy</li>
                    </ul>
                </div>

               
                <div className="faq-category">
                    <h2>🧳 Packages & Fees</h2>

                    <div className="faq-block">
                        <h3>Discounts on Sustainable Development Fee (SDF)</h3>
                        <ul>
                            <li>No charge for children up to 5 years old.</li>
                            <li>Children aged 6 to 11 accompanied by guardians get 50% discount.</li>
                        </ul>

                        <p><strong>Bhutan Visa Fee:</strong> US $40 per person per trip.<br />
                            Visa fee extension cost is US $40.</p>

                        <p><em>Note: The SDF is not included in the package tour/trek costs below.</em></p>
                    </div>

                    <div className="faq-block">
                        <h3>Package Tour Cost</h3>
                        <ul>
                            <li>Solo travelers: US $245 per night stay in Bhutan.</li>
                            <li>2 pax in a group: US $190 per person per night.</li>
                            <li>3 pax and above: US $180 per person per night.</li>
                        </ul>
                        <p><strong>Includes:</strong></p>
                        <ul>
                            <li>Accommodation in 3-star government-approved “clean & safe” hotels.</li>
                            <li>All 3 meals a day and tea/coffee.</li>
                            <li>Guide services.</li>
                            <li>Bottled water during the entire trip.</li>
                            <li>Transport within Bhutan including airport transfers.</li>
                        </ul>
                    </div>

                    <div className="faq-block">
                        <h3>Package Trek Cost</h3>
                        <ul>
                            <li>Solo trekker: US $350 per night on trek.</li>
                            <li>2 pax in a group: US $260 per person per night.</li>
                            <li>3 pax and above: US $225 per person per night.</li>
                        </ul>
                        <p><strong>Includes:</strong></p>
                        <ul>
                            <li>Services of trekking guide, cook and helpers.</li>
                            <li>Yaks/ponies to carry supplies.</li>
                            <li>Sleeping tents, mess tent, kitchen tent, toilet tents, etc.</li>
                            <li>Sleeping mats.</li>
                            <li>3 meals a day.</li>
                        </ul>
                        <p><em>Note: You need to bring your own sleeping bags.</em></p>
                    </div>

                    <div className="faq-block">
                        <h3>Important Notes</h3>
                        <ul>
                            <li>Nature of tour/trek: Private trip.</li>
                            <li>Does not cover entry fees for museums/monuments & festival visits.</li>
                            <li>Does not cover travel insurance premiums.</li>
                            <li>Does not cover Bhutan visa fee (US $40 per person).</li>
                            <li>Does not cover Drukair/Bhutan Airlines fares.</li>
                            <li>Does not cover payment for services provided on personal basis.</li>
                            <li>Does not cover costs from political unrest, strikes, mishaps, etc.</li>
                            <li>Does not cover personal expenses such as tips, laundry, camera charges, incidentals, porterage, etc.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}
