import React,{useState,useEffect} from 'react'
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import axios from "../axiosInstance";

function TinderCards() {
    const [people,setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/tinder/card");
            setPeople(req.data);
        }
        fetchData();
    }, []);

    const swiped = () => {}
    const outOfFrame = () => {}

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {
                people.map((person) => (
                  <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen = {() => outOfFrame(person.name)}
                  >
                      <div
                        style={{backgroundImage:"url("+person.imgurl+")"}}
                        className="card"
                      >
                        <h3>{person.name}</h3>
                      </div>
                  </TinderCard>
                ))
            }
            </div>
        </div>
    )
}

export default TinderCards;
