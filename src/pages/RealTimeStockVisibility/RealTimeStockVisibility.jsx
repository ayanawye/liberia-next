import React from 'react';

import Wine from '@/shared/images/wine.svg'
import Image from "next/image";

import './RealTimeStockVisibility.scss';

const RealTimeStockVisibility = () => {
    return (
        <div>
            <div className='products'>
                <div className='container'>
                    <h1 className='products_title'>Real Time Stock Visibility</h1>
                </div>
            </div>
            <div className='products_categories'>
                <div className='products_category'>
                    <h3>Spirits & Wines</h3>
                    <div className='line'/>
                    <h5>Premium Selection of International Brands</h5>
                    <p>Curated portfolio of world-class spirits and wines, sourced directly from certified brand owners and routed through bonded channels across our global network.</p>
                    <div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Premium Whiskeys</h4>
                            <ul>
                                <li>Single Malt Scotch</li>
                                <li>Bourbon & Rye</li>
                                <li>Irish Whiskey</li>
                                <li>Japanese Whisky</li>
                                <li>Limited Editions</li>
                            </ul>
                        </div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>International Wines</h4>
                            <ul>
                                <li>French Bordeaux</li>
                                <li>Italian Classics</li>
                                <li>New World Wines </li>
                                <li>Vintage Collections </li>
                                <li>Wine Accessories</li>
                            </ul>
                        </div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Local Spirits</h4>
                            <ul>
                                <li>Regional Specialties </li>
                                <li>Craft Distilleries </li>
                                <li>Traditional Recipes </li>
                                <li>Cultural Heritage </li>
                                <li>Artisan Production</li>
                            </ul>
                        </div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Champagne & Cognac</h4>
                            <ul>
                                <li>Premium Champagne </li>
                                <li>Vintage Collections </li>
                                <li>Fine Cognac </li>
                                <li>Armagnac Selection </li>
                                <li>Gift Packaging</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='products_category'>
                    <h3>Perfumes & Cosmetics</h3>
                    <div className='line'/>
                    <h5>Luxury Beauty & Fragrance</h5>
                    <p>Luxury beauty and fragrance collections from world-renowned brands, offering the finest in cosmetics and perfumes.</p>
                    <div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Designer Fragrances</h4>
                            <ul>
                                <li>Chanel Collections </li>
                                <li>Dior Exclusives </li>
                                <li>Tom Ford Premium </li>
                                <li>Creed Heritage </li>
                                <li>Limited Editions</li>
                            </ul>
                        </div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Luxury Skincare</h4>
                            <ul>
                                <li>La Mer Prestige </li>
                                <li>SK-II Innovation </li>
                                <li>Estée Lauder </li>
                                <li>Lancôme Advanced </li>
                                <li>Anti-aging Solutions</li>
                            </ul>
                        </div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>International Brands</h4>
                            <ul>
                                <li>MAC Professional </li>
                                <li>Urban Decay </li>
                                <li>YSL Beauty </li>
                                <li>Giorgio Armani </li>
                                <li>Global Exclusives</li>
                            </ul>
                        </div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Beauty Accessories</h4>
                            <ul>
                                <li>Professional Brushes </li>
                                <li>Beauty Tools </li>
                                <li>Travel Sets </li>
                                <li>Gift Collections </li>
                                <li>Luxury Packaging</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='products_category unique'>
                    <h3>Tobacco Products</h3>
                    <div className='line'/>
                    <p>We manage tobacco with the legal rigor it requires. In each market we serve, we operate under direct government supervision and with brand-approved sourcing.</p>
                    <div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Cigarettes</h4>
                            <p>Global leaders and region-specific brands</p>
                        </div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Cigars</h4>
                            <p>Cuban, Nicaraguan, Dominican</p>
                        </div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Nicotine Alternatives</h4>
                            <p>Nicotine alternatives and duty-free accessories</p>
                        </div>
                    </div>
                </div>
                <div className='products_category'>
                    <h3>Confectionery & Gourmet</h3>
                    <div className='line'/>
                    <h5>Premium Quality, Global Brands</h5>
                    <p>Premium confectionery and gourmet food products that delight travelers with exceptional quality and taste</p>
                    <div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Premium Confectionery</h4>
                            <p>International chocolate and candy brands</p>
                        </div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Gourmet Snacks</h4>
                            <p>Artisanal cookies, nuts, and specialty snacks</p>
                        </div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Beverages</h4>
                            <p>Premium teas, coffees, and specialty drinks</p>
                        </div>
                        <div className='products_category_item'>
                            <Image src={Wine} alt='products_category'/>
                            <h4>Specialty Foods</h4>
                            <p>Gourmet foods and delicacies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealTimeStockVisibility;