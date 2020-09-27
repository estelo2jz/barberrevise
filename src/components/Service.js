// import React, { Component } from 'react';
// import { GiBackwardTime } from 'react-icons/gi';
// import { MdAttachMoney } from 'react-icons/md';


// export default class Service extends Component {
//   render() {
//     function Suffix(props) {
//       return (
//         <div>
//           <h1 className="suffix-heading">{props.title}</h1>
//           <div className="suffix-flex">
//             <div><p>{props.name}</p></div>
//             <div className="suffix-time">
//               <GiBackwardTime />
//               <div><p>{props.time}</p></div>
//             </div>
//             <div className="suffix-time">
//               <MdAttachMoney />
//               <div>{props.price}</div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//     function Minutes(props) {
//       return (
//         <div>
//           {props.timeOne}
//           {props.timeTwo}
//         </div>
//       );
//     }
//     function Price(props) {
//       return (
//         <p>56</p>
//       );
//     }
//     return (
//       <div className="service-container">
//         <div className="service-header">
//           <h1>SERVICES</h1>
//         </div>
//         <div className="service-flex">
//           <div>
//             <Suffix
//               title="ADOLESCENT (2-17)"
//               name="Haircut"
//               time="45 mins"
//               price="$25" />
//             <Suffix
//               name="Haircut and Eyebrows"
//               time="50 mins"
//               price="$30" />
//           </div>
//           <div>
//             <Suffix
//               title="MEN'S SERVICES (18+)"
//               name="Line up and Beard Shape up"
//               time="35 mins"
//               price="$20" />
//             <Suffix
//               name="Haircut"
//               time="55 mins"
//               price="$35" />
//             <Suffix
//               name="Haircut and Beard"
//               time="75 mins"
//               price="$45" />
//             <Suffix
//               name="Haircut, Beard and Eyebrows"
//               time="85 mins"
//               price="$50" />
//           </div>
//           <div>
//             <Suffix
//               title="ROYAL TREATMENT"
//               name="Haircut, Royal Shave, Eyebrows, Gold Mask and Bigen Dye"
//               time="95 mins"
//               price="$60" />
//           </div>
//         </div>

//         <div className="service-extra">
//           <p>All haircuts come with a complimentary wash. </p>
//           <p>All beard services come with a complimentary wash and hot towel.</p>
//         </div>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'

export default class Service extends Component {
  render() {
    return (
      <div className="service-container">
        <div className="service-inner">
          <h4>Services</h4>
          <div className="service-list-container">
            <h3>ADOLESCENT (2-17)</h3>
            <div className="service-list-inner">
              <ul>
                <li>Haircut</li>
                <li>Haircut and Eyebrows</li>
              </ul>
              <ul>
                <li>45 mins</li>
                <li>50 mins</li>

              </ul>
              <ul>
                <li>$ 25</li>
                <li>$ 30</li>
              </ul>
            </div>
          </div>

          <div className="service-list-container">
            <h3>MEN'S SERVICES (18+)</h3>
            <div className="service-list-inner">
              <ul>
                <li>Line up and Beard Shape up</li>
                <li>Haircut</li>
                <li>Haircut and Beard</li>
                <li>Haircut, Beard and Eyebrows</li>
              </ul>
              <ul>
                <li>35 mins</li>
                <li>55 mins</li>
                <li>75 mins</li>
                <li>85 mins</li>
              </ul>
              <ul>
                <li>$ 20</li>
                <li>$ 35</li>
                <li>$ 45</li>
                <li>$ 50</li>
              </ul>
            </div>
          </div>

          <div className="service-list-container">
            <h3>ROYAL TREATMENT</h3>
            <div className="service-list-inner">
              <ul>
                <li>Haircut, Royal Shave, Eyebrows, Gold Mask and Bigen Dye</li>
              </ul>
              <ul>
                <li>95 mins</li>
              </ul>
              <ul>
                <li>$ 60</li>
              </ul>
            </div>
          </div>
          <div className="service-comp">
            <p>
              All haircuts come with a complimentary wash.
            </p>
            <p>
              All beard services come with a complimentary wash and hot towel.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

