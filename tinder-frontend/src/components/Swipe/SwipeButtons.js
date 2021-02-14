import React from 'react';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import "./SwipeButtons.css";

function SwipeButtons() {

    const swiped = () => {}

    return (
      <div className="swipeButtons__cont">
        <div className="swipeButtons">
            <IconButton onClick={swiped} className="swipeButtons__repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton onClick={swiped} className="swipeButtons__left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton onClick={swiped} className="swipeButtons__star">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton onClick={swiped} className="swipeButtons__right">
                <FavouriteIcon fontSize="large"/>
            </IconButton>
            <IconButton onClick={swiped} className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
        </div>
    )
}

export default SwipeButtons
