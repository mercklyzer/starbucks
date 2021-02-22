import React from 'react'
import './home.css'

// COMPONENTS
import Billboard from '../../components/billboard/Billboard.js'
import Button from '../../components/button/Button.js'
import Footer from '../../components/footer/Footer.js'

// ASSETS
import valentinesCard from '../../images/home/valentines-card.webp'
import drinks from '../../images/home/drinks.png'
import bread from '../../images/home/bread.webp'
import paperBag from '../../images/home/paper-bag.webp'
import greenStar from '../../images/home/green-star.webp'
import waiter from '../../images/home/waiter-model.webp'

const ValentinesText = () => {
    return(
        <div className='home-billboard-container'>
            <span className='home-billboard-title'>THEY'LL LOVE IT</span>
            <span className='home-billboard-text'>This Valentine’s Day send a Starbucks Card and let your favorite people know you’re thinking of them. How sweet.</span>
            <div>
                <Button type='solid' color='black' edge='round' size='medium'>
                    Send an eGift
                </Button>
            </div>
        </div>
    )
}

const Drinks = () => {
    return(
        <div className='home-billboard-container'>
            <span className='home-billboard-title'>DRINKS TO ADORE</span>
            <span className='home-billboard-text'>Our Pink Drink and Very Berry Hibiscus Starbucks Refreshers® iced beverage are bursting with bright flavors.</span>
            <div>
                <Button type='solid' color='black' edge='round' size='medium'>
                    Discover the drinks
                </Button>
            </div>
        </div>
    )
}

const Bread = () => {
    return(
        <div className='home-billboard-container'>
            <span className='home-billboard-title'>BE MINE</span>
            <span className='home-billboard-text'>Go ahead and treat yourself to a dreamy Chocolate Cake Pop or a slice of deliciously moist Red Velvet Loaf.</span>
            <div>
                <Button type='solid' color='black' edge='round' size='medium'>
                    See the treats
                </Button>
            </div>
        </div>
    )
}

const PaperBag = () => {
    return(
        <div className='home-billboard-container'>
            <span className='home-billboard-title'>SEND LOVE WITH UBER EATS</span>
            <span className='home-billboard-text'>Make someone’s day with a Starbucks® delivery on Uber Eats. Enjoy $0 Delivery Fee* on orders over $15 through 2/14.</span>
            <div>
                <Button type='solid' color='black' edge='round' size='medium'>
                    Order now
                </Button>
            </div>
        </div>
    )
}

const GreenStar = () => {
    return(
        <div className='home-billboard-container'>
            <span className='home-billboard-title light small'>Earn Rewards, however you pay</span>
            <span className='home-billboard-text light small'>Cash or card, collect Stars that add up to free food and drinks with Starbucks® Rewards.</span>
            <div>
                <Button type='hollow' color='white' edge='round' size='medium'>
                    Learn more
                </Button>
            </div>
        </div>
    )
}

const Waiter = () => {
    return(
        <div className='home-billboard-container'>
            <span className='home-billboard-title small'>Elevating Black voices</span>
            <span className='home-billboard-text small'>This Black History Month, we hear from partners (employees) inspired by purpose, family and entrepreneurship, encouraging us to keep moving forward.</span>
            <div>
                <Button type='hollow' color='black' edge='round' size='medium'>
                    Be inspired
                </Button>
            </div>
        </div>
    )
}

function Home() {
    return (
        <div className='home-container'>       
            <div className='home-content'>
                <div className='home-title-container'>
                    <span className='home-title'>HAPPY VALENTINE'S DAY</span>
                </div>

                {/* VALENTIENES CARD */}
                <Billboard 
                    image={valentinesCard}
                    arrangement='image'
                    color='indigo'
                    margin='0px 0px 36px 0px'
                >
                    <ValentinesText />
                </Billboard>

                {/* DRINKS */}
                <Billboard 
                    image={drinks}
                    arrangement='text'
                    color='indigo'
                    margin='0px 0px 36px 0px'
                >
                    <Drinks />
                </Billboard>

                {/* BREAD */}
                <Billboard 
                    image={bread}
                    arrangement='image'
                    color='indigo'
                    margin='0px 0px 36px 0px'
                >
                    <Bread />
                </Billboard>

                {/* PAPER BAG */}
                <Billboard 
                    image={paperBag}
                    arrangement='text'
                    color='indigo'
                    margin='0px 0px 36px 0px'
                >
                    <PaperBag />
                </Billboard>

                {/* GREEN STAR */}
                <Billboard 
                    image={greenStar}
                    arrangement='text'
                    color='dark-dark-green'
                    margin='0px 0px 36px 0px'
                >
                    <GreenStar />
                </Billboard>

                {/* WAITER */}
                <Billboard 
                    image={waiter}
                    arrangement='text'
                    color='success'
                    margin='0px 0px 36px 0px'
                >
                    <Waiter />
                </Billboard>

                <Footer 
                    col1={{ title: 'About Us', 
                            items:  [
                                        {title: 'Our Heritage', 
                                        path: '/'
                                        },
                                        {title: 'Our Coffee', 
                                        path: '/'
                                        },
                                        {title: 'Stories and News', 
                                        path: '/'
                                        },
                                        {title: 'Investor Relations', 
                                        path: '/'
                                        },
                                        {title: 'Policies and Standards', 
                                        path: '/'
                                        },
                                        {title: 'Customer Service', 
                                        path: '/'
                                        }
                                    ]
                    }}

                    col2={{ title: 'Careers', 
                            items:  [
                                        {title: 'Cultures and Values', 
                                        path: '/'
                                        },
                                        {title: 'Inclusion, Diversity, and Equity', 
                                        path: '/'
                                        },
                                        {title: 'College Achievement Plan', 
                                        path: '/'
                                        },
                                        {title: 'U.S. Careers', 
                                        path: '/'
                                        },
                                        {title: 'International Careers', 
                                        path: '/'
                                        },
                                    ]
                    }}

                    col3={{ title: 'Social Impact', 
                            items:  [
                                        {title: 'Ethical Sourcing', 
                                        path: '/'
                                        },
                                        {title: 'Strengthening Communities', 
                                        path: '/'
                                        },
                                        {title: 'Creating Opportunities', 
                                        path: '/'
                                        },
                                        {title: 'Global Social Impact Report', 
                                        path: '/'
                                        },
                                    ]
                    }}

                    col4={{ title: 'For Business Partners', 
                            items:  [
                                        {title: 'Landlord Support Center', 
                                        path: '/'
                                        },
                                        {title: 'Suppliers', 
                                        path: '/'
                                        },
                                        {title: 'Corporate Gift Card Sales', 
                                        path: '/'
                                        },
                                        {title: 'Office and Foodservice Coffee', 
                                        path: '/'
                                        },
                                    ]
                    }}

                    col5={{ title: 'Order and Pickup', 
                            items:  [
                                        {title: 'Order on the App', 
                                        path: '/'
                                        },
                                        {title: 'Order on the Web', 
                                        path: '/'
                                        },
                                        {title: 'Delivery', 
                                        path: '/'
                                        },
                                        {title: 'Order and Pickup Options', 
                                        path: '/'
                                        },
                                        {title: 'Explore and Find Coffee for Home', 
                                        path: '/'
                                        },
                                    ]
                    }}  


                    alignment='left'
                />
            </div>
        </div>
    )
}

export default Home
