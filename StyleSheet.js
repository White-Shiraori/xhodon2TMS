let styleSheet = `
.collapsible {
  background: linear-gradient(90deg, rgba(25,5,5,0) 0%, rgba(190,125,25,1) 50%, rgba(25,5,5,0) 100%);
  text-align: center;
  color: white;
  cursor: pointer;
  padding: 2px;
  width: 100%;
  border: none;
  outline: none;
  text-shadow: 0.5px 0.5px 0.5px #222, 0.5px -0.5px 0.5px #222, -0.5px 0.5px 0.5px #222, -0.5px -0.5px 0.5px #222;
}

.collapsarrow {
    margin-left: 15px;
    transform: rotate(180deg);
    vertical-align: bottom;
}

.winner {
  background: linear-gradient(90deg, rgba(25,5,5,1) 0%, rgba(40,120,0,1) 50%, rgba(25,5,5,1) 100%);
  text-align: center;
  font-size: 12px;
}

.loser {
  background: linear-gradient(90deg, rgba(25,5,5,1) 0%, rgba(130,0,0,1) 50%, rgba(25,5,5,1) 100%);
  text-align: center;
  font-size: 12px;
}
`;

let s = document.createElement('style');
s.type = "text/css";
s.innerHTML = styleSheet;
(document.head || document.documentElement).appendChild(s);