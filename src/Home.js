import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <img className="home__image" src="./background.jpg" 
            alt="" />
           <div className="home__row">
                <Product
                 id="111"
                 title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1 (40.9 cms) FHD Gaming Laptop "
                 price= {1235.23}
                  rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg"
                />

                <Product
                 id="222"
                 title="Asus ROG Rapture GT-AC5300 Tri-Band WiFi Gaming Router (Black) for VR and 4K "
                 price= {314.81}
                  rating={4}
                 image="https://images-na.ssl-images-amazon.com/images/I/51RzyXD3j1L._SL1000_.jpg"
                />


            </div>

            <div className="home__row">
                <Product
                 id="333"
                 title="Sennheiser CX 400BT True Wireless Earbuds - Bluetooth in-Ear Headphones for Music and Calls"
                 price= {147.98}
                  rating={4}
                 image="https://images-na.ssl-images-amazon.com/images/I/51O0OFy6izL._SL1200_.jpg"
                />

                <Product
                 id="444"
                 title="OnePlus 9 Pro 5G (Morning Mist, 8GB RAM, 128GB Storage) I Extra upto Rs.7000 off on Exchange"
                 price= {875.12}
                  rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/61LvUvbZGlL._SL1500_.jpg"
                />

                <Product
                 id="555"
                 title="Lenovo Legion Y44w-10 43.4DWUXGA Curved Screen WLED Gaming LCD Monitor."
                 price= {1346.53}
                  rating={4}
                 image="https://images-na.ssl-images-amazon.com/images/I/51Q2J9pSO6L._SL1280_.jpg"
                />


            </div>

            <div className="home__row">
                <Product
                 id="666"
                 title="IndoPrimo Men's Classic Fit Casual Shirt"
                 price= {9.02}
                  rating={3}
                 image="https://images-na.ssl-images-amazon.com/images/I/5193iu7I-7L._UL1438_.jpg"
                />

                <Product
                 id="777"
                 title="
                 YYW Roller Skates for Women Men, High Top PU Leather Classic Double-Row Roller Skates"
                 price= {211.92}
                  rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/61%2BRo-R0kGL._SL1000_.jpg"
                />

                <Product
                 id="888"
                 title="FCUK series 2 Full touch Smartwatch with 1.69'' Large display, Bluetooth Calling, SpO2, Metal body."
                 price= {53.86}
                  rating={2}
                 image="https://images-na.ssl-images-amazon.com/images/I/51KkL877xeL._UL1500_.jpg"
                />
                </div>

            <div className="home__row">
                <Product
                 id="999"
                 title="Malabar Gold and Diamonds 20 gm, 24k (999) Lakshmi Gold Coin"
                 price= {1393.44}
                  rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/71IUos2Po3L._UL1200_.jpg"
                />
                </div>

                <div className="home__row">
                <Product
                 id="11"
                 title="
                 
OFIXO Multi-Purpose Laptop Table/Study Table/Bed Table/Foldable and Portable Wooden/Writing Desk"
                 price= {6.61}
                  rating={4}
                 image="https://images-na.ssl-images-amazon.com/images/I/71msWIzlvwS._SL1500_.jpg"
                />

                <Product
                 id="12"
                 title="
                 Solimo Microfibre Reversible Comforter, Single (Sandy Beige & Walnut Brown, 200 GSM)"
                 price= {16.13}
                  rating={3}
                 image="https://images-na.ssl-images-amazon.com/images/I/81wWS8RqpOL._SL1500_.jpg"
                />

               
                </div>
            
        </div>
    )
}

export default Home
