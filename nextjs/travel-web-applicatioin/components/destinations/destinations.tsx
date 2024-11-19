import styles from "./destinations.module.scss";
// Imported icons
import { MdLocationPin } from "react-icons/md";
import {
  BsFillCalendarDateFill,
  BsFillCreditCard2BackFill,
} from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import React from "react";
import Image from "next/image";
import { TiLocation } from "react-icons/ti";

// Let`s create on array hat is gonna contain all destination data and we loop through

interface DestinationsItem {
  id: number;
  img: string;
  name: string;
  location: string;
  rating: number;
}

const destinations: DestinationsItem[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1694501898715-6961da5a6e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    name: "Seychelles Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1667126445419-4c8870bf9597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    name: "Seychelles Island",
    location: "Indian Ocean",
    rating: 3.7,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1692431483342-4b9d17d634fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Seychelles Island",
    location: "Indian Ocean",
    rating: 4.5,
  },

  {
    id: 4,
    img: "https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    name: "Seychelles Island",
    location: "Indian Ocean",
    rating: 4,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1721&q=80",
    name: "Seychelles Island",
    location: "United States",
    rating: 4.2,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    name: "Pathway to the Mediterranean",
    location: "Oia, Greece",
    rating: 3.9,
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    name: "nature pool in Varenna",
    location: "Varenna, Italy",
    rating: 4.9,
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1491510736257-3ad769ff47b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    name: "pool meditation",
    location: "Ubud, Indonesia",
    rating: 4.2,
  },
];

const Destinations = () => {
  return (
    <div className={styles.destinations}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.redText}>EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>
        <div className={styles.searchField}>
          <div className={styles.inputField}>
            <MdLocationPin className={styles.icon} />
            <input type={"text"} placeholder={"Location"} />
          </div>

          <div className={styles.inputField}>
            <BsFillCalendarDateFill className={styles.icon} />
            <input type={"text"} placeholder={"Budget"} />
          </div>

          <div className={styles.inputField}>
            <BsFillCreditCard2BackFill className={styles.icon} />
            <input type={"text"} placeholder={"Date"} />
          </div>
          <button className={styles.btn}>
            <BiSearchAlt2 className={styles.icon} />
            Search
          </button>
        </div>
        <div className={styles.menu}>
          <ul className={styles.container}>
            <li className={styles.active}>All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className={styles.destination}>
          {destinations.map(({ id, img, name, location, rating }) => {
            return (
              <div key={id} className={styles.single}>
                <div className={styles.imgWrapper}>
                  <Image src={img} height={360} width={360} alt={name} />
                  <div className={styles.descInfo}>
                    <div className={styles.text}>
                      <span className={styles.name}>{name}</span>
                      <p>
                        <TiLocation className={styles.icon} />
                        {location}
                      </p>
                    </div>
                    <span className={styles.rating}>{rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Destinations;
