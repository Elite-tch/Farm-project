import React, { useState, useRef, useEffect } from "react";

function OfferSection() {
    const Ref = useRef(null);
    const [timer, setTimer] = useState("00:00:00");
    const [hours, setHours] = useState(0); // New state for hours
    const [minutes, setMinutes] = useState(0); // New state for minutes
    const [seconds, setSeconds] = useState(0); // New state for seconds

    function getTimeRemaining(e) {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / 1000 / 60 / 60 / 24);
        return {
            total,
            days,
            hours: days * 24 + hours, // Total hours
            minutes,
            seconds,
        };
    }

    function startTimer(e) {
        let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9 ? minutes : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }
    }

    const clearTimer = (e) => {
        const initialHours = 95;
        const initialMinutes = 30;
        const initialSeconds = 20;
        const totalSeconds = initialHours * 3600 + initialMinutes * 60 + initialSeconds;
        setHours(totalSeconds / 3600); // Set initial total hours
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
        setTimer(
            (initialHours > 9 ? initialHours : "0" + initialHours) +
            ":" +
            (initialMinutes > 9 ? initialMinutes : "0" + initialMinutes) +
            ":" +
            (initialSeconds > 9 ? initialSeconds : "0" + initialSeconds)
        );
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setHours(deadline.getHours() + 95);
        deadline.setMinutes(deadline.getMinutes() + 30);
        deadline.setSeconds(deadline.getSeconds() + 20);
        return deadline;
    };

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    return (
        <div className="offer-section">
          <div className="container-fluid text-center">
<h1 className="offer-title">
Get 10% Off Your First Purchase!
</h1>
  <h4 className="suboffer-title">Exclusive Limited-Time Discount on All Fresh Fruits</h4>
            <p className="offer-para">Enjoy a 10% discount on your first order of fresh farm products, including coconuts, watermelons, and more. This special offer is available for a limited time only. Don't miss out—shop now and save on quality produce straight from the farm! </p>
            <h3 className="offer-timer pt-2">
                {hours} hours : {minutes} mins : {seconds} secs
            </h3>
<button className="offer-button mt-3">
Claim Your Discount
  </button>
            

            
</div>
          
            
        </div>
    );
}

export default OfferSection;
