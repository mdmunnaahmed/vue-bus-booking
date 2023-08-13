<template>
  <!-- Ticket Search Starts -->
  <div class="ticket-search-bar bg_img padding-top">
    <div class="container">
      <div class="bus-search-header">
        <form
          class="ticket-form ticket-form-two row g-3 justify-content-center"
        >
          <div class="col-md-4 col-lg-3">
            <div class="form--group position-relative">
              <i class="las la-location-arrow"></i>
              <input
                type="text"
                class="form--control"
                placeholder="Enter Pickup City"
                v-model="inputValue"
                @input="updateSuggestions"
              />
              <ul v-if="showSuggestions" class="slist">
                <li
                  v-for="(suggestion, index) in filteredSuggestions"
                  :key="index"
                  @click="selectSuggestion(suggestion)"
                >
                  {{ suggestion.bus }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="form--group">
              <i class="las la-map-marker"></i>
              <input
                type="text"
                class="form--control"
                placeholder="Enter Destination City"
              />
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="form--group">
              <i class="las la-calendar-check"></i>
              <input
                type="date"
                id="start-date"
                class="form--control"
                placeholder="Departure Date"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="form--group">
              <button>Find Tickets</button>
            </div>
          </div>
        </form>
        <div class="row gy-4 justify-content-between">
          <div class="col-lg-4 col-md-6">
            <div class="route-info">
              <div class="thumb">
                <img src="../assets/thumb/bus.jpg" alt="bg" />
              </div>
              <div class="content">
                <h5 class="title">Dhaka - Kushtia</h5>
                <span class="date">16 May, 21</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="search-result">
              <h6 class="title">Showing Results :</h6>
              <div class="wrapper">
                <div class="icon">
                  <i class="las la-bus"></i>
                </div>
                <span class="result-info">32 Buses Found</span>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-lg-4 col-xl-3">
            <div class="route-date-changer">
              <div class="button-wrapper">
                <button type="button" class="date-btn">
                  <i class="las la-arrow-left"></i> Prev. Day
                </button>
                <button type="button" class="date-btn">
                  Next Day <i class="las la-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Ticket Search Starts -->

  <!-- Ticket Section Starts Here -->
  <section class="ticket-section padding-bottom section-bg">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-3">
          <div class="ticket-filter">
            <div class="filter-header filter-item">
              <h4 class="title">Filter</h4>
              <button type="reset" class="reset-button py-2 h-auto">
                Reset All
              </button>
            </div>
            <div class="filter-item">
              <h5 class="title">Bus Type</h5>
              <ul class="bus-type">
                <li class="custom--checkbox">
                  <input id="ac" type="checkbox" />
                  <label for="ac"
                    ><span><i class="las la-snowflake"></i>Ac</span></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="non-ac" type="checkbox" />
                  <label for="non-ac"
                    ><span><i class="las la-snowflake"></i>Non-Ac</span></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="seater" type="checkbox" />
                  <label for="seater"
                    ><span><i class="las la-chair"></i>Seater</span></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="sleeper" type="checkbox" />
                  <label for="sleeper"
                    ><span><i class="las la-bed"></i>Sleeper</span></label
                  >
                </li>
              </ul>
            </div>
            <div class="filter-item">
              <h5 class="title">Departure Time</h5>
              <ul class="bus-type">
                <li class="custom--checkbox">
                  <input id="01" type="checkbox" />
                  <label for="01"
                    ><span
                      ><i class="las la-stopwatch"></i>Before 6 am</span
                    ></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="02" type="checkbox" />
                  <label for="02"
                    ><span
                      ><i class="las la-stopwatch"></i>Before 8 am</span
                    ></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="03" type="checkbox" />
                  <label for="03"
                    ><span
                      ><i class="las la-stopwatch"></i>Before 10 am</span
                    ></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="04" type="checkbox" />
                  <label for="04"
                    ><span
                      ><i class="las la-stopwatch"></i>Before 11:30 am</span
                    ></label
                  >
                </li>
              </ul>
            </div>
            <div class="filter-item">
              <h5 class="title">Arrival Time</h5>
              <ul class="bus-type">
                <li class="custom--checkbox">
                  <input id="05" type="checkbox" />
                  <label for="05"
                    ><span
                      ><i class="las la-stopwatch"></i>Before 6 am</span
                    ></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="06" type="checkbox" />
                  <label for="06"
                    ><span
                      ><i class="las la-stopwatch"></i>Before 8 am</span
                    ></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="07" type="checkbox" />
                  <label for="07"
                    ><span
                      ><i class="las la-stopwatch"></i>Before 10 am</span
                    ></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="08" type="checkbox" />
                  <label for="08"
                    ><span
                      ><i class="las la-stopwatch"></i>Before 11:30 am</span
                    ></label
                  >
                </li>
              </ul>
            </div>
            <div class="filter-item">
              <h5 class="title">Amenities</h5>
              <ul class="bus-type">
                <li class="custom--checkbox">
                  <input id="wifi" type="checkbox" />
                  <label for="wifi"
                    ><span><i class="las la-wifi"></i>Wifi</span></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="charging-port" type="checkbox" />
                  <label for="charging-port"
                    ><span
                      ><i class="las la-battery-quarter"></i>Chargin Port
                    </span></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="sleeper2" type="checkbox" />
                  <label for="sleeper2"
                    ><span
                      ><i class="las la-battery-quarter"></i>Sleeper</span
                    ></label
                  >
                </li>
                <li class="custom--checkbox">
                  <input id="tv" type="checkbox" />
                  <label for="tv"
                    ><span><i class="las la-tv"></i>TV </span></label
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="ticket-wrapper">
            <div
              class="ticket-item"
              v-for="(ticket, index) in tickets"
              :key="index"
            >
              <div class="ticket-item-inner">
                <h5 class="bus-name">{{ ticket.bus }}</h5>
                <span class="bus-info">{{ ticket.type }}</span>
                <span class="ratting"
                  ><i class="las la-star"></i>{{ ticket.rating }} / 5</span
                >
              </div>
              <div class="ticket-item-inner travel-time">
                <div class="bus-time">
                  <p class="time">{{ ticket.dTime }}</p>
                  <p class="place">{{ ticket.boadings[0].stand }}</p>
                </div>
                <div class="bus-time">
                  <i class="las la-arrow-right"></i>
                  <p>{{ ticket.duration }}</p>
                </div>
                <div class="bus-time">
                  <p class="time">{{ ticket.pTime }}</p>
                  <p class="place">{{ ticket.droppings[0].stand }}</p>
                </div>
              </div>
              <div class="ticket-item-inner book-ticket">
                <p class="rent">$ {{ ticket.fare }}</p>
                <p
                  class="seats-left"
                  v-for="seat in ticket.seats"
                  :key="seat.available"
                >
                  Only {{ seat.available }} Seats Left
                </p>
                <button class="select-seat-btn" @click="toggleSeats(ticket.id)">
                  Select Seat
                </button>
              </div>
              <div class="ticket-item-footer">
                <ul class="info-list nav-tabs nav border-0">
                  <li class="cancellation">
                    <a href="#cancel" data-bs-toggle="tab" class="info-list-btn"
                      >Calcellation Policy</a
                    >
                  </li>
                  <li class="boading-point">
                    <a
                      href="#boarding"
                      data-bs-toggle="tab"
                      class="info-list-btn"
                      >Boading Point</a
                    >
                  </li>
                  <li class="dropping-point">
                    <a
                      href="#dropping"
                      data-bs-toggle="tab"
                      class="info-list-btn"
                      >Dropping Point</a
                    >
                  </li>
                  <li class="amenities">
                    <a
                      href="#amenities"
                      data-bs-toggle="tab"
                      class="info-list-btn"
                      >Amenities & Bus Details</a
                    >
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane show fade" id="cancel">
                    <div class="cancellation-details info-details">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Omnis labore illum porro, odit sit perspiciatis
                        rerum consequatur autem, quidem possimus libero dolorem
                        repellat! Necessitatibus beatae modi perspiciatis animi
                        reiciendis dolores. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Omnis labore illum porro,
                        odit sit perspiciatis rerum consequatur autem, quidem
                        possimus libero dolorem repellat! Necessitatibus beatae
                        modi perspiciatis animi reiciendis dolores.
                      </p>
                      <ul class="list">
                        <li>amet consectetur adipisicing elit. Omnis</li>
                        <li>Necessitatibus beatae modi Omnis</li>
                        <li>amet consectetur adipisicing elit. Omnis</li>
                        <li>perspiciatis animi reiciendis doloresOmnis</li>
                      </ul>
                    </div>
                    <div class="close-btn">
                      <i class="las la-times"></i>
                    </div>
                  </div>
                  <div class="tab-pane show fade" id="boarding">
                    <div class="info-details bor-drop-lsit">
                      <h6 class="title">Boarding Points</h6>
                      <ul class="list">
                        <li>
                          <span class="time">09:15 am</span>
                          <p class="bor-point">Khoksa Bus Stand, Kushtia</p>
                          <p class="bor-info">Lalonsah Highway, Kushtia East</p>
                        </li>
                        <li>
                          <span class="time">10:15 am</span>
                          <p class="bor-point">Khoksa Bus Stand, Kushtia</p>
                          <p class="bor-info">Lalonsah Highway, Kushtia East</p>
                        </li>
                        <li>
                          <span class="time">11:15 am</span>
                          <p class="bor-point">Khoksa Bus Stand, Kushtia</p>
                          <p class="bor-info">Lalonsah Highway, Kushtia East</p>
                        </li>
                        <li>
                          <span class="time">12:15 am</span>
                          <p class="bor-point">Khoksa Bus Stand, Kushtia</p>
                          <p class="bor-info">Lalonsah Highway, Kushtia East</p>
                        </li>
                      </ul>
                    </div>
                    <div class="close-btn">
                      <i class="las la-times"></i>
                    </div>
                  </div>
                  <div class="tab-pane show fade" id="dropping">
                    <div class="info-details bor-drop-lsit">
                      <h6 class="title">Dropping Points</h6>
                      <ul class="list">
                        <li>
                          <span class="time">09:15 am</span>
                          <p class="bor-point">Khoksa Bus Stand, Kushtia</p>
                          <p class="bor-info">Lalonsah Highway, Kushtia East</p>
                        </li>
                        <li>
                          <span class="time">09:15 am</span>
                          <p class="bor-point">Khoksa Bus Stand, Kushtia</p>
                          <p class="bor-info">Lalonsah Highway, Kushtia East</p>
                        </li>
                        <li>
                          <span class="time">09:15 am</span>
                          <p class="bor-point">Khoksa Bus Stand, Kushtia</p>
                          <p class="bor-info">Lalonsah Highway, Kushtia East</p>
                        </li>
                        <li>
                          <span class="time">09:15 am</span>
                          <p class="bor-point">Khoksa Bus Stand, Kushtia</p>
                          <p class="bor-info">Lalonsah Highway, Kushtia East</p>
                        </li>
                      </ul>
                    </div>
                    <div class="close-btn">
                      <i class="las la-times"></i>
                    </div>
                  </div>
                  <div class="tab-pane show fade" id="amenities">
                    <div class="amenities-details info-details">
                      <h6 class="bus-details">Bus Details</h6>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Omnis labore illum porro, odit sit perspiciatis
                        rerum consequatur autem, quidem possimus libero dolorem
                        repellat! Necessitatibus beatae modi perspiciatis animi
                        reiciendis dolores. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Facere ducimus,
                        praesentium asperiores odit ratione sunt ipsam, neque
                        dolorum libero blanditiis magnam deleniti molestias, vel
                        in repellendus molestiae velit laudantium aliquid? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Vitae
                        quidem tempore tempora reiciendis quaerat modi repellat
                        voluptate perferendis labore facilis, harum laudantium
                        voluptatum cum, nesciunt nostrum perspiciatis dolore
                        quam cupiditate?
                      </p>
                      <p>
                        Necessitatibus beatae modi perspiciatis animi reiciendis
                        dolores. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Facere ducimus, praesentium asperiores
                        odit ratione sunt ipsam, neque dolorum libero blanditiis
                        magnam deleniti molestias, vel in repellendus molestiae
                        velit laudantium aliquid?odi repellat voluptate
                        perferendis labore facilis, harum laudantium voluptatum
                        cum, nesciunt nostrum perspiciatis dolore quam
                        cupiditate?
                      </p>
                      <h6 class="mt-4">Bus Amenities</h6>
                      <ul class="list">
                        <li><i class="las la-wifi"></i> Wifi</li>
                        <li><i class="las la-snowflake"></i> Tv</li>
                        <li><i class="las la-tv"></i> Charging Port</li>
                        <li><i class="las la-chair"></i> Sleeper</li>
                        <li><i class="las la-wifi"></i> Ladies Toilet</li>
                        <li><i class="las la-wifi"></i> Premium Seats</li>
                        <li><i class="las la-wifi"></i> Wifi</li>
                        <li><i class="las la-wifi"></i> Wifi</li>
                      </ul>
                    </div>
                    <div class="close-btn">
                      <i class="las la-times"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="seat-plan-wrapper"
                :class="isSeatVisible == [ticket.id] ? 'selected' : ''"
              >
                <h6
                  class="title"
                  v-for="seat in ticket.seats"
                  :key="seat.available"
                >
                  {{ seat.available }} Available
                  {{ seat.available <= 1 ? "Seat" : "Seats" }}
                </h6>

                <span>Click on Seat to select or deselect</span>
                <div class="row gx-lg-0 gx-lg-4 gy-4 justify-content-between">
                  <div class="col-lg-6 col-xl-5 col-md-7">
                    <div class="seat-plan-inner">
                      <div class="single">
                        <span class="front">Front</span>
                        <span class="rear">Rear</span>
                        <span class="lower">Door</span>
                        <span class="driver"
                          ><img src="../assets/icon/wheel.svg" alt="icon"
                        /></span>
                        <div
                          class="seat-wrapper"
                          v-for="(allseat, index) in ticket.allSeats"
                          :key="index"
                        >
                          <div
                            :class="
                              bookedTickets[ticket.id].includes(allseat[0])
                                ? 'booked'
                                : ''
                            "
                          >
                            <span
                              @click="selectSeat(allseat[0], ticket.id)"
                              class="seat"
                              :class="
                                selectedSeats.includes(allseat[0])
                                  ? 'selected'
                                  : ''
                              "
                              >{{ allseat[0] }}<span></span
                            ></span>
                          </div>
                          <div
                            :class="
                              bookedTickets[ticket.id].includes(allseat[1])
                                ? 'booked'
                                : ''
                            "
                          >
                            <span
                              @click="selectSeat(allseat[1], ticket.id)"
                              class="seat"
                              :class="
                                selectedSeats.includes(allseat[1])
                                  ? 'selected'
                                  : ''
                              "
                              >{{ allseat[1] }}<span></span
                            ></span>
                          </div>
                          <div
                            :class="
                              bookedTickets[ticket.id].includes(allseat[2])
                                ? 'booked'
                                : ''
                            "
                          >
                            <span
                              @click="selectSeat(allseat[2], ticket.id)"
                              class="seat"
                              :class="
                                selectedSeats.includes(allseat[2])
                                  ? 'selected'
                                  : ''
                              "
                              >{{ allseat[2] }}<span></span
                            ></span>
                          </div>

                          <div
                            :class="
                              bookedTickets[ticket.id].includes(allseat[3])
                                ? 'booked'
                                : ''
                            "
                          >
                            <span
                              @click="selectSeat(allseat[3], ticket.id)"
                              class="seat"
                              :class="
                                selectedSeats.includes(allseat[3])
                                  ? 'selected'
                                  : ''
                              "
                              >{{ allseat[3] }}<span></span
                            ></span>
                          </div>
                          <div
                            :class="
                              bookedTickets[ticket.id].includes(allseat[4])
                                ? 'booked'
                                : ''
                            "
                          >
                            <span
                              @click="selectSeat(allseat[4], ticket.id)"
                              class="seat"
                              :class="
                                selectedSeats.includes(allseat[4])
                                  ? 'selected'
                                  : ''
                              "
                              >{{ allseat[4] }}<span></span
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="seat-for-reserved">
                        <div class="seat-condition available-seat">
                          <span class="seat"><span></span></span>
                          <p>Available Seats</p>
                        </div>
                        <div class="seat-condition selected-by-others">
                          <span class="seat"><span></span></span>
                          <p>Available Seats</p>
                        </div>
                        <div class="seat-condition selected-by-you">
                          <span class="seat"><span></span></span>
                          <p>Selected by You</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-5">
                    <div class="seat-overview-wrapper">
                      <div class="boarding-point">
                        <select
                          class="form-select form--control"
                          v-model="boadingPoint"
                        >
                          <option value="1">Boarding Point</option>
                          <option
                            v-for="(boading, index) in ticket.boadings"
                            :key="index"
                            :value="boading.stand + boading.time"
                          >
                            {{ boading.stand }} <span> </span>
                            {{ boading.time }}
                          </option>
                        </select>
                      </div>
                      <div class="destination-point">
                        <select
                          class="form-select form--control"
                          v-model="droppingPoint"
                        >
                          <option value="1">Destination Point</option>
                          <option
                            v-for="(dropping, index) in ticket.droppings"
                            :key="index"
                            :value="dropping.stand + dropping.time"
                          >
                            {{ dropping.stand }} <span> </span>
                            {{ dropping.time }}
                          </option>
                        </select>
                      </div>
                      <ul class="seat-info">
                        <li class="seat-no pb-0">
                          <h6 class="title">Seat No</h6>
                          <div>
                            <span
                              v-for="(seat, index) in selectedSeat"
                              :key="index"
                            >
                              <span style="width: 10px"></span>
                              <span class="value">{{ seat }} </span>
                            </span>
                          </div>
                        </li>
                        <li class="pt-0">
                          <p v-if="overSelected" class="text--danger">
                            You can't select more than 4 seats at once
                          </p>
                        </li>
                      </ul>
                      <ul class="seat-info">
                        <li class="fare">
                          <h6 class="title">Fare</h6>
                          <span class="value">$ {{ ticket.fare }}</span>
                        </li>
                        <li class="fare">
                          <h6 class="title">Total</h6>
                          <span class="value fw-semibold text--success"
                            >$ {{ totalFare }}</span
                          >
                        </li>
                      </ul>
                      <button
                        class="book-bus-btn"
                        :class="
                          selectedSeats.length <= 0 ||
                          boadingPoint == 1 ||
                          droppingPoint == 1
                            ? 'disabled'
                            : ''
                        "
                        @click="navigateToNextPage"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Ticket Section Ends Here -->
</template>

<script>
export default {
  data() {
    return {
      isSelected: false,
      isSeatVisible: "",
      overSelected: false,
      inputValue: "",
      selectedSeats: [],
      bookedTickets: [[]],
      boadingPoint: 1,
      droppingPoint: 1,
      suggestionsArray: [],
      showSuggestions: false,

      date: "",
      from: "",
      to: "",
      bus: "",
      droppingStand: "",
      boadingStand: "",

      droppingTime: "",
      boadingTime: "",
      fare: "",
    };
  },
  computed: {
    filteredSuggestions() {
      return this.suggestionsArray.filter((suggestion) =>
        suggestion.toLowerCase().includes(this.inputValue.toLowerCase())
      );
    },
    tickets() {
      return this.$store.getters["ticket/tickets"];
    },
    selectedSeat() {
      return this.selectedSeats;
    },
    totalFare() {
      return this.selectedSeats.length * this.fare;
    },
  },
  methods: {
    navigateToNextPage() {
      const dataToSend = {
        seats: this.selectedSeats,
        drop: this.droppingPoint,
        boad: this.boadingPoint,
        from: this.from,
        to: this.to,
        bus: this.bus,
        date: this.date,
        totalFare: this.totalFare,
        fare: this.fare,
      };
      this.$router.push({ path: `/bus-ticket/${JSON.stringify(dataToSend)}` });
    },
    toggleSeats(id) {
      if (this.isSeatVisible == id) {
        return;
      }
      this.isSeatVisible = id;
      this.selectedSeats = [];
      this.overSelected = false;
      this.droppingPoint = 1;
      this.boadingPoint = 1;
    },
    selectSeat(seat, selectBus) {
      this.isSelected = true;

      // const selectTheBus =
      //   this.$store.getters["ticket/tickets"][selectBus - 1].selectedSeats;

      this.from = this.$store.getters["ticket/tickets"][selectBus - 1].from;
      this.to = this.$store.getters["ticket/tickets"][selectBus - 1].to;
      this.bus = this.$store.getters["ticket/tickets"][selectBus - 1].bus;
      this.date = this.$store.getters["ticket/tickets"][selectBus - 1].date;
      this.fare = this.$store.getters["ticket/tickets"][selectBus - 1].fare;

      if (this.selectedSeats.includes(seat)) {
        this.selectedSeats.pop(seat);
        // selectTheBus.pop(seat);
        this.overSelected = false;
      } else {
        if (this.selectedSeats.length == 4) {
          this.overSelected = true;
          return;
        }
        this.selectedSeats.push(seat);
        // selectTheBus.push(seat);

        console.log(this.selectedSeats);
      }
    },
    updateSuggestions() {
      this.showSuggestions = this.inputValue.length > 0;
    },
    selectSuggestion(suggestion) {
      this.inputValue = suggestion.bus;
      this.showSuggestions = false;
    },

    displayItems() {
      for (let i = 0; i < this.suggestionsArray.length; i++) {
        console.log(this.suggestionsArray[i]);
      }
    },

    bookedTicket() {
      const tickets = this.$store.getters["ticket/tickets"];
      for (let i = 0; i < tickets.length; i++) {
        this.bookedTickets.push(tickets[i].selectedSeats);
      }
    },
  },

  created() {
    this.bookedTicket();
  },
};
</script>

<style scoped>
.slist {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  top: 100%;
  width: 100%;
}

.slist li {
  padding: 8px;
  cursor: pointer;
}

.slist li:hover {
  background-color: #f0f0f0;
}

.custom--checkbox label {
  flex-grow: 1;
}

.filter-item {
  padding: 15px 15px 25px;
  background: #fff;
  border-radius: 5px;
  border-bottom: 1px solid rgba(27, 39, 61, 0.1);
  width: 100%;
}

@media (max-width: 991px) {
  .filter-item {
    width: 50%;
  }
}

@media (max-width: 575px) {
  .filter-item {
    width: 100%;
  }
}

.filter-item .title {
  margin-bottom: 15px;
}

.filter-item .bus-type li {
  width: 100%;
  padding: 5px 0px;
}

.filter-item .bus-type li span {
  display: block;
  padding: 3px 8px;
  background: #f6f6f7;
  border-radius: 3px;
}

.filter-item .bus-type li span i {
  margin-right: 5px;
}

.ticket-search-bar {
  position: relative;
}

.ticket-search-bar::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #1b273d;
  opacity: 0.45;
}

.ticket-search-bar .container {
  position: relative;
  z-index: 1;
}

.bus-search-header {
  padding: 40px 30px;
  border-radius: 10px 10px 0 0;
  background: #fff;
  margin-bottom: 50px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (max-width: 767px) {
  .bus-search-header {
    padding: 30px 20px;
  }
}

@media (max-width: 575px) {
  .bus-search-header {
    padding: 20px 15px;
  }
}

.bus-search-header .route-info {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.bus-search-header .route-info .thumb {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}

.bus-search-header .route-info .thumb img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.bus-search-header .route-info .content {
  padding-left: 15px;
}

.bus-search-header .route-info .content .title {
  color: #1f1f1f;
  margin-bottom: 0;
}

.bus-search-header .route-info .content .date {
  font-size: 14px;
}

.bus-search-header .search-result .title {
  margin-bottom: 7px;
}

.bus-search-header .search-result .wrapper .icon {
  font-size: 26px;
  color: #0e9e4d;
  margin-right: 5px;
}

.bus-search-header .search-result .wrapper .result-info {
  font-size: 15px;
}

.bus-search-header .route-date-changer .button-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.bus-search-header .route-date-changer button {
  width: auto;
  height: auto;
  padding: 12px 18px;
  font-weight: 500;
  font-size: 15px;
}

@media (max-width: 1199px) {
  .bus-search-header .route-date-changer button {
    margin-bottom: 10px;
  }
}

.bus-search-header .route-date-changer .result-info {
  margin-bottom: 10px;
  line-height: 1.3;
  display: block;
}

.bus-search-header .ticket-form-two {
  padding: 0;
  background: transparent;
  margin-bottom: 30px;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.ticket-item {
  padding: 25px;
  background: #fff;
  margin-bottom: 15px;
  border-radius: 5px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.ticket-item:last-child {
  margin-bottom: 0;
}

@media (max-width: 575px) {
  .ticket-item {
    padding: 20px 15px;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
  }
}

.ticket-item-inner {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

@media (max-width: 767px) {
  .ticket-item-inner {
    width: 100%;
    text-align: left;
  }
}

.ticket-item-inner .bus-info {
  font-size: 13px;
}

.ticket-item-inner .ratting {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #e9ba11;
}

.ticket-item-inner .ratting i {
  margin-right: 4px;
}

.ticket-item-inner .bus-time {
  text-align: center;
}

.ticket-item-inner .bus-time i {
  font-size: 24px;
  color: #0e9e4d;
}

.ticket-item-inner .bus-time .time {
  font-size: 18px;
  color: #1f1f1f;
  font-weight: 600;
}

@media (max-width: 767px) {
  .ticket-item-inner .bus-time {
    text-align: left;
  }
}

.ticket-item-inner button {
  height: auto;
  width: auto;
  padding: 10px 15px;
  margin: 0;
  line-height: 1;
  font-weight: 600;
  word-spacing: 3px;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 10px;
}

.travel-time {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (max-width: 767px) {
  .travel-time {
    text-align: left;
    margin-left: -15px;
    margin-right: -15px;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    margin-top: 25px;
  }
}

.travel-time div {
  padding: 0 15px;
}

@media (max-width: 575px) {
  .travel-time div {
    padding: 0 10px;
  }
}

.book-ticket {
  text-align: center;
}

@media (max-width: 767px) {
  .book-ticket {
    text-align: left;
    margin-top: 25px;
  }
}

.book-ticket .rent {
  font-size: 20px;
  color: #0e9e4d;
  margin-bottom: 5px;
}

.book-ticket .seats-left {
  color: #1b273d;
}

.ticket-item-footer {
  padding-top: 10px;
  margin-top: 15px;
  width: 100%;
  border-top: 1px solid rgba(27, 39, 61, 0.1);
  position: relative;
}

.ticket-item-footer .info-list {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.ticket-item-footer .info-list li {
  padding: 3px 10px;
  cursor: pointer;
}

.ticket-item-footer .info-list li a.active {
  color: #0e9e4d;
}

@media (max-width: 767px) {
  .ticket-item-footer .info-list li {
    width: 50%;
  }
}

@media (max-width: 575px) {
  .ticket-item-footer .info-list li {
    width: 100%;
  }
}

.ticket-item-footer .info-details {
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 25px;
  padding-right: 60px;
  background: #fff;
  border: 1px solid rgba(27, 39, 61, 0.15);
  left: 0;
  top: 50px;
  -webkit-box-shadow: 0 10px 25px rgba(27, 39, 61, 0.15);
  box-shadow: 0 10px 25px rgba(27, 39, 61, 0.15);
}

@media (max-width: 575px) {
  .ticket-item-footer .info-details {
    padding: 15px;
  }
}

.ticket-item-footer .info-details .list {
  margin-top: 15px;
}

.ticket-item-footer .info-details .list li {
  list-style-type: none;
  margin-left: 15px;
}

@media (max-width: 767px) {
  .ticket-item-footer .info-details .list li {
    margin-left: 0 !important;
  }
}

.ticket-item-footer .bor-drop-lsit {
  max-height: 400px;
  overflow-y: auto;
}

.ticket-item-footer .bor-drop-lsit li {
  list-style: none !important;
  border-bottom: 1px solid rgba(27, 39, 61, 0.1);
}

.ticket-item-footer .bor-drop-lsit li:last-child {
  border-bottom: none;
}

.ticket-item-footer .bor-drop-lsit li .time {
  font-size: 17px;
  color: #554bb9;
  font-weight: 600;
}

.ticket-item-footer .bor-drop-lsit li .bor-point {
  font-weight: 600;
  color: #424248;
}

.ticket-item-footer .amenities-details .list li {
  width: 30%;
  list-style-type: none;
}

@media (max-width: 767px) {
  .ticket-item-footer .amenities-details .list li {
    width: 50%;
  }
}

@media (max-width: 575px) {
  .ticket-item-footer .amenities-details .list li {
    width: 100%;
  }
}

.ticket-item-footer .amenities-details .list li i {
  color: #0e9e4d;
  margin-right: 5px;
}

.tab-pane .close-btn {
  padding: 5px 10px;
  border-radius: 3px;
  background: rgba(27, 39, 61, 0.2);
  color: #fff;
  font-size: 20px;
  position: absolute;
  display: inline-block;
  right: 10px;
  top: 60px;
  cursor: pointer;
  z-index: 5;
}

.tab-pane .close-btn:hover {
  background: #1b273d;
}

.bus-seat-management {
  padding: 30px;
  border-radius: 10px;
  background: #fff;
  -webkit-box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.05);
  box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.05);
  width: 100%;
}

.bus-seat-management .all-seats li {
  font-size: 24px;
  padding: 5px;
}

.seat-plan-wrapper {
  width: 100%;
  margin-top: 40px;
  display: none;
  position: relative;
  z-index: 1;
  background: #fff;
}

.seat-plan-wrapper.selected {
  display: block;
}

.seat-plan-inner {
  margin-top: 25px;
}

.seat-plan-inner .single {
  position: relative;
  border: 0.5px solid #979797;
  min-height: 150px;
  max-width: 100%;
  padding: 80px 25px 30px;
  margin-bottom: 55px;
}

@media (max-width: 1199px) {
  .seat-plan-inner .single {
    padding-top: 60px;
  }
}

.seat-plan-inner .front {
  position: absolute;
  width: 60px;
  height: 25px;
  top: -13px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  z-index: 23;
  color: #9b9b9b;
  background: #f1f1f1;
  letter-spacing: 1px;
}

.seat-plan-inner .rear {
  position: absolute;
  width: 60px;
  height: 25px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: -13px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  z-index: 23;
  color: #9b9b9b;
  background: #f1f1f1;
  letter-spacing: 1px;
}

.seat-plan-inner .lower {
  width: 50px;
  height: 40px;
  position: absolute;
  left: 20px;
  top: 20px;
  color: #777;
  font-weight: 600;
  text-transform: uppercase;
}

.seat-plan-inner .driver {
  position: absolute;
  right: 20px;
  top: 15px;
}

.seat-wrapper {
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 15px;
}

.seat-wrapper .reserve-for-ladies .seat {
  color: #777 !important;
}

.seat-wrapper .left-side,
.seat-wrapper .right-side {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.seat-wrapper .seat {
  height: 50px;
  width: 35px;
  color: #777;
  border: 1px solid #bebebe;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  font-weight: 100;
  font-size: 15px;
}

@media (max-width: 575px) {
  .seat-wrapper .seat {
    height: 45px;
    width: 30px;
    font-size: 14px;
  }
}

.seat-wrapper .seat span {
  position: absolute;
  left: 2px;
  right: 2px;
  height: 4px;
  border: 1px solid rgba(27, 39, 61, 0.2);
  border-radius: 2px;
  bottom: 6px;
}

.seat-wrapper .seat.selected {
  border-color: #0e9e4d;
  background: #0e9e4d;
  color: #fff;
}

.seat-wrapper .seat.selected span {
  background: #fff;
  border-color: #fff;
}

.seat-for-reserved {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0;
  margin-top: 15px;
}

.seat-for-reserved .seat-condition {
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 50%;
  padding-bottom: 20px;
}

@media (max-width: 575px) {
  .seat-for-reserved .seat-condition {
    width: 100%;
  }
}

.seat-for-reserved .seat {
  width: 50px;
  height: 18px;
  border: 1px solid #979797;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
}

.seat-for-reserved .seat span {
  position: absolute;
  top: 2px;
  bottom: 2px;
  width: 4px;
  border: 1px solid rgba(27, 39, 61, 0.25);
  right: 7px;
  border-radius: 2px;
}

.seat-for-reserved p {
  display: inline-block;
  font-size: 14px;
  line-height: 1.25;
}

.seat-for-reserved .selected-by-you .seat {
  border-color: #0e9e4d;
  background: #0e9e4d;
}

.seat-for-reserved .selected-by-you .seat span {
  background: #fff;
  border-color: #fff;
}

.seat-for-reserved .selected-by-others .seat {
  border-color: #d0d0d0;
  background: #d0d0d0;
  color: #777 !important;
}

.seat-for-reserved .selected-by-ladies .seat span {
  background: #fff;
  border-color: #fff;
}

.seat-for-reserved .reserve-for-ladies .seat {
  border-color: #f763c6;
  background: #fff;
}

.seat-for-reserved .reserve-for-ladies .seat span {
  background: #f763c6;
  border-color: #f763c6;
}

.selected-by-you .seat {
  border-color: #0e9e4d;
  background: #0e9e4d;
}

.selected-by-you .seat span {
  background: #fff;
  border-color: #fff;
}

.selected-by-ladies .seat {
  border-color: #f763c6 !important;
  background: #f763c6 !important;
}

.selected-by-ladies .seat span {
  background: #fff !important;
  border-color: #fff !important;
}

.reserve-for-ladies .seat {
  border-color: #f763c6 !important;
  background: #fff !important;
}

.reserve-for-ladies .seat span {
  background: #f763c6 !important;
  border-color: #f763c6 !important;
}

.seat-overview-wrapper {
  border: 1px solid rgba(27, 39, 61, 0.35);
  border-radius: 5px;
  padding: 20px 15px;
}

@media (min-width: 1200px) {
  .seat-overview-wrapper {
    padding: 30px;
  }
}

.seat-overview-wrapper .boarding-point {
  margin-bottom: 15px;
  height: 40px;
}

.seat-overview-wrapper .destination-point {
  margin-top: 15px;
  height: 40px;
}

.seat-overview-wrapper .seat-info {
  margin-top: 15px;
}

.seat-overview-wrapper .seat-info li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.seat-overview-wrapper .seat-info li .title {
  display: inline-block;
}

.seat-overview-wrapper .seat-info li .value {
  display: inline-block;
}

.seat-overview-wrapper .book-bus-btn {
  height: 40px;
  margin-top: 25px;
  padding: 10px 20px;
  line-height: 1;
  color: #fff;
  font-weight: 600;
  border-radius: 6px;
  display: block;
  text-align: center;
  pointer-events: initial;
  background: #0e9e4d;
}
.seat-overview-wrapper .book-bus-btn.disabled {
  background: red;
  opacity: 0.4;
  cursor: no-drop;
  pointer-events: none;
}
.booked .seat {
  pointer-events: none;
  background: #dedede;
}
</style>
