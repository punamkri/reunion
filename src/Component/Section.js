import React from 'react'
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/pic5.jpg"
import pic6 from "../assets/pic6.jpg"
import pic7 from "../assets/pic7.jpg"
import pic8 from "../assets/pic8.jpg"


export default function Section() {



  const data = [
    {
      "card":"$2,095/",
      "price": "month",
      "title": "Palm Harbor",
      "desc": "2699 Green Valley, Hightland Lake, FL",
      "img": pic4
    },
    {
      "card":"$2,700/",
      "price": "month",

      "title": "Beverly Springfield",
      "desc": "2821Lake Sevillia,Palm Harbor,TX",
      "img": pic2
    },
    {
      "card":"$4,550/",
      "price": "month",

      "title": "Faulkner Ave",
      "desc": "909 Woodland st, Michigan,IN",

      "img": pic5

    },
    {
      "card":"$3,800/",
      "price": "month",

      "title": "Beverly Springfield",
      "desc": "2821Lake Sevillia,Palm Harbor,TX",
      "img": pic6

    },
    {
      "card":"$5,860/",
      "price": "month",

      "title": "Palm Harbor",
      "desc": "2821Lake Sevillia,Palm Harbor,TX",
      "img": pic7

    },
    {
      "card":"$4,400/",
      "price": "month",

      "title": "Beverly Springfield",
      "desc": "909 Woodland st, Michigan,IN",
      "img": pic4

    }
  ]


  return (

    <div>
      <div className='container py-5'>
        <div className='row'>
          {data.map((d) => {

            return (
              <div className='col-sm-12 col-md-6 col-lg-4 '>

                <div class="card-deck mt-3">
                  <div class="card" >
                    <img class="card-img-top" src={d.img} alt="Card image cap" />
                    <div class="card-body">
                      <div className='flex-icon d-flex '>
                        <div className='d-flex'><h4 class="card-title">{d.card}</h4><small class="text-muted">{d.price}</small></div>
                        <div><i class="fa-solid fa-heart"></i></div>
                      </div>
                      <h4 class="card-text-line ">{d.title}</h4>
                      <p class="card-text "><small class="text-muted">{d.desc}</small></p>

                      <hr className='mt-1 py-0'/> 
                      <div className='iconn '>
                    <div><i class="fa-solid fa-bed"></i>3 Beds</div>
                    <div><i class="fa-solid fa-bath"></i>2 Bathrooms</div>
                    <div><i class="fa-solid fa-diamond">5*7 m2</i></div>
                    </div>
                  </div>

                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>


    </div>


  )
}
