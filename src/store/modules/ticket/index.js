import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      bookings: [],
      tickets: [
        {
          id: 1,
          date: '12-25-2023',
          bus: 'Volvo Super Delux',
          type: 'AC Sleeper 2 + 2',
          rating: '4.9',
          dTime: '08: 15 AM',
          duration: '02: 45 min',
          pTime: '02: 35 PM',
          fare: '115',
          from: 'Jineidah',
          to: 'Chittagong',
          seats: [
            {
              available: '15',
              booked: '25',
              total: '40',
            }
          ],
          allSeats: [
            ['A1', 'A2', 'A3', 'A4', 'A5'],
            ['B1', 'B2', 'B3', 'B4', 'B5'],
            ['C1', 'C2', 'C3', 'C4', 'C5'],
            ['D1', 'D2', 'D3', 'D4', 'D5'],
            ['E1', 'E2', 'E3', 'E4', 'E5'],
            ['F1', 'F2', 'F3', 'F4', 'F5'],
            ['G1', 'G2', 'G3', 'G4', 'G5'],
            ['H1', 'H2', 'H3', 'H4', 'H5'],
            ['I1', 'I2', 'I3', 'I4', 'I5'],
            ['J1', 'J2', 'J3', 'J4', 'J5'],
          ],
          cancelPolicy: 'Omnis labore illum porro, odit sit perspiciatis rerum consequatur autem, quidem possimus libero dolorem repellat! Necessitatibus beatae modi perspiciatis animi reiciendis dolores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis labore illum porro, odit sit perspiciatis rerum consequatur autem, quidem possimus libero dolorem repellat! Necessitatibus beatae modi perspiciatis animi reiciendis dolores.',
          boadings: [
            {
              time: '9:15 AM',
              stand: 'Kushtia Chorhas',
            },
            {
              time: '10:15 AM',
              stand: 'Kumarkhali Bus Stand',
            },
            {
              time: '11:15 AM',
              stand: 'Pangsa Bus Stand',
            },
            {
              time: '12:15 AM',
              stand: 'Maspara Bus Stand',
            },
          ],
          droppings: [
            {
              time: '02:15 PM',
              stand: 'Hali Shahar Bus Stand',
            },
            {
              time: '10:15 AM',
              stand: 'Agragad Bus Stand',
            },
            {
              time: '11:15 AM',
              stand: 'Potengga Bus Stand',
            },
            {
              time: '12:15 AM',
              stand: 'Cox Bazar Bus Stand',
            },
          ],
          busDetails: 'Omnis labore illum porro, odit sit perspiciatis rerum consequatur autem, quidem possimus libero dolorem repellat! Necessitatibus beatae modi perspiciatis animi reiciendis dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus, praesentium asperiores odit ratione sunt ipsam, neque dolorum libero blanditiis magnam deleniti molestias, vel in repellendus molestiae velit laudantium aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          aminities: [
            {
              icon: 'las la-wifi',
              name: 'WiFi',
            },
            {
              icon: 'las la-snowflake',
              name: ' Tv',
            },
            {
              icon: 'las la-wifi',
              name: ' Charging Port',
            },
            {
              icon: 'las la-wifi',
              name: 'WiFi',
            },
            {
              icon: 'las la-chair',
              name: ' Sleeper',
            },
            {
              icon: 'las la-wifi',
              name: 'Premium Seats',
            },
          ],


          selectedSeats: ['A1', 'B3', 'C2', 'F4'],
        },
        {
          id: 2,
          date: '8-14-2023',
          bus: 'Rabeya Chill',
          type: 'AC Sleeper 2 + 2',
          rating: '4.9',
          dTime: '08: 15 AM',
          duration: '02: 45 min',
          pTime: '02: 35 PM',
          fare: '1150',
          from: 'Kushtia',
          to: 'Rajbari',
          seats: [
            {
              available: '15',
              booked: '25',
              total: '40',
            }
          ],
          allSeats: [
            ['A1', 'A2', 'A3', 'A4', 'A5'],
            ['B1', 'B2', 'B3', 'B4', 'B5'],
            ['C1', 'C2', 'C3', 'C4', 'C5'],
            ['D1', 'D2', 'D3', 'D4', 'D5'],
            ['E1', 'E2', 'E3', 'E4', 'E5'],
            ['F1', 'F2', 'F3', 'F4', 'F5'],
            ['G1', 'G2', 'G3', 'G4', 'G5'],
            ['H1', 'H2', 'H3', 'H4', 'H5'],
            ['I1', 'I2', 'I3', 'I4', 'I5'],
            ['J1', 'J2', 'J3', 'J4', 'J5'],
          ],
          cancelPolicy: 'Omnis labore illum porro, odit sit perspiciatis rerum consequatur autem, quidem possimus libero dolorem repellat! Necessitatibus beatae modi perspiciatis animi reiciendis dolores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis labore illum porro, odit sit perspiciatis rerum consequatur autem, quidem possimus libero dolorem repellat! Necessitatibus beatae modi perspiciatis animi reiciendis dolores.',
          boadings: [
            {
              time: '9:15 AM',
              stand: 'Kushtia Tagoria',
            },
            {
              time: '10:15 AM',
              stand: 'Kumarkhali Bus Stand',
            },
            {
              time: '11:15 AM',
              stand: 'Pangsa Bus Stand',
            },
            {
              time: '12:15 AM',
              stand: 'Maspara Bus Stand',
            },
          ],
          droppings: [
            {
              time: '02:15 PM',
              stand: 'Hali Shahar Bus Stand',
            },
            {
              time: '10:15 AM',
              stand: 'Agragad Bus Stand',
            },
            {
              time: '11:15 AM',
              stand: 'Potengga Bus Stand',
            },
            {
              time: '12:15 AM',
              stand: 'Cox Bazar Bus Stand',
            },
          ],
          busDetails: 'Omnis labore illum porro, odit sit perspiciatis rerum consequatur autem, quidem possimus libero dolorem repellat! Necessitatibus beatae modi perspiciatis animi reiciendis dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus, praesentium asperiores odit ratione sunt ipsam, neque dolorum libero blanditiis magnam deleniti molestias, vel in repellendus molestiae velit laudantium aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          aminities: [
            {
              icon: 'las la-wifi',
              name: 'WiFi',
            },
            {
              icon: 'las la-snowflake',
              name: ' Tv',
            },
            {
              icon: 'las la-wifi',
              name: ' Charging Port',
            },
            {
              icon: 'las la-wifi',
              name: 'WiFi',
            },
            {
              icon: 'las la-chair',
              name: ' Sleeper',
            },
            {
              icon: 'las la-wifi',
              name: 'Premium Seats',
            },
          ],


          selectedSeats: ['C1', 'B3', 'F4'],
        },
        {
          id: 2,
          date: '8-15-2023',
          bus: 'Pangku Bus',
          type: 'AC Sleeper 2 + 2',
          rating: '4.9',
          dTime: '08: 15 AM',
          duration: '02: 45 min',
          pTime: '02: 35 PM',
          fare: '1150',
          from: 'Dhaka',
          to: 'Manikgong',
          seats: [
            {
              available: '15',
              booked: '25',
              total: '40',
            }
          ],
          allSeats: [
            ['A1', 'A2', 'A3', 'A4', 'A5'],
            ['B1', 'B2', 'B3', 'B4', 'B5'],
            ['C1', 'C2', 'C3', 'C4', 'C5'],
            ['D1', 'D2', 'D3', 'D4', 'D5'],
            ['E1', 'E2', 'E3', 'E4', 'E5'],
            ['F1', 'F2', 'F3', 'F4', 'F5'],
            ['G1', 'G2', 'G3', 'G4', 'G5'],
            ['H1', 'H2', 'H3', 'H4', 'H5'],
            ['I1', 'I2', 'I3', 'I4', 'I5'],
            ['J1', 'J2', 'J3', 'J4', 'J5'],
          ],
          cancelPolicy: 'Omnis labore illum porro, odit sit perspiciatis rerum consequatur autem, quidem possimus libero dolorem repellat! Necessitatibus beatae modi perspiciatis animi reiciendis dolores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis labore illum porro, odit sit perspiciatis rerum consequatur autem, quidem possimus libero dolorem repellat! Necessitatibus beatae modi perspiciatis animi reiciendis dolores.',
          boadings: [
            {
              time: '9:15 AM',
              stand: 'Kushtia Tagoria',
            },
            {
              time: '10:15 AM',
              stand: 'Kumarkhali Bus Stand',
            },
            {
              time: '11:15 AM',
              stand: 'Pangsa Bus Stand',
            },
            {
              time: '12:15 AM',
              stand: 'Maspara Bus Stand',
            },
          ],
          droppings: [
            {
              time: '02:15 PM',
              stand: 'Hali Shahar Bus Stand',
            },
            {
              time: '10:15 AM',
              stand: 'Agragad Bus Stand',
            },
            {
              time: '11:15 AM',
              stand: 'Potengga Bus Stand',
            },
            {
              time: '12:15 AM',
              stand: 'Cox Bazar Bus Stand',
            },
          ],
          busDetails: 'Omnis labore illum porro, odit sit perspiciatis rerum consequatur autem, quidem possimus libero dolorem repellat! Necessitatibus beatae modi perspiciatis animi reiciendis dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus, praesentium asperiores odit ratione sunt ipsam, neque dolorum libero blanditiis magnam deleniti molestias, vel in repellendus molestiae velit laudantium aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          aminities: [
            {
              icon: 'las la-wifi',
              name: 'WiFi',
            },
            {
              icon: 'las la-snowflake',
              name: ' Tv',
            },
            {
              icon: 'las la-wifi',
              name: ' Charging Port',
            },
            {
              icon: 'las la-wifi',
              name: 'WiFi',
            },
            {
              icon: 'las la-chair',
              name: ' Sleeper',
            },
            {
              icon: 'las la-wifi',
              name: 'Premium Seats',
            },
          ],


          selectedSeats: ['C1', 'B3', 'F4'],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
