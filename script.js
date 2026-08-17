/* =========================
   PARTICLES
========================= */

const bgParticles =
document.getElementById("bgParticles");

if(bgParticles){

    for(let i=0;i<35;i++){

        const particle =
        document.createElement("div");

        particle.style.position="absolute";
        particle.style.width=Math.random()*5+2+"px";
        particle.style.height=particle.style.width;
        particle.style.borderRadius="50%";

        particle.style.background=
        "rgba(255,255,255,.25)";

        particle.style.left=
        Math.random()*100+"%";

        particle.style.top=
        Math.random()*100+"%";

        bgParticles.appendChild(
            particle
        );
    }
}

/* =========================
   ROOMS
========================= */

const rooms = [
    "doorRoom",
    "galleryRoom",
    "apologyRoom",
    "reflectionRoom",
    "treatyRoom",
    "finalRoom",
    "celebrationRoom"
];

function showRoom(roomId){

    rooms.forEach(id=>{

        const room =
        document.getElementById(id);

        if(room){
            room.classList.remove("active");
        }

    });

    const target =
    document.getElementById(roomId);

    if(target){
        target.classList.add("active");
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

/* =========================
   DOOR
========================= */

const openDoorBtn =
document.getElementById(
    "openDoorBtn"
);

const doorWrapper =
document.querySelector(
    ".door-wrapper"
);

if(openDoorBtn){

    openDoorBtn.addEventListener(
        "click",
        ()=>{

            if(doorWrapper){

                doorWrapper.classList.add(
                    "open-door"
                );

            }

            openDoorBtn.disabled=true;

            setTimeout(()=>{

                showRoom(
                    "galleryRoom"
                );

            },1800);

        }
    );

}

/* =========================
   ROOM BUTTONS
========================= */

const goRoom2 =
document.getElementById("goRoom2");

if(goRoom2){

    goRoom2.addEventListener(
        "click",
        ()=>{

            showRoom(
                "apologyRoom"
            );

        }
    );

}

const goRoom3 =
document.getElementById("goRoom3");

if(goRoom3){

    goRoom3.addEventListener(
        "click",
        ()=>{

            showRoom(
                "reflectionRoom"
            );

        }
    );

}

const goRoom4 =
document.getElementById("goRoom4");

if(goRoom4){

    goRoom4.addEventListener(
        "click",
        ()=>{

            showRoom(
                "treatyRoom"
            );

        }
    );

}

/* =========================
   ENVELOPE
========================= */

const envelope =
document.getElementById(
    "envelope"
);

const letterBox =
document.getElementById(
    "letterBox"
);

if(envelope){

    envelope.addEventListener(
        "click",
        ()=>{

            envelope.style.display=
            "none";

            if(letterBox){

                letterBox.style.display=
                "block";

            }

        }
    );

}

/* =========================
   TREATY
========================= */

const treatyBtn =
document.getElementById(
    "acceptTreatyBtn"
);

if(treatyBtn){

    treatyBtn.addEventListener(
        "click",
        ()=>{

            const checks =
            document.querySelectorAll(
                ".treatyCheck"
            );

            const accepted =
            [...checks].every(
                c => c.checked
            );

            if(!accepted){

                alert(
                    "Please accept all treaty conditions 💜"
                );

                return;
            }

            showRoom(
                "finalRoom"
            );

        }
    );

}

/* =========================
   FINAL ROOM
========================= */

const restoreBtn =
document.getElementById(
    "restoreBtn"
);

if(restoreBtn){

    restoreBtn.addEventListener(
        "click",
        ()=>{

            createConfetti();

            showRoom(
                "celebrationRoom"
            );

        }
    );

}

/* Funny button */

const funnyBtn =
document.getElementById(
    "funnyBtn"
);

if(funnyBtn){

    funnyBtn.addEventListener(
        "mouseover",
        ()=>{

            const x =
            Math.random()*200-100;

            const y =
            Math.random()*100-50;

            funnyBtn.style.transform =
            `translate(${x}px,${y}px)`;

        }
    );

}

/* =========================
   CONFETTI
========================= */

function createConfetti(){

    const container =
    document.getElementById(
        "confettiContainer"
    );

    if(!container) return;

    for(let i=0;i<100;i++){

        const piece =
        document.createElement(
            "div"
        );

        piece.style.position=
        "absolute";

        piece.style.width=
        "10px";

        piece.style.height=
        "14px";

        piece.style.left=
        Math.random()*100+"vw";

        piece.style.top=
        "-20px";

        piece.style.background=
        [
            "#8f5cff",
            "#d7b06b",
            "#ffffff",
            "#ff8dd4"
        ][Math.floor(Math.random()*4)];

        piece.style.transition=
        "5s linear";

        container.appendChild(
            piece
        );

        setTimeout(()=>{

            piece.style.top=
            "110vh";

            piece.style.transform=
            `rotate(${Math.random()*900}deg)`;

        },50);

        setTimeout(()=>{

            piece.remove();

        },5500);

    }

}

/* =========================
   CERTIFICATE DATE
========================= */

const certificateDate =
document.getElementById(
    "certificateDate"
);

if(certificateDate){

    certificateDate.innerText =
    new Date().toLocaleDateString(
        "en-IN",
        {
            day:"numeric",
            month:"long",
            year:"numeric"
        }
    );

}

/* =========================
   PRINT
========================= */

const printBtn =
document.getElementById(
    "printCertificateBtn"
);

if(printBtn){

    printBtn.addEventListener(
        "click",
        ()=>{

            window.print();

        }
    );

}

/* =========================
   START
========================= */

showRoom("doorRoom");
/* =========================
   WHY THIS MUSEUM
========================= */

const museumReasonBtn =
document.getElementById(
    "museumReasonBtn"
);

const museumReasonText =
document.getElementById(
    "museumReasonText"
);

if(museumReasonBtn){

    museumReasonBtn.addEventListener(
        "click",
        ()=>{

            museumReasonText.style.display =
            "block";

            const message =
            "Because some friendships are worth fighting for. And ours is one of them. 💜";

            let i = 0;

            museumReasonText.innerHTML = "";

            const typer =
            setInterval(()=>{

                museumReasonText.innerHTML +=
                message[i];

                i++;

                if(i >= message.length){

                    clearInterval(
                        typer
                    );

                }

            },35);

        }
    );

}

/* =========================
   SECRET NOTE
========================= */

const secretBtn =
document.getElementById(
    "secretNoteBtn"
);

const secretNote =
document.getElementById(
    "secretNote"
);

if(secretBtn){

    secretBtn.addEventListener(
        "click",
        ()=>{

            secretNote.style.display =
            "block";

        }
    );

}

/* =========================
   FRIENDSHIP STATS
========================= */

function animateValue(
    id,
    end
){

    const el =
    document.getElementById(id);

    if(!el) return;

    let value = 0;

    const timer =
    setInterval(()=>{

        value++;

        el.innerText = value;

        if(value >= end){

            clearInterval(timer);

        }

    },20);

}

animateValue(
    "strengthCount",
    97
);

animateValue(
    "memoryCount",
    150
);

animateValue(
    "laughCount",
    999
);

/* =========================
   OATH
========================= */

const oathLines = [

"I shall not stay angry forever 😌",

"I shall continue annoying Jinang 😂",

"I shall remain a premium best friend 💜",

"Friendship Restored 🤝"

];

let oathIndex = 0;

const oathBtn =
document.getElementById(
    "oathBtn"
);

const oathText =
document.getElementById(
    "oathText"
);

if(oathBtn){

    oathBtn.addEventListener(
        "click",
        ()=>{

            oathText.innerText =
            oathLines[oathIndex];

            oathIndex++;

            if(
                oathIndex >=
                oathLines.length
            ){

                oathIndex = 0;

            }

        }
    );

}

/* =========================
   FINAL GIFT
========================= */

const giftBtn =
document.getElementById(
    "giftBtn"
);

const giftMessage =
document.getElementById(
    "giftMessage"
);

if(giftBtn){

    giftBtn.addEventListener(
        "click",
        ()=>{

            giftMessage.style.display =
            "block";

        }
    );

}